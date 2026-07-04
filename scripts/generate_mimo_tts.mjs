import { spawnSync } from "node:child_process";
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";

const project = resolve(process.argv[2] || ".");
const ttsDir = join(project, "scripts", "tts");
const audioDir = join(project, "dist", "audio");
const narrationPath = join(project, "scripts", "narration.json");

const baseUrl = (process.env.MIMO_BASE_URL || "").replace(/\/$/, "");
const apiKey = process.env.MIMO_API_KEY;
const voice = process.env.MIMO_TTS_VOICE || "mimo_default";
const model = process.env.MIMO_TTS_MODEL || "mimo-v2.5-tts";

if (!baseUrl) throw new Error("MIMO_BASE_URL is not set.");
if (!apiKey) throw new Error("MIMO_API_KEY is not set.");

mkdirSync(audioDir, { recursive: true });

function run(command, args) {
  const result = spawnSync(command, args, { encoding: "utf8" });
  if (result.status !== 0) {
    throw new Error(`${command} failed: ${result.stderr || result.stdout}`);
  }
  return result.stdout;
}

function ffmpegConvert(input, output) {
  run("ffmpeg", ["-y", "-loglevel", "error", "-i", input, "-codec:a", "libmp3lame", "-q:a", "4", output]);
}

function ffprobeDuration(file) {
  const result = spawnSync(
    "ffprobe",
    ["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", file],
    { encoding: "utf8" }
  );
  if (result.status !== 0) return null;
  const seconds = Number(result.stdout.trim());
  return Number.isFinite(seconds) ? Math.round(seconds * 1000) : null;
}

function extractAudioData(payload) {
  const message = payload?.choices?.[0]?.message;
  const audio = message?.audio;
  if (typeof audio?.data === "string") return audio.data;
  if (typeof audio === "string") return audio;
  return null;
}

async function generateAudio(text, id) {
  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "api-key": apiKey,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "user",
          content: "用清晰、克制、适合课程演示的中文声音播报。语速中等，英文技术术语保持自然读法。"
        },
        {
          role: "assistant",
          content: text
        }
      ],
      audio: {
        format: "wav",
        voice
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`MiMo TTS failed for ${id}: ${response.status} ${errorText.slice(0, 300)}`);
  }

  const payload = await response.json();
  const audioData = extractAudioData(payload);
  if (!audioData) {
    throw new Error(`MiMo response for ${id} did not include choices[0].message.audio.data.`);
  }
  return Buffer.from(audioData.includes(",") ? audioData.split(",").pop() : audioData, "base64");
}

const files = readdirSync(ttsDir).filter((file) => /^slide-\d+\.txt$/.test(file)).sort();
const narration = JSON.parse(readFileSync(narrationPath, "utf8"));
const durationByFile = new Map();

for (const file of files) {
  const id = basename(file, ".txt");
  const text = readFileSync(join(ttsDir, file), "utf8").trim();
  const wavPath = join(audioDir, `${id}.wav`);
  const mp3Path = join(audioDir, `${id}.mp3`);
  console.error(`MiMo TTS ${project} ${id} ...`);
  const wav = await generateAudio(text, id);
  writeFileSync(wavPath, wav);
  ffmpegConvert(wavPath, mp3Path);
  rmSync(wavPath, { force: true });
  const durationMs = ffprobeDuration(mp3Path);
  if (durationMs) durationByFile.set(`${id}.mp3`, durationMs);
  console.error(`  wrote ${mp3Path}${durationMs ? ` (${durationMs}ms)` : ""}`);
}

for (const [index, slide] of narration.slides.entries()) {
  const file = `slide-${String(index + 1).padStart(2, "0")}.mp3`;
  slide.audio = `audio/${file}`;
  if (durationByFile.has(file)) slide.durationMs = durationByFile.get(file);
}

writeFileSync(narrationPath, `${JSON.stringify(narration, null, 2)}\n`, "utf8");
console.log(`Generated ${files.length} MiMo audio files for ${project} with voice ${voice}.`);

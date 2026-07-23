import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public");

/** @type {{ dir: string; width: number; quality: number }[]} */
const jobs = [
  { dir: "stock/hero", width: 1600, quality: 72 },
  { dir: "stock/styles", width: 1200, quality: 72 },
  { dir: "stock/before-after", width: 1100, quality: 70 },
  { dir: "stock/journey", width: 900, quality: 70 },
  { dir: "portfolio", width: 800, quality: 70 },
];

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (/\.(jpe?g|png)$/i.test(entry.name)) files.push(full);
  }
  return files;
}

async function optimizeFile(file, width, quality) {
  const ext = path.extname(file);
  const out = file.replace(/\.(jpe?g|png)$/i, ".webp");
  const before = (await fs.stat(file)).size;
  await sharp(file)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toFile(out);
  const after = (await fs.stat(out)).size;
  if (path.resolve(out) !== path.resolve(file)) {
    await fs.unlink(file);
  }
  console.log(
    `${path.relative(root, file)} → ${path.relative(root, out)}  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`,
  );
}

for (const job of jobs) {
  const dir = path.join(root, job.dir);
  try {
    const files = await walk(dir);
    for (const file of files) {
      await optimizeFile(file, job.width, job.quality);
    }
  } catch (err) {
    if (err && typeof err === "object" && "code" in err && err.code === "ENOENT") {
      continue;
    }
    throw err;
  }
}

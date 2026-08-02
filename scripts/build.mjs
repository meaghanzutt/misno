import { cp, mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const outputDirectory = path.join(projectRoot, "dist");
const publicExtensions = new Set([".html", ".png", ".txt", ".xml"]);
const publicFiles = new Set(["_redirects"]);

await rm(outputDirectory, { force: true, recursive: true });
await mkdir(outputDirectory, { recursive: true });

const entries = await readdir(projectRoot, { withFileTypes: true });

await Promise.all(
  entries
    .filter(
      (entry) =>
        entry.isFile() &&
        (publicFiles.has(entry.name) || publicExtensions.has(path.extname(entry.name))),
    )
    .map((entry) =>
      cp(path.join(projectRoot, entry.name), path.join(outputDirectory, entry.name)),
    ),
);

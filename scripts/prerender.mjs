/**
 * Bakes the server-rendered app into dist/index.html so the page
 * ships real content in the HTML — no waiting on the JS bundle.
 */
import { readFile, writeFile } from "node:fs/promises";
import { render } from "../dist-ssr/entry-server.js";

const html = await readFile("dist/index.html", "utf8");

const withContent = html.replace(
  '<div id="root"></div>',
  `<div id="root">${render()}</div>`
);

if (withContent === html) {
  console.error("prerender: #root placeholder not found in dist/index.html");
  process.exit(1);
}

await writeFile("dist/index.html", withContent);
console.log("prerender: wrote static content into dist/index.html");

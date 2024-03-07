import { m2h } from "../src/index.ts";

const markdown = await Deno.readTextFile("example/index.md");
const html = m2h(markdown);

await Deno.writeTextFile("example/outputs/index.html", html);

import { m2h } from "../src/index.ts";

const markdown = await Deno.readTextFile("example/index.md");
m2h(markdown);

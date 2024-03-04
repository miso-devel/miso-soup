import { m2h } from "../src/index.ts";

const markdown = await Deno.readTextFile("example/index.md");
const result = m2h(markdown);

console.log(result);

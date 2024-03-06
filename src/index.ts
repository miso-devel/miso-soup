import { MARKDOWN_KEYS, MARKDOWN_PAIR } from "./constants.ts";
import { MarkdownType } from "./types.d.ts";
import { Element, MarkdownKey } from "./types.d.ts";

const mdSplitter = (markdown: string): string[] =>
  markdown.split(/\r\n|\r|\n/).filter((f) => f !== "");

const lineParser = (line: string): Element | Error => {
  const [type, ...rest] = line.split(" ");
  const value = rest.join(" ");
  if (!MARKDOWN_KEYS.includes(type as MarkdownKey)) {
    return { type: "p", value: line };
  }
  return { type: MARKDOWN_PAIR[type as MarkdownKey], value };
};

export const m2h = (markdown: string): string => {
  const lineArray = mdSplitter(markdown);
  lineArray.map((line) => {
    const res = lineParser(line);
    console.log("element: ", res);
  });
  return markdown;
};

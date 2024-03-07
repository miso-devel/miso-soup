import { MARKDOWN_KEYS, MARKDOWN_PAIR } from "./constants.ts";
import { Element, MarkdownKey } from "./types.d.ts";

const mdSplitter = (markdown: string): string[] =>
  markdown.split(/\r\n|\r|\n/).filter((f) => f !== "");

const lineParser = (line: string): Element => {
  const [type, ...rest] = line.split(" ");
  const value = rest.join(" ");
  if (!MARKDOWN_KEYS.includes(type as MarkdownKey)) {
    return { type: "p", value: line };
  }
  return { type: MARKDOWN_PAIR[type as MarkdownKey], value };
};

const lineToHtml = (line: Element): string => {
  const { type, value } = line;
  return `<${type}>${value}</${type}>`;
};

export const m2h = (markdown: string): string => {
  const lineArray = mdSplitter(markdown);
  const parsedLine = lineArray.map((line) => lineParser(line));
  const html = parsedLine.map((line) => lineToHtml(line)).join("\n");
  return html;
};

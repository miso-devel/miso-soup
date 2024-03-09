import type { MarkdownKey, MarkdownPair, MarkdownType } from "./types.d.ts";

export const MARKDOWN_PAIR: MarkdownPair = {
  "#": "h1",
  "##": "h2",
  "###": "h3",
  "####": "h4",
  "#####": "h5",
  "######": "h6",
  "": "p",
};

export const MARKDOWN_KEYS = Object.keys(MARKDOWN_PAIR) as MarkdownKey[];
export const MARKDOWN_VALUES: MarkdownType[] = Object.values(MARKDOWN_PAIR);

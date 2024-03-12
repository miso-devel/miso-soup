export type MarkdownPair = {
  "#": "h1";
  "##": "h2";
  "###": "h3";
  "####": "h4";
  "#####": "h5";
  "######": "h6";
  "": "p";
};

export type MarkdownKey = keyof MarkdownPair;
export type MarkdownType = MarkdownPair[MarkdownKey];

export type Element = {
  type: MarkdownType;
  value: string;
};

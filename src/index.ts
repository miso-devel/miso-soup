import { Element, Token } from "./types.d.ts";

const mdSplitter = (markdown: string): string[] =>
  markdown.split(/\r\n|\r|\n/).filter((f) => f !== "");

const getToken = (line: string): Token => {
  const [elmType, ...value] = line.split(" ");
  if (value.length === 0) return { head: "", value: elmType };
  return { head: elmType, value: value.join(" ") };
};

const detectElementType = (token: Token): string => {
  switch (token.head) {
    case "#":
      return "h1";
    case "##":
      return "h2";
    case "###":
      return "h3";
    case "####":
      return "h4";
    case "#####":
      return "h5";
    case "######":
      return "h6";
    default:
      return "p";
  }
};

const detectElement = (line: string): Element => {
  const token = getToken(line);
  const type = detectElementType(token);
  return { type, value: token.value };
};

export const m2h = (markdown: string): string => {
  const lineArray = mdSplitter(markdown);
  lineArray.map((line) => {
    const element = detectElement(line);
    console.log("element: ", element);
  });
  return markdown;
};

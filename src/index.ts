import { Token } from "./Token.d.ts";

const mdSplitter = (markdown: string): string[] =>
  markdown.split(/\r\n|\r|\n/).filter((f) => f !== "");

const detectElement = (line: string): Token => {
  switch (line.split(" ")[0]) {
    case "#":
      return { elm: "h1", value: line.split(" ")[1] };
    case "##":
      return { elm: "h2", value: line.split(" ")[1] };
    case "###":
      return { elm: "h3", value: line.split(" ")[1] };
    case "####":
      return { elm: "h4", value: line.split(" ")[1] };
    case "#####":
      return { elm: "h5", value: line.split(" ")[1] };
    case "######":
      return { elm: "h6", value: line.split(" ")[1] };
    default:
      return { elm: "p", value: line };
  }
};

export const m2h = (markdown: string): string => {
  const lineArray = mdSplitter(markdown);
  lineArray.map((line) => {
    const token = detectElement(line);
    console.log(token);
  });
  return markdown;
};

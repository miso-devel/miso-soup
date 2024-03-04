const mdSplitter = (markdown: string): string[] =>
  markdown.split(/\r\n|\r|\n/).filter((f) => f !== "");

export const m2h = (markdown: string): string => {
  console.log("md splitter", mdSplitter(markdown));
  return markdown;
};

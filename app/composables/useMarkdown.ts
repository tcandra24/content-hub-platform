import MarkdownIt from "markdown-it";
import hljs from "markdown-it-highlightjs";

export function useMarkdown() {
  const md = new MarkdownIt({
    html: false,
    linkify: true,
    breaks: true,
  }).use(hljs);

  const renderMarkdown = (content: string) => {
    return md.render(content);
  };

  return { renderMarkdown };
}

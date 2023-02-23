import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import classes from "../styles/textArea.module.css";
import { markdownTheme } from "../libs/MarkDownTheme";

type Props = {
  input: string;
};
export default function MarkDownPreview({ input }: Props) {
  return (
    <ReactMarkdown
      className={`${classes.markdown} contents`}
      children={input}
      components={ChakraUIRenderer(markdownTheme)}
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
    />
  );
}

import { Box, Flex, Stack, Textarea } from "@chakra-ui/react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import classes from "../../styles/textArea.module.css";
import "../../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import { markdownTheme } from "../../libs/MarkDownTheme";
import SubmidButtons from "../../components/SubmidButtons";
import Header from "../../components/Header";
import TitleAndTagInput from "../../components/TitleAndTagInput";

export default function Article() {
  const [input, setInput] = useState<string>("");
  const ref = useRef(null);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    const textArea = document.querySelector("#editor") as HTMLTextAreaElement;
    const preview = document.querySelector("#mdPrev") as HTMLDivElement;
    const bb = preview.getBoundingClientRect();
    const pos = textArea.scrollTop;
    textArea.innerHTML;
    textArea.addEventListener("scroll", () => {
      const rows = textArea.value.split(`\n`);
      const currnetTextAreaHeight = textArea.clientHeight;
      const scrollOffsetY = textArea.scrollTop;
      const maxHeight = textArea.scrollHeight;
      const rowSize = rows ? maxHeight / rows.length : undefined;
      const currentTopRows = rowSize && Math.floor(scrollOffsetY / rowSize);
      const currentRowContents = rows[currentTopRows as number];
      const h = preview.offsetTop;

      if (currentRowContents.indexOf(serch) !== -1) {
        const tag = currentRowContents.split(" ");
        const tagLength = tag[0].length;
        const tagName = "#".repeat(tagLength) + " ";
        const splitHead = currentRowContents.split(tagName);
        const title = splitHead[1];

        const html: HTMLElement[] = Array.prototype.slice.call(
          preview.getElementsByTagName(`h${tagLength}`)
        );

        const targetDom = html.filter((element) => {
          if (element.innerHTML === title) {
            return element;
          }
        });
        const target = targetDom[0];
        target.scrollIntoView({
          // behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Stack
        spacing={"10px"}
        bg="#f5f5f5"
        alignItems={"center"}
        h="calc(100vh - 63px)"
      >
        <TitleAndTagInput />
        <Flex
          w="100%"
          h="calc(100vh - 250px)"
          justify={"center"}
          bg="#f5f5f5"
          pb="20px"
        >
          <Textarea
            id={"editor"}
            ref={ref}
            sx={texteAreaStyle}
            placeholder="マークダウン記法で記述しよう！"
            value={input}
            variant="undefined"
            onChange={(e) => setInput(e.target.value)}
          />
          <Box
            id="mdPrev"
            w="45%"
            height="100%"
            p="20px"
            bg="#fff"
            scrollPaddingTop={"100px"}
            overflowY={"scroll"}
            borderRadius={"10px"}
          >
            <ReactMarkdown
              className={classes.markdown}
              children={input}
              components={ChakraUIRenderer(markdownTheme)}
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex]}
            />
          </Box>
        </Flex>
        <SubmidButtons />
      </Stack>
    </>
  );
}
const serch = "# h";
const texteAreaStyle = {
  w: "45%",
  h: "100%",
  p: "20px",
  fontSize: "15px",
  color: "#333",
  borderRadius: "10px",
  borderRight: "2px solid #f0f0f0",
  outline: "none",
  boxShadow: "none",
  background: "#fff",
};

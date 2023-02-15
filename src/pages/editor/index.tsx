import { Box, Checkbox, Flex, Stack, Text, Textarea } from "@chakra-ui/react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import classes from "../../styles/textArea.module.css";
import "../../styles/Home.module.css";
import { useCallback, useEffect, useState } from "react";
import { markdownTheme } from "../../libs/MarkDownTheme";
import SubmidButtons from "../../components/SubmidButtons";
import Header from "../../components/Header";
import TitleAndTagInput from "../../components/TitleAndTagInput";
import MarkDownPreview from "../../components/MarkDownPreview";
import Footer from "../../components/Footer";

export default function Editor() {
  const [input, setInput] = useState<string>("");
  const [scrollSync, setScrollSync] = useState<boolean>(true);

  const scroll = useCallback(() => {
    const textArea = document.querySelector("#editor") as HTMLTextAreaElement;
    const preview = document.querySelector("#mdPrev") as HTMLDivElement;

    const textAreaScrollOffsetY = textArea.scrollTop;
    const textAreaMaxHeight = textArea.scrollHeight;
    const previewMaxHeight = preview.scrollHeight;
    const previewScrollOffsetY =
      (textAreaScrollOffsetY / (textAreaMaxHeight - textArea.clientHeight)) *
      (previewMaxHeight - preview.clientHeight);
    scrollSync && preview.scrollTo(0, previewScrollOffsetY);

    // const direction = (scrollDirection / textAreaMaxHeight) * previewMaxHeight;
    // const textAreaPosRatio = textAreaScrollOffsetY / textAreaMaxHeight;

    // const before = scrollDirection;
    // const after = textAreaScrollOffsetY;
    // const minus = after - before;
    // const prevAddDistance = (minus / textAreaMaxHeight) * previewMaxHeight;

    // const targetPrevPos = preview.scrollTop + prevAddDistance;
    // const rows = textArea.value.split(`\n`);
    // const rowSize = rows ? textAreaMaxHeight / rows.length : undefined;
    // const currentTopRows =
    //   rowSize && Math.floor(textAreaScrollOffsetY / rowSize);
    // const currentRowContents = rows[currentTopRows as number];
    // if (currentRowContents.indexOf(search) !== -1) {
    //   const tag = currentRowContents.split(" ");
    //   const tagLength = tag[0].length;
    //   const tagName = "#".repeat(tagLength) + " ";
    //   const splitHead = currentRowContents.split(tagName);
    //   const title = splitHead[1];
    //   const html: HTMLElement[] = Array.prototype.slice.call(
    //     preview.getElementsByTagName(`h${tagLength}`)
    //   );

    //   const targetDom = html.filter((element) => {
    //     if (element.innerHTML === title) {
    //       return element;
    //     }
    //   });
    //   const target = targetDom[0];
    //   target.scrollIntoView({
    //     block: "start",
    //   });
    //   // window.scroll(0, window.scrollY - 250);
    // } else {
    //   preview.scrollTo(0, targetPrevPos);
    //   scrollDirection = scrollOffsetY - scrollDirection;
    // }
  }, [scrollSync]);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    const textArea = document.querySelector("#editor") as HTMLTextAreaElement;

    textArea.addEventListener("scroll", scroll);
    return () => textArea.removeEventListener("scroll", scroll);
  }, [scrollSync]);

  return (
    <>
      <Header />
      <Stack
        spacing={"10px"}
        bg="#eaedf0"
        alignItems={"center"}
        h="calc(100vh - 63px)"
      >
        <TitleAndTagInput />
        <Flex w="100%" h="calc(100vh - 250px)" justify={"center"} pb="20px">
          <Box sx={containerStyle}>
            <Box w="100%" h="40px">
              <Box
                bg="#fff"
                color="gray.500"
                w="150px"
                h="40px"
                fontWeight={"600"}
                lineHeight={"40px"}
                textAlign="center"
                borderRadius={"3px 3px 0 0 "}
                borderBottom="2px solid #eaedf0"
              >
                本&emsp;&emsp;文
              </Box>
            </Box>
            <Textarea
              id={"editor"}
              sx={texteAreaStyle}
              placeholder="マークダウン記法で記述しよう！"
              value={input}
              variant="undefined"
              onChange={(e) => setInput(e.target.value)}
            />
          </Box>
          <Box w="45%" h="100%">
            <Flex w="100%" h="40px">
              <Box
                bg="#fff"
                color="gray.500"
                w="150px"
                h="40px"
                fontWeight={"600"}
                lineHeight={"40px"}
                textAlign="center"
                borderRadius={"3px 3px 0 0 "}
                borderBottom="2px solid #eaedf0"
              >
                プレビュー
              </Box>
              <Box
                ml="5px"
                bg="gray.400"
                w="150px"
                h="40px"
                lineHeight={"40px"}
                textAlign="center"
                borderRadius={"3px 3px 0 0 "}
                borderBottom="1px solid #dcdcdc"
              >
                <Checkbox
                  color="#fff"
                  colorScheme="messenger"
                  defaultChecked
                  onChange={() => setScrollSync(!scrollSync)}
                >
                  <Text fontSize={"12px"} fontWeight={"600"}>
                    同時スクロール
                  </Text>
                </Checkbox>
              </Box>
            </Flex>
            <Box
              id="mdPrev"
              overflowY={"scroll"}
              w="100%"
              h="calc(100% - 40px)"
              p="20px"
              borderRadius={"0px 10px 10px 0px"}
              bg="#fff"
            >
              <MarkDownPreview input={input} />
            </Box>
          </Box>
        </Flex>
        <SubmidButtons />
      </Stack>
      <Footer />
    </>
  );
}
const search = "# h";
const containerStyle = {
  w: "45%",
  h: "100%",
};
const texteAreaStyle = {
  w: "100%",
  h: "calc(100% - 40px)",
  p: "20px",
  fontSize: "15px",
  color: "#333",
  borderRadius: "0px 0px 0px 10px",
  borderRight: "2px solid #f0f0f0",
  outline: "none",
  boxShadow: "none",
  background: "#fff",
};

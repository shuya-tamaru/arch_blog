import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
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

export default function Article() {
  const [input, setInput] = useState<string>("");
  const ref = useRef(null);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
  }, []);

  return (
    <>
      <Box
        bg={"teal.400"}
        color="#fff"
        fontWeight={800}
        textAlign={"center"}
        fontSize={"3xl"}
        lineHeight="60px"
        w="100%"
        h="60px"
        position="sticky"
      >
        header
      </Box>
      <Stack
        spacing={"10px"}
        bg="#f5f5f5"
        alignItems={"center"}
        h="calc(100vh - 63px)"
      >
        <Input
          w="90%"
          h="40px"
          bg="#fff"
          boxShadow={"xl"}
          variant="undefined"
          fontWeight="600"
          placeholder="タイトル："
          mt="10px"
        />
        <Input
          w="90%"
          h="40px"
          bg="#fff"
          boxShadow={"xl"}
          variant="undefined"
          fontWeight="600"
          placeholder="タグを入力："
        />
        <Flex
          w="100%"
          h="calc(100vh - 250px)"
          justify={"center"}
          bg="#f5f5f5"
          pb="20px"
        >
          <Textarea
            ref={ref}
            sx={texteAreaStyle}
            placeholder="マークダウン記法で記述しよう！"
            value={input}
            variant="undefined"
            onChange={(e) => setInput(e.target.value)}
          />
          <ReactMarkdown
            className={classes.markdown}
            children={input}
            components={ChakraUIRenderer(markdownTheme)}
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
          />
        </Flex>
        <Box h="50px" w="90%">
          <HStack spacing="10px" justify={"end"}>
            <Button w="100px" variant="outline" colorScheme="red">
              下書き保存
            </Button>
            <Button w="100px" colorScheme="red">
              投稿
            </Button>
          </HStack>
        </Box>
      </Stack>
    </>
  );
}

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

import { Flex, Textarea } from "@chakra-ui/react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import classes from "../../styles/textArea.module.css";
import "../../styles/Home.module.css";
import { useState } from "react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { markdownTheme } from "../../libs/MarkDownTheme";

export default function Article() {
  const [input, setInput] = useState<string>("");

  return (
    <>
      <Flex>
        <Textarea
          sx={texteAreaStyle}
          placeholder="Here is a sample placeholder"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <ReactMarkdown
          className={classes.markdown}
          children={input}
          components={ChakraUIRenderer(markdownTheme)}
        />
      </Flex>
    </>
  );
}

const texteAreaStyle = {
  w: "50%",
  h: "100vh",
  p: "20px",
  fontSize: "15px",
  color: "#333",
  borderRadius: 0,
  outline: "none",
  boxShadow: "none",
  focusBorderColor: "gray.200",
};

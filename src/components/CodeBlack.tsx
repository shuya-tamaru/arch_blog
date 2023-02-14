import { CodeComponent } from "react-markdown/lib/ast-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyIcon } from "@chakra-ui/icons";

import { escapeHtml } from "../libs/EscapeHtml";
import classes from "../styles/textArea.module.css";
import { Box, Text, Tooltip, useClipboard } from "@chakra-ui/react";
import { useEffect } from "react";

const CodeBlack: CodeComponent = ({ inline, className, children }) => {
  const { onCopy, value, setValue, hasCopied } = useClipboard("");

  if (inline) {
    return <code className={className}>{children}</code>;
  }
  const match = /language-(\w+)/.exec(className || "language-plaintext");
  const filename = match ? className?.split(":")[1] ?? undefined : undefined;

  useEffect(() => {
    setValue(children[0] as string);
  }, [children]);

  return (
    <>
      {filename && (
        <Box className={classes.codeBlockFileNameContainer}>
          <Text className={classes.codeBlockFilename}>
            {escapeHtml(filename)}
          </Text>
        </Box>
      )}
      <Box position={"relative"}>
        <Tooltip
          label={hasCopied ? "Copied!" : "Copy"}
          hasArrow
          placement="top"
          bg="gray.600"
          closeDelay={1.5}
          closeOnClick={false}
        >
          <CopyIcon
            cursor={"pointer"}
            color="#fff"
            opacity={0.5}
            fontSize={"20px"}
            display="flex"
            position={"absolute"}
            top="10px"
            right="10px"
            _hover={{ opacity: 1.0 }}
            onClick={onCopy}
          />
        </Tooltip>
        <SyntaxHighlighter
          style={oneDark}
          language={match ? match[1] : undefined}
          filename={filename}
          children={String(children).replace(/\n$/, "")}
        />
      </Box>
    </>
  );
};

export default CodeBlack;

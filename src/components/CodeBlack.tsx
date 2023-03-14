import { CodeComponent } from "react-markdown/lib/ast-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyIcon } from "@chakra-ui/icons";
import { TwitterTweetEmbed } from "react-twitter-embed";
import YouTube from "react-youtube";

import { escapeHtml } from "../libs/EscapeHtml";
import classes from "../styles/textArea.module.css";
import {
  Alert,
  AlertIcon,
  Box,
  Center,
  Text,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import { useEffect } from "react";

const CodeBlack: CodeComponent = ({ inline, className, children }) => {
  const { onCopy, value, setValue, hasCopied } = useClipboard("");

  if (inline) {
    return <code className={className}>{children}</code>;
  }
  const match = /language-(\w+)/.exec(className || "language-plaintext");
  const lang = match && match[1];
  const filename = match ? className?.split(":")[1] ?? undefined : undefined;

  useEffect(() => {
    setValue(children[0] as string);
  }, [children]);

  return lang === "twitter" ? (
    <Box margin={"0 auto"} w="50%">
      <TwitterTweetEmbed
        placeholder={"Loading…"}
        tweetId={filename as string}
      />
    </Box>
  ) : lang === "youtube" ? (
    <Center>
      <YouTube videoId={filename as string} />
    </Center>
  ) : lang === "error" ||
    lang === "success" ||
    lang === "warning" ||
    lang === "info" ? (
    <Alert
      w="100%"
      variant="left-accent"
      borderRadius={"5px"}
      status={lang}
      fontSize={"sm"}
      color={"#777"}
      // whiteSpace="unset"
    >
      <AlertIcon />
      <Box w="95%" fontWeight={600} whiteSpace="normal">
        <Text
          display={"inline-block"}
          w="100%"
          fontWeight={600}
          sx={{ wordBreak: "break-word" }}
        >
          {value}
        </Text>
      </Box>
    </Alert>
  ) : (
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

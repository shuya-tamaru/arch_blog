import React, { useEffect, useState } from "react";
import fs from "fs";
import { GetStaticProps } from "next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { AiOutlineTags } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { BsBookmarkPlus } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

import Header from "../../components/Header";
import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import classes from "../../styles/textArea.module.css";
import { markdownTheme } from "../../libs/MarkDownTheme";

type StaticProps = {
  post: string;
};

export default function Posts(props: StaticProps) {
  const { post } = props;
  const [likeState, setLikeState] = useState<boolean>(false);
  const [stockState, setStockState] = useState<boolean>(false);
  const [headers, setHeaders] = useState<Element[]>([]);
  const trueColor = "teal.400";
  const trueFontColor = "#fff";
  const falseColor = "#333";
  useEffect(() => {
    const head = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
    const elements = Array.from(head);

    setHeaders(elements);
  }, []);

  const handleScroll = (head: Element) => {
    head.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <Flex w="100%" pt="50px" justify={"space-between"}>
        <Flex w="25%" pr="20px" justify={"end"}>
          <VStack>
            <Center
              w="45px"
              h="45px"
              bg={likeState ? trueColor : undefined}
              border={"2px solid"}
              borderColor={likeState ? trueColor : falseColor}
              borderRadius="50%"
              cursor={"pointer"}
              onClick={() => {
                setLikeState(!likeState);
              }}
            >
              <BiLike
                size={25}
                color={likeState ? trueFontColor : falseColor}
              />
            </Center>
            <Text fontSize={"xm"} fontWeight={"600"}>
              1
            </Text>
            <Center
              w="45px"
              h="45px"
              bg={stockState ? trueColor : undefined}
              border={"2px solid"}
              borderColor={stockState ? trueColor : falseColor}
              borderRadius="50%"
              cursor={"pointer"}
              onClick={() => {
                setStockState(!stockState);
              }}
            >
              <BsBookmarkPlus
                size={25}
                color={stockState ? trueFontColor : falseColor}
              />
            </Center>
            <Text fontSize={"xm"} fontWeight={"600"}>
              1
            </Text>
            <BsTwitter size={30} color="#666" cursor={"pointer"} />
            <BsFacebook size={30} color="#666" cursor={"pointer"} />
          </VStack>
        </Flex>

        <Box
          w="50%"
          h="100%"
          bg="#fff"
          px="20px"
          py="20px"
          overflowY={"scroll"}
        >
          <VStack spacing={8} direction="row" mb="40px">
            <VStack spacing={1} w="100%">
              <Flex w="100%">
                <Avatar
                  size="sm"
                  name="Shuya Tamaru"
                  src="https://bit.ly/broken-link"
                />
                <Center ml="10px" fontSize="xl" alignItems={"center"}>
                  <Link>UserName</Link>
                </Center>
              </Flex>
              <Text w="100%" fontSize="sm" fontWeight={"600"}>
                投稿日: 2022 / 01 / 01
              </Text>
              <Text w="100%" fontSize="sm" fontWeight={"600"}>
                更新日: 2023 / 01 / 01
              </Text>
            </VStack>
            <Heading>
              【建設業界向けの技術ブログ投稿サイト建設業界向けの技術ブログ投稿サイト】
            </Heading>
            <Flex w="100%">
              <AiOutlineTags size={25} />
              <Link>
                <Text fontSize="sm" ml="10px">
                  建築構造
                </Text>
              </Link>
              <Link>
                <Text fontSize="sm" ml="10px">
                  建築意匠
                </Text>
              </Link>
              <Link>
                <Text fontSize="sm" ml="10px">
                  Karamba
                </Text>
              </Link>
              <Link>
                <Text fontSize="sm" ml="10px">
                  Grasshopper
                </Text>
              </Link>
            </Flex>
          </VStack>
          <ReactMarkdown
            className={classes.markdown}
            children={post}
            components={ChakraUIRenderer(markdownTheme)}
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
          />
        </Box>
        <Flex w="25%" pl="30px" justify={"start"}>
          <VStack>
            {headers.map((head, index) => {
              const offset = index === 0 || head.tagName === "H1" ? 0 : 5;
              return (
                <Box
                  fontSize={"md"}
                  key={index}
                  onClick={() => handleScroll(head)}
                  pl={offset}
                  w="100%"
                  fontWeight="600"
                  cursor={"pointer"}
                  color="#666"
                  _hover={{
                    color: "teal",
                    borderRadius: "5px",
                  }}
                >
                  {index === 0 ? "タイトル" : head.innerHTML}
                </Box>
              );
            })}
          </VStack>
        </Flex>
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const post = fs.readFileSync(process.cwd() + "/src/posts/test.md", "utf8");
  return {
    props: {
      post,
    },
  };
};

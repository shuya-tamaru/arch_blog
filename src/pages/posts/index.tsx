import fs from "fs";
import { GetStaticProps } from "next";

import Header from "../../components/Header";
import { Box, Flex } from "@chakra-ui/react";
import SideIconsBar from "../../components/SideIconsBar";
import TableContents from "../../components/TableContents";
import PostContents from "../../components/PostContents";
import Footer from "../../components/Footer";
import Profile from "../../components/Profile";

type StaticProps = {
  post: string;
};

export default function Posts(props: StaticProps) {
  const { post } = props;

  return (
    <>
      <Header />
      <Flex w="100%" pt="50px" justify={"space-between"}>
        <Flex w="25%" pr="20px" justify={"end"}>
          <SideIconsBar />
        </Flex>
        <Box w="50%" h="100%" bg="#fff" p="20px" overflowY={"scroll"}>
          <PostContents post={post} />
        </Box>
        <Flex w="25%" pl="20px" justify={"start"}>
          <Box w="80%">
            <Box position={"sticky"} top="20px" w="100%">
              <Profile />
              <TableContents />
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Footer />
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

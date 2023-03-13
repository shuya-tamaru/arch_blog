import fs from "fs";
import { GetStaticProps } from "next";

import Header from "../../components/Header";
import { Box, Flex } from "@chakra-ui/react";
import SideIconsBar from "../../components/SideIconsBar";
import TableContents from "../../components/TableContents";
import PostContents from "../../components/PostContents";
import Footer from "../../components/Footer";
import Profile from "../../components/Profile";
import { JSDOM } from "jsdom";

type StaticProps = {
  post: string;
  cardDatas: any[];
};

export default function Posts(props: StaticProps) {
  const { post, cardDatas } = props;

  return (
    <>
      <Header />
      <Flex w="100%" pt="50px" justify={"space-between"}>
        <Flex w="25%" pr="20px" justify={"end"}>
          <SideIconsBar />
        </Flex>
        <Box w="50%" h="100%" bg="#fff" p="20px" overflowY={"scroll"}>
          <PostContents post={post} cardDatas={cardDatas} />
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

function getUrlList(content: string): Array<string> {
  const splitContent = content.split(/\r\n|\n/);
  const sentence = splitContent.filter((sentence) => {
    const regexp = /^https:\/\//;
    if (regexp.test(sentence)) {
      return sentence;
    }
  });
  return sentence ?? [];
}

export const getStaticProps: GetStaticProps = async () => {
  const post = fs.readFileSync(process.cwd() + "/src/posts/test2.md", "utf8");
  const urls = getUrlList(post);
  let cardDatas = [];
  const temps = await Promise.all(
    urls.map(async (url) => {
      const metas = await fetch(url)
        .then((res) => res.text())
        .then((text) => {
          const metaData = {
            url: url,
            title: "",
            description: "",
            image: "",
            icon: "",
          };
          const doms = new JSDOM(text);
          const metas = doms.window.document.getElementsByTagName("meta");
          const links = doms.window.document.getElementsByTagName("link");
          for (let i = 0; i < links.length; i++) {
            let pro = links[i].rel;
            if (typeof pro == "string") {
              if (pro.match("icon")) {
                const data = links[i].getAttribute("href");
                const icon = data ? data : "";
                metaData.icon = icon;
              }
            }
          }

          for (let i = 0; i < metas.length; i++) {
            let pro = metas[i].getAttribute("property");
            if (typeof pro == "string") {
              if (pro.match("title")) {
                const data = metas[i].getAttribute("content");
                const title = data ? data : "";
                metaData.title = title;
              }
              if (pro.match("description")) {
                const data = metas[i].getAttribute("content");
                const description = data ? data : "";
                metaData.description = description;
              }
              if (pro.match("image")) {
                const data = metas[i].getAttribute("content");
                const image = data ? data : "";
                metaData.image = image;
              }
            }
            pro = metas[i].getAttribute("name");

            if (typeof pro == "string") {
              if (pro.match("title")) {
                const data = metas[i].getAttribute("content");
                const title = data ? data : "";
                metaData.title = title;
              }
              if (pro.match("description")) {
                const data = metas[i].getAttribute("content");
                const description = data ? data : "";
                metaData.description = description;
              }
              if (pro.match("image")) {
                const data = metas[i].getAttribute("content");
                const image = data ? data : "";
                metaData.image = image;
              }
            }
          }
          return metaData;
        })
        .catch((e) => {
          console.log(e);
        });
      return metas;
    })
  );
  cardDatas = temps.filter((temp) => temp !== undefined);
  return {
    props: {
      post,
      cardDatas,
    },
  };
};

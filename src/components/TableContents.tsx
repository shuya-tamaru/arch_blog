import { Box, VStack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import tocbot from "tocbot";
import { Noto_Sans_JP } from "@next/font/google";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function TableContents() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".contents",
      headingSelector: "h1, h2, h3, h4",
      hasInnerContainers: true,
      collapseDepth: 6,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <VStack>
      <Box
        position={"sticky"}
        sx={tableContainerStyle}
        className={notoSansJp.className}
      >
        <Text
          textAlign={"center"}
          fontWeight="800"
          mb="5px"
          color="#666"
          fontSize={"md"}
        >
          目&emsp;次
        </Text>
        <Box fontSize={"sm"} className={`toc`}></Box>
      </Box>
    </VStack>
  );
}

const tableContainerStyle = {
  top: "20px",
  bg: "#fff",
  p: "20px",
  borderRadius: "5px",
};

import { Box, Flex, Text, Icon, SimpleGrid, Center } from "@chakra-ui/react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import UserDetail from "../../components/UserDetail";

const userPage = () => {
  const arr = [...Array(5)].map((_, i) => i + 1);
  return (
    <>
      <Header />
      <Box>
        <Flex h="100%">
          <Box w="20%" />
          <Box w="60%" h="100%">
            <Flex w="100%" p="20px" h="100%">
              <Box
                w="35%"
                h="60%"
                bg="#fff"
                borderRadius={"5px"}
                p="20px"
                position={"sticky"}
                top="20px"
              >
                <UserDetail />
              </Box>
              <Box w="65%" ml="20px" h="100%">
                <Box
                  bg="#fff"
                  w="100%"
                  h="100%"
                  borderRadius={"5px"}
                  p="20px"
                  overflowY={"scroll"}
                >
                  <Text borderBottom={"1px solid #333"} fontWeight={500}>
                    <Icon as={RiArticleLine} mr="10px" boxSize={5} />
                    投稿記事
                  </Text>
                  <SimpleGrid columns={2} spacing={5} mt="10px" h="90%">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                  </SimpleGrid>
                  <Center mt="10px">
                    <Flex>
                      <Box sx={nationStyle}>
                        <Center w="100%" h="100%">
                          <Icon as={AiFillCaretLeft} size={5} />
                        </Center>
                      </Box>
                      {arr.map((index) => {
                        return (
                          <Box key={index} sx={nationStyle}>
                            {index}
                          </Box>
                        );
                      })}
                      <Box sx={nationStyle}>
                        <Center w="100%" h="100%">
                          <Icon as={AiFillCaretRight} size={5} />
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box w="20%" />
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default userPage;

const nationStyle = {
  w: "30px",
  h: "30px",
  ml: "5px",
  bg: "#ff2468",
  color: "#fff",
  fontWeight: 800,
  borderRadius: "50%",
  lineHeight: "30px",
  textAlign: "center",
  cursor: "pointer",
};

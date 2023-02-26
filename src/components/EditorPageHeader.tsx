import { Flex, Text, VStack, Icon, Avatar, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HiOutlineBell } from "react-icons/hi";

const EditorPageHeader = () => {
  const router = useRouter();
  return (
    <>
      <Flex w="100%" justify={"space-between"} bg={"#262B5C"} color="#fff">
        <Flex w="15%" />
        <Flex w="70%" h="63px">
          <VStack w="100%" h="100%">
            <Flex
              w="100%"
              h="100%"
              fontWeight={800}
              fontSize={"3xl"}
              justify={"space-between"}
            >
              <Text
                lineHeight={"63px"}
                cursor={"pointer"}
                onClick={() => {
                  router.push("/");
                }}
              >
                header
              </Text>
              <Flex>
                <Icon
                  as={HiOutlineBell}
                  fontSize={"25px"}
                  h="100%"
                  ml="15px"
                  cursor={"pointer"}
                  transition="0.5s"
                  _hover={{ color: "#ff2468" }}
                />
                <Center>
                  <Avatar
                    cursor={"pointer"}
                    ml="15px"
                    size="sm"
                    name="Kola Tioluwani"
                    src="https://bit.ly/tioluwani-kolawole"
                  />
                </Center>
              </Flex>
            </Flex>
          </VStack>
        </Flex>
        <Flex w="15%" />
      </Flex>
    </>
  );
};

export default EditorPageHeader;

import {
  Box,
  Flex,
  Text,
  VStack,
  Icon,
  Avatar,
  Center,
  Button,
  Input,
  useDisclosure,
  Fade,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { HiOutlineBell, HiSearch, HiOutlinePencil } from "react-icons/hi";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex w="100%" justify={"space-between"} bg={"#224F74"} color="#fff">
        <Flex w="15%" />
        <Flex w="70%" h="120px">
          <VStack w="100%" h="100%">
            <Flex
              w="100%"
              h="60%"
              fontWeight={800}
              fontSize={"3xl"}
              justify={"space-between"}
            >
              <Text lineHeight={"72px"}>header</Text>
              <Flex>
                <Center>
                  <Fade in={isOpen}>
                    <Center>
                      <InputGroup>
                        <Input
                          w="800px"
                          placeholder="Search Post"
                          bg="#fff"
                          color="#333"
                          variant="undefined"
                        />

                        <InputRightAddon
                          bg="#ff2468"
                          border="2px solid #fff"
                          children="Search"
                          cursor={"pointer"}
                          transition="0.5s"
                          _hover={{
                            background: "#fff",
                            color: "#ff2468",
                          }}
                        />
                      </InputGroup>
                    </Center>
                  </Fade>
                </Center>
                <Icon
                  as={HiSearch}
                  fontSize={"25px"}
                  h="100%"
                  ml="15px"
                  cursor={"pointer"}
                  transition="0.5s"
                  _hover={{ color: "#ff2468" }}
                  onClick={onToggle}
                />
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
                <Center>
                  <Button
                    bg="#ff2468"
                    ml="15px"
                    size="md"
                    fontWeight={900}
                    border="2px solid #ff2468"
                    transition="0.5s"
                    _hover={{
                      background: "#fff",
                      color: "#ff2468",
                    }}
                    leftIcon={<HiOutlinePencil size={"20px"} />}
                  >
                    Add New
                  </Button>
                </Center>
              </Flex>
            </Flex>
            <Box w="100%" h="40%" fontWeight={800} fontSize={"sm"}>
              header
            </Box>
          </VStack>
        </Flex>
        <Flex w="15%" />
      </Flex>
    </>
  );
};

export default Header;

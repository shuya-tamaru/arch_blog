import {
  Center,
  Fade,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  useDisclosure,
} from "@chakra-ui/react";
import { HiSearch } from "react-icons/hi";

const SearchBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Center>
        <Fade in={isOpen}>
          <Center>
            <InputGroup>
              <Input
                w="800px"
                placeholder="Search"
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
    </>
  );
};

export default SearchBar;

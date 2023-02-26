import { Box, Button, HStack } from "@chakra-ui/react";
import { FiSave } from "react-icons/fi";
import { HiOutlineDocumentAdd } from "react-icons/hi";

const SubmitButtons = () => {
  return (
    <>
      <Box h="50px" w="90%">
        <HStack spacing="10px" justify={"end"}>
          <Box bg="#fff" borderRadius={"3px"}>
            <Button
              leftIcon={<FiSave size={25} />}
              w="150px"
              variant="outline"
              color=" #ff2468"
              border="2px solid #ff2468"
              transition="0.5s"
              _hover={{
                opacity: "0.6",
              }}
            >
              下書き保存
            </Button>
          </Box>

          <Button
            leftIcon={<HiOutlineDocumentAdd size={25} />}
            w="150px"
            bg={"#ff2468"}
            color="#fff"
            border="2px solid #ff2468"
            transition="0.5s"
            _hover={{
              opacity: "0.6",
            }}
          >
            投&emsp;稿
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default SubmitButtons;

import { Box, Button, HStack } from "@chakra-ui/react";

const SubmidButtons = () => {
  return (
    <>
      <Box h="50px" w="90%">
        <HStack spacing="10px" justify={"end"}>
          <Button w="100px" variant="outline" colorScheme="red">
            下書き保存
          </Button>
          <Button w="100px" colorScheme="red">
            投稿
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default SubmidButtons;

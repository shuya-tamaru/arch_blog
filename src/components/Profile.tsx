import { Avatar, Box, Button, Flex, Link, VStack } from "@chakra-ui/react";

const Profile = () => {
  return (
    <>
      <Box bg="#fff" mb="20px" h="300px" p="20px" w="100%" overflowY={"scroll"}>
        <Flex w="100%">
          <Avatar
            size="md"
            name="Shuya Tamaru"
            src="https://bit.ly/broken-link"
          />
          <VStack
            ml="20px"
            fontSize="md"
            alignItems={"center"}
            fontWeight="600"
          >
            <Link>UserName</Link>
            <Button
              size="xs"
              borderRadius={"5px"}
              bg="#ff2468"
              color="#fff"
              border="2px solid #ff2468"
              transition="0.5s"
              _hover={{
                background: "#fff",
                color: "#ff2468",
              }}
            >
              フォローする
            </Button>
          </VStack>
        </Flex>
        <Box w="100%" overflow={"auto"} mt="10px">
          descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
          descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
          descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
          descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
          descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
          descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
          descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
        </Box>
      </Box>
    </>
  );
};

export default Profile;

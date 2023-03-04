import { Avatar, Box, Center } from "@chakra-ui/react";
const UserAvator = () => {
  return (
    <>
      <Box w="20%" lineHeight={"72px"} textAlign="center" mt="5px">
        <Avatar
          cursor={"pointer"}
          size="sm"
          name="Kola Tioluwani"
          src="https://bit.ly/tioluwani-kolawole"
        />
      </Box>
    </>
  );
};

export default UserAvator;

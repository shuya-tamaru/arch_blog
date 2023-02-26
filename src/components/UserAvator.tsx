import { Avatar, Center } from "@chakra-ui/react";
const UserAvator = () => {
  return (
    <>
      <Center>
        <Avatar
          cursor={"pointer"}
          ml="15px"
          size="sm"
          name="Kola Tioluwani"
          src="https://bit.ly/tioluwani-kolawole"
        />
      </Center>
    </>
  );
};

export default UserAvator;

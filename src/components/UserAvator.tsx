import { Avatar, Box, Link } from "@chakra-ui/react";
const UserAvator = () => {
  return (
    <>
      <Link
        href="/user/userPage"
        w="20%"
        lineHeight={"72px"}
        textAlign="center"
        mt="5px"
        textDecoration={"none"}
        _hover={{ textDecoration: "none" }}
      >
        <Avatar
          cursor={"pointer"}
          size="sm"
          name="Kola Tioluwani"
          src="https://bit.ly/tioluwani-kolawole"
        />
      </Link>
    </>
  );
};

export default UserAvator;

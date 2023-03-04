import { Center, Button, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HiOutlinePencil } from "react-icons/hi";

const AddPostButton = () => {
  const router = useRouter();
  return (
    <>
      <Button
        w="60%"
        bg="#ff2468"
        textAlign={"center"}
        mt="5px"
        size="sm"
        fontWeight={900}
        border="2px solid #ff2468"
        transition="0.5s"
        _hover={{
          background: "#fff",
          color: "#ff2468",
        }}
        leftIcon={<HiOutlinePencil size={"20px"} />}
        onClick={() => {
          router.push("/editor");
        }}
      >
        <Link
          _hover={{ textDecoration: "none" }}
          variant={"none"}
          href={"/editor"}
        >
          Add New
        </Link>
      </Button>
    </>
  );
};

export default AddPostButton;

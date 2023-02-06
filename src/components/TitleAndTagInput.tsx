import { Input } from "@chakra-ui/react";

const TitleAndTagInput = () => {
  return (
    <>
      <Input
        w="90%"
        h="40px"
        bg="#fff"
        boxShadow={"xl"}
        variant="undefined"
        fontWeight="600"
        placeholder="タイトル："
        mt="10px"
      />
      <Input
        w="90%"
        h="40px"
        bg="#fff"
        boxShadow={"xl"}
        variant="undefined"
        fontWeight="600"
        placeholder="タグを入力："
      />
    </>
  );
};
export default TitleAndTagInput;

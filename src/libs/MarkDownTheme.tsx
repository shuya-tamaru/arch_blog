import { Text } from "@chakra-ui/react";
import CodeBlack from "../components/CodeBlack";

export const markdownTheme = {
  h1: (props: any) => {
    const { children } = props;
    return (
      <Text
        fontWeight={600}
        borderBottom="2px solid #333"
        mb={2}
        fontSize={"40px"}
      >
        {children}
      </Text>
    );
  },
  code: CodeBlack,
};

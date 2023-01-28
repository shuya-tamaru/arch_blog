import { Text } from "@chakra-ui/react";
import CodeBlack from "../components/CodeBlack";

const hStyle = {
  borderBottom: "2px solid #999",
  mb: "2px",
  fontWeight: 800,
};

export const markdownTheme = {
  h1: (props: any) => {
    const { children } = props;
    return (
      <Text fontSize="6xl" sx={hStyle}>
        {children}
      </Text>
    );
  },
  h2: (props: any) => {
    const { children } = props;
    return (
      <Text fontSize="5xl" sx={hStyle}>
        {children}
      </Text>
    );
  },
  h3: (props: any) => {
    const { children } = props;
    return (
      <Text fontSize="4xl" sx={hStyle}>
        {children}
      </Text>
    );
  },
  h4: (props: any) => {
    const { children } = props;
    return (
      <Text fontSize="3xl" sx={hStyle}>
        {children}
      </Text>
    );
  },
  h5: (props: any) => {
    const { children } = props;
    return (
      <Text fontSize="2xl" sx={hStyle}>
        {children}
      </Text>
    );
  },
  h6: (props: any) => {
    const { children } = props;
    return (
      <Text fontSize="xl" sx={hStyle}>
        {children}
      </Text>
    );
  },
  code: CodeBlack,
};

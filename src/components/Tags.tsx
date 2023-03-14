import { Center, Flex, Link, Text } from "@chakra-ui/react";
import { AiOutlineTags } from "react-icons/ai";

type Props = {
  size?: string;
  iconSize?: number;
};

export default function Tags({ size = "sm", iconSize = 25 }: Props) {
  return (
    <>
      <Flex w="100%" ml="5px">
        <AiOutlineTags size={iconSize} />
        <Center>
          <Link>
            <Text fontSize={size} ml="10px">
              建築構造
            </Text>
          </Link>
        </Center>
        <Center>
          <Link>
            <Text fontSize={size} ml="10px">
              建築意匠
            </Text>
          </Link>
        </Center>
        <Center>
          <Link>
            <Text fontSize={size} ml="10px">
              Karamba
            </Text>
          </Link>
        </Center>
        <Center>
          <Link>
            <Text fontSize={size} ml="10px">
              Grasshopper
            </Text>
          </Link>
        </Center>
      </Flex>
    </>
  );
}

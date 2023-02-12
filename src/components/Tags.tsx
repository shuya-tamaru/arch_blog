import { Flex, Link, Text } from "@chakra-ui/react";
import { AiOutlineTags } from "react-icons/ai";

export default function Tags() {
  return (
    <>
      <Flex w="100%">
        <AiOutlineTags size={25} />
        <Link>
          <Text fontSize="sm" ml="10px">
            建築構造
          </Text>
        </Link>
        <Link>
          <Text fontSize="sm" ml="10px">
            建築意匠
          </Text>
        </Link>
        <Link>
          <Text fontSize="sm" ml="10px">
            Karamba
          </Text>
        </Link>
        <Link>
          <Text fontSize="sm" ml="10px">
            Grasshopper
          </Text>
        </Link>
      </Flex>
    </>
  );
}

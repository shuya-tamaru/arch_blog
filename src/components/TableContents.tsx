import { Box, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function TableContents() {
  const [headers, setHeaders] = useState<Element[]>([]);

  useEffect(() => {
    const head = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
    const elements = Array.from(head);
    setHeaders(elements);
  }, []);

  const handleScroll = (head: Element) => {
    head.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <VStack>
      <Box position={"sticky"} top="20px">
        {headers.map((head, index) => {
          const offset = index === 0 || head.tagName === "H1" ? 0 : 5;
          return (
            <Box
              fontSize={"md"}
              key={index}
              onClick={() => handleScroll(head)}
              pl={offset}
              w="100%"
              fontWeight="600"
              cursor={"pointer"}
              color="#666"
              _hover={{
                color: "teal",
                borderRadius: "5px",
              }}
            >
              {index === 0 ? "タイトル" : head.innerHTML}
            </Box>
          );
        })}
      </Box>
    </VStack>
  );
}

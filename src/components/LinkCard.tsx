import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

type Props = {
  image: string;
  href: string;
  title: string;
  description: string;
  icon: string;
};

const LinkCard = ({ image, href, title, description, icon }: Props) => {
  const siteName = href.split("/")[2];
  return (
    <Link href={href} isExternal w="100%">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        h="150px"
      >
        {image && <Image objectFit="cover" w="auto" h="100%" src={image} />}

        <Stack h="150px" w="800px">
          <CardBody w="60%" h="100%">
            <Heading size="sm" w="600px">
              {title}
            </Heading>

            <Text
              fontSize={"sm"}
              py="2"
              color="#888"
              w="600px"
              h="30px"
              textOverflow={"ellipsis"}
              whiteSpace={"nowrap"}
              overflowX={"hidden"}
            >
              {description}
            </Text>
            <Flex mt="40px">
              {icon !== "" && (
                <Image objectFit="cover" w="auto" h="25px" src={icon} />
              )}
              <Center>
                <Text fontSize={"xs"} ml="5px">
                  {siteName}
                </Text>
              </Center>
            </Flex>
          </CardBody>
        </Stack>
      </Card>
    </Link>
  );
};

export default LinkCard;

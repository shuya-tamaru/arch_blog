import { VStack } from "@chakra-ui/react";
import MarkDownPreview from "./MarkDownPreview";
import PostHeading from "./PostHeading";
import Tags from "./Tags";

type StaticProps = {
  post: string;
  cardDatas: any[];
};

export default function PostContents({ post, cardDatas }: StaticProps) {
  return (
    <>
      <VStack spacing={8} direction="row" mb="40px">
        <PostHeading />
        <Tags />
      </VStack>
      <MarkDownPreview input={post} metas={cardDatas} />
    </>
  );
}

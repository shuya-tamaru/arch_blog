import { Center, chakra, HTMLChakraProps, Icon, Text } from "@chakra-ui/react";
import { HTMLMotionProps, motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsBookmarkCheckFill, BsFillBookmarkPlusFill } from "react-icons/bs";

type Props = {
  iconType: "like" | "stock";
};

export default function CircleIcon({ iconType }: Props) {
  type Merge<P, T> = Omit<P, keyof T> & T;
  type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
  const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);
  const controls = useAnimation();

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const falseColor = "#666";
  const asLikeProps = isClicked ? AiFillHeart : AiOutlineHeart;
  const asStockProps = isClicked ? BsBookmarkCheckFill : BsFillBookmarkPlusFill;
  const colorLikeProps = isClicked ? "red.400" : falseColor;
  const colorStockProps = isClicked ? "teal.400" : falseColor;

  const handleClick = async () => {
    await setIsClicked(!isClicked);
    controls.start({ scale: [0.9, 1.1, 1.2, 1.1, 1.0] });
  };

  return (
    <>
      <Center
        w="45px"
        h="45px"
        border={"2px solid"}
        borderColor={iconType === "like" ? colorLikeProps : colorStockProps}
        borderRadius="50%"
        cursor={"pointer"}
      >
        <MotionBox
          w="100%"
          h="100%"
          animate={controls}
          transition={{ duration: 0.2 }}
          onClick={handleClick}
          textAlign={"center"}
        >
          <Icon
            w="100%"
            mt="9px"
            as={iconType === "like" ? asLikeProps : asStockProps}
            fontSize="22px"
            color={iconType === "like" ? colorLikeProps : colorStockProps}
          />
        </MotionBox>
      </Center>
      <Text
        fontSize={"xm"}
        fontWeight={"600"}
        textAlign="center"
        color={iconType === "like" ? colorLikeProps : colorStockProps}
      >
        1
      </Text>
    </>
  );
}

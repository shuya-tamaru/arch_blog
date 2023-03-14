import { Box, Heading, Image, Text, VStack, Link } from "@chakra-ui/react";
import CodeBlack from "../components/CodeBlack";
import LinkCard from "../components/LinkCard";

const hStyle = {
  borderBottom: "2px solid #c0c0c0",
  mb: "2px",
  fontWeight: 800,
};
export const markdownTheme = (metas: any[]) => {
  return {
    h1: (props: any) => {
      const { children } = props;
      return (
        <Heading id={children} as="h1" fontSize="3xl" sx={hStyle}>
          {children}
        </Heading>
      );
    },
    h2: (props: any) => {
      const { children } = props;
      return (
        <Heading id={children} as="h2" fontSize="2xl" sx={hStyle}>
          {children}
        </Heading>
      );
    },
    h3: (props: any) => {
      const { children } = props;
      return (
        <Heading id={children} as="h3" fontSize="xl" sx={hStyle}>
          {children}
        </Heading>
      );
    },
    h4: (props: any) => {
      const { children } = props;
      return (
        <Heading id={children} as="h4" fontSize="lg" sx={hStyle}>
          {children}
        </Heading>
      );
    },
    h5: (props: any) => {
      const { children } = props;
      return (
        <Heading id={children} as="h5" fontSize="md" sx={hStyle}>
          {children}
        </Heading>
      );
    },
    h6: (props: any) => {
      const { children } = props;

      return (
        <Heading id={children} as="h6" fontSize="sm" sx={hStyle}>
          {children}
        </Heading>
      );
    },
    a: (props: any) => {
      const { children, href } = props;
      const target = metas.find((meta) => meta.url === href);

      return target &&
        target.title &&
        target.image &&
        target.title !== "" &&
        target.image !== "" ? (
        <LinkCard
          image={target.image}
          href={target.url}
          title={target.title}
          description={target.description}
          icon={target.icon}
        />
      ) : (
        <Link
          _hover={{ textDecoration: "none" }}
          style={{ color: "#0366d6", borderBottom: "1px solid #0366d6" }}
          href={href}
        >
          {children}
        </Link>
      );
    },
    th: (props: any) => {
      const { children } = props;
      return (
        <th style={{ background: "#f5f5f5", border: "1px solid #dcdcdc" }}>
          {children}
        </th>
      );
    },
    td: (props: any) => {
      const { children } = props;
      return (
        <td style={{ border: "1px solid #dcdcdc", padding: "10px" }}>
          {children}
        </td>
      );
    },
    p: (props: any) => {
      const { children } = props;

      const nodes = children.map((ele: any, index: string) => {
        if (ele.key && ele.key.indexOf("img") !== -1) {
          const { src, alt } = ele.props;
          const text = alt as string;
          const splitText = text.split("w:");
          const title = splitText.length > 0 ? splitText[0] : undefined;
          const width = splitText.length > 1 ? splitText[1] : undefined;
          return (
            <VStack key={index} justify={"center"}>
              <Image
                display={"inline-block"}
                w={width}
                src={src}
                border="1px solid #dcdcdc"
              />
              {title && (
                <Text
                  w={width}
                  textAlign={"center"}
                  fontSize={"sm"}
                  color={"#777"}
                >
                  {title}
                </Text>
              )}
            </VStack>
          );
        } else if (ele.props && ele.props.href) {
          return (
            <Box key={index} w="100%">
              {ele}
            </Box>
          );
        } else {
          return <Text key={index}>{ele}</Text>;
        }
      });

      return nodes;
    },
    code: CodeBlack,
  };
};

// export const markdownTheme = {
//   h1: (props: any) => {
//     const { children } = props;
//     return (
//       <Heading id={children} as="h1" fontSize="3xl" sx={hStyle}>
//         {children}
//       </Heading>
//     );
//   },
//   h2: (props: any) => {
//     const { children } = props;
//     return (
//       <Heading id={children} as="h2" fontSize="2xl" sx={hStyle}>
//         {children}
//       </Heading>
//     );
//   },
//   h3: (props: any) => {
//     const { children } = props;
//     return (
//       <Heading id={children} as="h3" fontSize="xl" sx={hStyle}>
//         {children}
//       </Heading>
//     );
//   },
//   h4: (props: any) => {
//     const { children } = props;
//     return (
//       <Heading id={children} as="h4" fontSize="lg" sx={hStyle}>
//         {children}
//       </Heading>
//     );
//   },
//   h5: (props: any) => {
//     const { children } = props;
//     return (
//       <Heading id={children} as="h5" fontSize="md" sx={hStyle}>
//         {children}
//       </Heading>
//     );
//   },
//   h6: (props: any) => {
//     const { children } = props;

//     return (
//       <Heading id={children} as="h6" fontSize="sm" sx={hStyle}>
//         {children}
//       </Heading>
//     );
//   },
//   a: (props: any) => {
//     const { children, href } = props;
//     return (
//       <Link
//         style={{ color: "#0366d6", borderBottom: "1px solid #0366d6" }}
//         href={href}
//       >
//         {children}
//       </Link>
//     );
//   },
//   th: (props: any) => {
//     const { children } = props;
//     return (
//       <th style={{ background: "#f5f5f5", border: "1px solid #dcdcdc" }}>
//         {children}
//       </th>
//     );
//   },
//   td: (props: any) => {
//     const { children } = props;
//     return (
//       <td style={{ border: "1px solid #dcdcdc", padding: "10px" }}>
//         {children}
//       </td>
//     );
//   },
//   p: (props: any) => {
//     const { children } = props;

//     const nodes = children.map((ele: any, index: string) => {
//       if (ele.key && ele.key.indexOf("img") !== -1) {
//         const { src, alt } = ele.props;
//         const text = alt as string;
//         const splitText = text.split("w:");
//         const title = splitText.length > 0 ? splitText[0] : undefined;
//         const width = splitText.length > 1 ? splitText[1] : undefined;
//         return (
//           <VStack key={index} justify={"center"}>
//             <Image
//               display={"inline-block"}
//               w={width}
//               src={src}
//               border="1px solid #dcdcdc"
//             />
//             {title && (
//               <Text
//                 w={width}
//                 textAlign={"center"}
//                 fontSize={"sm"}
//                 color={"#777"}
//               >
//                 {title}
//               </Text>
//             )}
//           </VStack>
//         );
//       } else {
//         return <Text key={index}>{ele}</Text>;
//       }
//     });

//     return nodes;
//   },
//   code: CodeBlack,
// };

import React from "react";
import { Tabs, TabList, Tab, Center } from "@chakra-ui/react";

const TabMenu = () => {
  const menu = ["one", "two", "three", "one", "two", "three"];
  return (
    <>
      <Tabs
        w="100%"
        h="40%"
        fontWeight={800}
        fontSize={"lg"}
        variant="enclosed"
      >
        <Center>
          <TabList>
            {menu.map((val, index) => {
              return (
                <Tab
                  key={index}
                  m="0"
                  w="150px"
                  fontWeight={600}
                  _selected={{
                    color: "#fff",
                    borderColor: "#fff",
                  }}
                >
                  {val}
                </Tab>
              );
            })}
          </TabList>
        </Center>
      </Tabs>
    </>
  );
};

export default TabMenu;

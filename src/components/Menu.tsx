import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListIcon,
  ListItem,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMenuOutline } from "react-icons/io5";
import { MdSpeed } from "react-icons/md";

import React from "react";

export const MenuNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>;
  const menuElements = [
    "Aspect Scores",
    "Benchmark",
    "Time series",
    "Driver analysis",
    "Aspect details",
  ];
  return (
    <>
      <Button
        ref={btnRef}
        bg={"blackAlpha.800"}
        color="white"
        _hover={{ color: "black", bg: "white" }}
        onClick={onOpen}
        mt={3}
        iconSpacing={3}
        borderRadius="full"
        leftIcon={<IoMenuOutline />}
        fontSize={30}
      >
        ReQiew
      </Button>
      <Drawer
        colorScheme="black"
        isOpen={isOpen}
        placement="left"
        size="xs"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"black"}>
          <DrawerCloseButton />
          <DrawerHeader color={"white"} fontSize={50}>
            ReQiew
          </DrawerHeader>
          <DrawerBody
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
          >
            <List spacing={10}>
              {menuElements.map((title) => (
                <ListItem>
                  <Button
                    leftIcon={<MdSpeed size={20} />}
                    variant="ghost"
                    color="white"
                    borderRadius="full"
                    _hover={{ color: "black", bg: "white" }}
                  >
                    {title}
                  </Button>
                </ListItem>
              ))}
            </List>

            <Stack gap={10}>
              <Button borderRadius="full">Change Dashboard</Button>
              <Button borderRadius="full">Logout</Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

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
              <ListItem color={"white"} fontSize={20}>
                <ListIcon as={MdSpeed} boxSize={8} />
                Aspect Scores
              </ListItem>
              <ListItem>
                <ListIcon as={MdSpeed} color="white" boxSize={8} />
                Benchmark
              </ListItem>
              <ListItem>
                <ListIcon as={MdSpeed} color="white" boxSize={8} />
                Time series
              </ListItem>
              <ListItem>
                <ListIcon as={MdSpeed} color="white" boxSize={8} />
                Driver analysis
              </ListItem>
              <ListItem>
                <ListIcon as={MdSpeed} color="white" boxSize={8} />
                Aspect details
              </ListItem>
            </List>

            <Stack gap={10}>
              <Button colorScheme="gray">Change Dashboard</Button>
              <Button colorScheme="gray">Logout</Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

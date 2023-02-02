import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListIcon,
  ListItem,
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
        colorScheme="teal"
        onClick={onOpen}
        my="4"
        iconSpacing={3}
        leftIcon={<IoMenuOutline />}
      >
        Reqiew
      </Button>
      <Drawer
        colorScheme="blackAlpha"
        isOpen={isOpen}
        placement="left"
        size="xs"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Reqiew</DrawerHeader>

          <DrawerBody>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdSpeed} color="green.500" />
                Aspect Scores
              </ListItem>
              <ListItem>
                <ListIcon as={MdSpeed} color="green.500" />
                Benchmark
              </ListItem>
              <ListItem>
                <ListIcon as={MdSpeed} color="green.500" />
                Time series
              </ListItem>
              <ListItem>
                <ListIcon as={MdSpeed} color="green.500" />
                Driver analysis
              </ListItem>
              <ListItem>
                <ListIcon as={MdSpeed} color="green.500" />
                Aspect details
              </ListItem>
            </List>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="gray">Change Dashboard</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

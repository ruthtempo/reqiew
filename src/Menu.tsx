import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>;

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen} my="4">
        Reqiew
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        size="xs"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListItem,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMenuOutline } from "react-icons/io5";
import { MdSpeed } from "react-icons/md";

import React from "react";
import { Link } from "react-router-dom";

export const MenuNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>;
  const menuElements = ["Time series", "Driver analysis", "Aspect details"];

  return (
    <>
      <Button
        ref={btnRef}
        bg={'blackAlpha.800'}
        color="white"
        _hover={{ color: 'black', bg: 'white' }}
        onClick={onOpen}
        mt={3}
        iconSpacing={3}
        borderRadius="full"
        leftIcon={<IoMenuOutline />}
        fontSize={30}
      >
        Review
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        size="xs"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={'black'}>
          <DrawerCloseButton color="white" />
          <DrawerHeader color={'white'} fontSize={50}>
            ReQiew
          </DrawerHeader>
          <DrawerBody
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-around'}
          >
            <List spacing={10}>
              <ListItem>
                <Button
                  as={Link}
                  to="/"
                  leftIcon={<MdSpeed size={20} />}
                  variant="ghost"
                  color="white"
                  borderRadius="full"
                  _hover={{ color: 'black', bg: 'white' }}
                >
                  Aspect Scores
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  as={Link}
                  to="/benchmark"
                  leftIcon={<MdSpeed size={20} />}
                  variant="ghost"
                  color="white"
                  borderRadius="full"
                  _hover={{ color: 'black', bg: 'white' }}
                >
                  Benchmark
                </Button>
              </ListItem>
              {menuElements.map((title) => (
                <ListItem key={title}>
                  <Button
                    leftIcon={<MdSpeed size={20} />}
                    variant="ghost"
                    color="white"
                    borderRadius="full"
                    _hover={{ color: 'black', bg: 'white' }}
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

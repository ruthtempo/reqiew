import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

export const ModelFilter = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button rightIcon={<ChevronDownIcon />}>Model</Button>
      </PopoverTrigger>
      <PopoverContent w="100%">
        <PopoverArrow />
        <PopoverBody>
          <Stack>
            <Tag
              size="lg"
              colorScheme="teal"
              borderRadius="full"
              cursor="pointer"
            >
              <CheckIcon mr={2} />
              <TagLabel>All brands</TagLabel>
            </Tag>
            <Tag size="lg" colorScheme="gray" borderRadius="full">
              <TagLabel>Bosch</TagLabel>
            </Tag>
            <Tag size="lg" colorScheme="gray" borderRadius="full">
              <TagLabel>Miele</TagLabel>
            </Tag>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

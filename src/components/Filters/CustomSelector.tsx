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
import { useState } from "react";

export const CustomSelector = (p: { buttonText: string; data: string[] }) => {
  const [selectedElements, setSelectedElements] = useState<string[]>([]);

  const toggleSelect = (element: string) => {
    let updatedSelection: string[] = [];
    if (!selectedElements.includes(element)) {
      updatedSelection = selectedElements.concat(element);
    } else {
      updatedSelection = selectedElements.filter((el) => el !== element);
    }

    setSelectedElements(updatedSelection);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          flexGrow={1}
          rightIcon={<ChevronDownIcon />}
          colorScheme={selectedElements.length ? "teal" : "gray"}
        >
          {p.buttonText}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody w="100%">
          <Stack>
            {p.data.map((device) => (
              <Tag
                key={device}
                size="lg"
                colorScheme={
                  selectedElements.includes(device) ? "teal" : "gray"
                }
                borderRadius="full"
                cursor="pointer"
                onClick={() => toggleSelect(device)}
              >
                {selectedElements.includes(device) && <CheckIcon mr={3} />}
                <TagLabel>{device}</TagLabel>
              </Tag>
            ))}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

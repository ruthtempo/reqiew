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

export const CustomSelector = (p: {
  buttonText: string;
  data: string[];
  selectedElements: string[];
  onChange: (selection: string[]) => void;
}) => {
  const toggleSelect = (element: string) => {
    let updatedSelection: string[] = [];
    if (!p.selectedElements.includes(element)) {
      updatedSelection = p.selectedElements.concat(element);
    } else {
      updatedSelection = p.selectedElements.filter((el) => el !== element);
    }

    p.onChange(updatedSelection);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          flexGrow={1}
          rightIcon={<ChevronDownIcon />}
          colorScheme={p.selectedElements.length ? "teal" : "gray"}
        >
          {p.buttonText}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody w="100%">
          <Stack>
            {p.data.map((device, i) => (
              <Tag
                key={i}
                size="lg"
                colorScheme={
                  p.selectedElements.includes(device) ? "teal" : "gray"
                }
                borderRadius="full"
                cursor="pointer"
                onClick={() => toggleSelect(device)}
              >
                {p.selectedElements.includes(device) && <CheckIcon mr={3} />}
                <TagLabel>{device}</TagLabel>
              </Tag>
            ))}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

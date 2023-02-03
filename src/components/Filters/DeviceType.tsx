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

const devices = ["desktop", "mobile", "all devices"];

export const DeviceType = () => {
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);

  const toggleSelect = (device: string) => {
    let updatedSelection: string[] = [];
    if (!selectedDevices.includes(device)) {
      updatedSelection = selectedDevices.concat(device);
    } else {
      updatedSelection = selectedDevices.filter((d) => d !== device);
    }

    setSelectedDevices(updatedSelection);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          flexGrow={1}
          rightIcon={<ChevronDownIcon />}
          colorScheme={selectedDevices.length ? "teal" : "gray"}
        >
          Device Type
        </Button>
      </PopoverTrigger>
      <PopoverContent w="100%">
        <PopoverArrow />
        <PopoverBody>
          <Stack>
            {devices.map((device) => (
              <Tag
                key={device}
                size="lg"
                colorScheme={selectedDevices.includes(device) ? "teal" : "gray"}
                borderRadius="full"
                cursor="pointer"
                onClick={() => toggleSelect(device)}
              >
                <TagLabel>{device}</TagLabel>
                {selectedDevices.includes(device) && <CheckIcon ml={2} />}
              </Tag>
            ))}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

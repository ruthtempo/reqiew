import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";

export const PriceRange = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button rightIcon={<ChevronDownIcon />}>Price</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody w="100%">
          <Flex justifyContent="space-between" gap={2}>
            <InputGroup>
              <Input placeholder="0" />
              <InputRightElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="€"
              />
            </InputGroup>
            <InputGroup>
              <Input placeholder="max" />
              <InputRightElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="€"
              />
            </InputGroup>
          </Flex>

          <RangeSlider aria-label={["min", "max"]} defaultValue={[0, 1000]}>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
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

export const DateRange = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button rightIcon={<ChevronDownIcon />}>Date</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody w="100%">
          <Flex justifyContent="space-between" gap={2}>
            <Input type="date" />
            <Input type="date" />
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

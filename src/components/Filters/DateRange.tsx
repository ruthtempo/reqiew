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
import { differenceInDays, add, isEqual } from "date-fns";

export const DateRange = (p: {
  range: [Date, Date]; // min and max range
  value: [Date, Date]; //dinamic values
  onChange: (value: [Date, Date]) => void;
}) => {
  const maxRange = differenceInDays(p.range[1], p.range[0]); // since slider only takes numbers, not dates.

  //Range slider
  const value1 = differenceInDays(p.value[0], p.range[0]);
  const value2 = differenceInDays(p.value[1], p.range[0]);

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          flexGrow={1}
          rightIcon={<ChevronDownIcon />}
          colorScheme={
            isEqual(p.range[0], p.value[0]) && isEqual(p.range[1], p.value[1])
              ? "gray"
              : "teal"
          }
        >
          Date
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody w="100%">
          <Flex justifyContent="space-between" gap={2}>
            <Input
              type="date"
              value={p.value[0].toISOString().slice(0, 10)}
              onChange={(e) =>
                p.onChange([new Date(e.target.value), p.value[1]])
              }
            />
            <Input
              type="date"
              value={p.value[1].toISOString().slice(0, 10)}
              onChange={(e) =>
                p.onChange([p.value[0], new Date(e.target.value)])
              }
            />
          </Flex>
          <RangeSlider
            colorScheme="teal"
            value={[value1, value2]} //diference in days to minimum
            min={0}
            max={maxRange}
            onChange={(val) => {
              p.onChange([
                add(p.range[0], { days: val[0] }),
                add(p.range[0], { days: val[1] }),
              ]);
            }} //adds difference in dates to start date to get new dates
          >
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

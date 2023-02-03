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
import { differenceInDays, add } from "date-fns";
import { useState } from "react";

export const DateRange = () => {
  const start = new Date("2021-02-10");
  const end = new Date("2021-02-20");

  const [min, setMin] = useState(new Date("2021-02-13"));
  const [max, setMax] = useState(new Date("2021-02-18"));

  const maxRange = differenceInDays(end, start);

  //Range slider
  const value1 = differenceInDays(min, start);
  const value2 = differenceInDays(max, start);

  return (
    <Popover>
      <PopoverTrigger>
        <Button flexGrow={1} rightIcon={<ChevronDownIcon />}>
          Date
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody w="100%">
          <Flex justifyContent="space-between" gap={2}>
            <Input
              type="date"
              value={min.toISOString().slice(0, 10)}
              onChange={(e) => setMin(new Date(e.target.value))}
            />
            <Input
              type="date"
              value={max.toISOString().slice(0, 10)}
              onChange={(e) => setMax(new Date(e.target.value))}
            />
          </Flex>
          <RangeSlider
            aria-label={["min", "max"]}
            value={[value1, value2]} //diference in days to minimum
            min={0}
            max={maxRange}
            onChange={(val) => {
              setMin(add(start, { days: val[0] }));
              setMax(add(start, { days: val[1] }));
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

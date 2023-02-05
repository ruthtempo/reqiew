import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  InputGroup,
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

export const PriceRange = (p: {
  min: number;
  max: number;
  priceRange: [number, number];
  onChange: (value: [number, number]) => void;
}) => {
  const handleChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueToNum = parseInt(e.target.value);
    isNaN(valueToNum)
      ? p.onChange([p.min, p.priceRange[1]])
      : p.onChange([parseInt(e.target.value), p.priceRange[1]]);
  };

  const handleChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueToNum = parseInt(e.target.value);
    valueToNum < p.min
      ? p.onChange([p.priceRange[0], p.min])
      : p.onChange([p.priceRange[0], parseInt(e.target.value)]);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          flexGrow={1}
          rightIcon={<ChevronDownIcon />}
          colorScheme={
            p.priceRange[0] !== p.min || p.priceRange[1] !== p.max
              ? "teal"
              : "gray"
          }
        >
          Price
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody w="100%">
          <Flex justifyContent="space-between" gap={2}>
            <InputGroup>
              <Input
                placeholder="min"
                value={p.priceRange[0]}
                onChange={handleChangeMin}
              />
              <InputRightElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="€"
              />
            </InputGroup>
            <InputGroup>
              <Input
                placeholder="max"
                value={p.priceRange[1]}
                onChange={handleChangeMax}
              />
              <InputRightElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="€"
              />
            </InputGroup>
          </Flex>

          <RangeSlider
            aria-label={["min", "max"]} // eslint-disable-line jsx-a11y/aria-proptypes
            value={[p.priceRange[0], p.priceRange[1]]}
            colorScheme="teal"
            min={p.min}
            max={p.max}
            onChange={(value: [number, number]) => {
              p.onChange(value);
            }}
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

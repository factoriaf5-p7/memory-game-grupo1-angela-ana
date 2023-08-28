import { Cards, CardsUpdated } from "@/components/Game";

export const random = (array: Cards[]) => {
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

// darle a mathradom el valor 0 y darle el valor a los dos para q el value sea igual (valua es string)

// darle la propiedad Flipped / valoir inicial false / hacer un use effect para voltearla y cambiar la propiedad a true

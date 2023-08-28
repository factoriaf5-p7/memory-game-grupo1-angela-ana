import { Cards } from "@/components/Game";
import { random } from "@/utils/random";

const array: Cards[] = [
  { name: "hola", img: "img1" },
  { name: "chao", img: "img2" },
];

describe("random function", () => {
  test("random function should randomize an array", () => {
    expect(random(array)).toMatchObject([
      { name: "hola", img: "img1" },
      { name: "chao", img: "img2" },
    ]);
  });
});

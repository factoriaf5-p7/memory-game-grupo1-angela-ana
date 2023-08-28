export class CreateThemeDTO {
  readonly name: string;
  readonly cards: { name: string; img: string }[];
}

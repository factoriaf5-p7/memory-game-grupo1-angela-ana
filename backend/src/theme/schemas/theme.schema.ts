import { Schema } from 'mongoose';

export const ThemeSchema = new Schema({
  name: { type: String, required: true },
  cards: [
    {
      cardname: { type: String, required: true },
      cardimg: { type: String, required: true },
    },
  ],
});

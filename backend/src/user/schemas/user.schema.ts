import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: { type: String, unique: true, required: true },
  score: { type: Number, default: 0 },
});

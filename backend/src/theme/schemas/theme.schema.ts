import { Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Superhero {
  name: string;
  img: string;
}

export const SuperheroSchema = SchemaFactory.createForClass(Superhero);

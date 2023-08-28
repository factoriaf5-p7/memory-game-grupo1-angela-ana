import { Document } from 'mongoose';

export interface Theme extends Document {
  readonly name: string;
  readonly cards: { name: string; img: string }[];
}

// {
//   "name": "comics",
//   "cards":[
//     {"name":"superman"
//       "img":"url",
//     },
//     {"name":"batman"
//     "img":"url",
//     },
//     {"name":"robin"
//     "img":"url",
//     },
//   ]
// }

// hacer un estado con el nombre del tema
// tema inicial con un tema (superherues) / al ir al selector, traer la lista de temas y actualizar el estado al elegir el tema.

// local estorage mejor
// redux para guardar tema seleccionado
// reducecontext tambien

// guardar un stado

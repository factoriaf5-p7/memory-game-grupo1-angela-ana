import { getThemes } from "@/services/lib/themes";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { CardProps } from "./Card";

function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

function Board() {
  const [themes, setThemes] = useState<CardProps[]>([]);
  const [randomThemes, setRandomThemes] = useState<CardProps[]>([]);


  useEffect(() => {
    // Definir una función asincrónica dentro del useEffect para poder usar 'await'
    const fetchThemes = async () => {
      try {
        const response: AxiosResponse = await getThemes();
        // console.log(response.data.data);
        setThemes(response.data);
        setRandomThemes(shuffleArray(response.data));
      } catch (error) {
        console.error("Error al obtener las cartas:", error);
      }
    };

    fetchThemes();
  }, []);

  useEffect(() => {
    console.log(themes);
  }, [themes]);
  return (
    <div>
      {randomThemes &&
        randomThemes.map((theme, index) => (
          <div key={index}>
            <p>{theme.name}</p>
            <img
              src={`https://res.cloudinary.com/drjyg98uv/image/upload/v1692700208/memory-game/${theme.img}`}
              alt={theme.name}
            />
          </div>
        ))}
    </div>
  );
}

export default Board;

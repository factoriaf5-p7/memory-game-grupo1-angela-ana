import { getThemes } from "@/services/lib/themes";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react"

function Board() {

    const [themes, setThemes] = useState('')



    useEffect(() => {
        // Definir una función asincrónica dentro del useEffect para poder usar 'await'
        const fetchThemes = async () => {
          try {
            const response: AxiosResponse = await getThemes();
            // console.log(response.data.data);
            setThemes(response.data.data);
          } catch (error) {
            console.error("Error al obtener las cartas:", error);
          }
        };
       
        fetchThemes()
      }, []);

      useEffect(() => {
        console.log(themes)

      }, [themes]);
  return (
    <div>Board</div>
  )
}

export default Board
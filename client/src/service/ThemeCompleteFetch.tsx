import { Cards } from "@/components/Game";
import { Theme } from "@/interface/ThemeInterface";
import { useState, useEffect } from "react";

function useThemeFetcher() {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/theme")
      .then((response) => response.json())
      .then((data) => {
        const formattedThemes: Theme[] = data.map((theme: any) => ({
          name: theme.name,
          cards: theme.cards.map((card: Cards) => ({
            name: card.name,
            img: card.img,
          })),
        }));
        setThemes(formattedThemes);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching themes:", error);
        setLoading(false);
      });
  }, []);

  return { themes, loading };
}

export default useThemeFetcher;

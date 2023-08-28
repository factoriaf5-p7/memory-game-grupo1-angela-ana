import { Theme } from '@/interface/ThemeInterface';
import { useState, useEffect } from 'react';

function ThemeFetcher() {
    const [themes, setThemes] = useState<Theme[]>([])
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/theme') 
      .then(response => response.json())
      .then(data => {
        const formattedThemes: Theme[] = data.map((theme: any) => ({
            name: theme.name,
            cards: theme.cards.map((card: any) => ({
              cardname: card.cardname,
              cardimg: card.cardimg,
            })),
          }))
          setThemes(formattedThemes);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching themes:', error)
        setLoading(false)
      })
  }, [])

  return { themes, loading }
}

export default ThemeFetcher;

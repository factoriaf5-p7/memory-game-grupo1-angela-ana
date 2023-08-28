import { Hero, Game, Settings, NotFound } from "@/components";
import { Route } from "react-router-dom";
import { ThemeContextProvider } from '../context/themeContext'; // Importar el ThemeContextProvider

export const Routes = (
    //<ThemeContextProvider>
        <Route>
            <Route path="/" element={<Hero />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/game" element={<Game />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    //</ThemeContextProvider>
);
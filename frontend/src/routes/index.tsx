
import Game from "@/pages/Game";
import Hero from "@/pages/Hero";
import NotFound from "@/pages/NotFound";
import Settings from "@/pages/Settings";
import { Route } from "react-router-dom";


export const Routes = (
    <Route>
        <Route path="/" element={<Hero />}/>
        <Route path="/settings" element={<Settings />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<NotFound />} />
    </Route>
)
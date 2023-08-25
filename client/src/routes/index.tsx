import { Hero, Game, Settings, NotFound } from "@/components";
import { Route } from "react-router-dom";


export const Routes = (
    <Route>
        <Route path="/" element={<Hero />}/>
        <Route path="/settings" element={<Settings />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<NotFound />} />
    </Route>
)

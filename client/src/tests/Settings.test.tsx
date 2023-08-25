import {Settings} from "@/components";
import {render,screen} from '@testing-library/react';
import {
  MemoryRouter,
} from "react-router-dom";

describe('Settings Page',()=>{
    beforeEach(()=>{
        render(<MemoryRouter initialEntries = {["/settings"]}>
          <Settings/>
        </MemoryRouter>)
    });
    test('Login should have a valid form',()=>{
        expect(screen.getByText(/settings/i)).toBeInTheDocument();
    })
})
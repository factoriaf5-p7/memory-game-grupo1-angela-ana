import {Hero} from "@/components";
import {render,screen} from '@testing-library/react';
import {
  MemoryRouter,
} from "react-router-dom";

describe('Hero Page',()=>{
    beforeEach(()=>{
        render(<MemoryRouter initialEntries = {["/hero"]}>
          <Hero/>
        </MemoryRouter>)
    });
    test('Login should have a valid form',()=>{
        expect(screen.getByText(/hero/i)).toBeInTheDocument();
    })
})
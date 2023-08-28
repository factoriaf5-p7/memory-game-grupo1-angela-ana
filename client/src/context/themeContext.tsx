import React, { ReactNode, createContext, useContext } from 'react'
import { Cards } from "../components/Game"
import { Theme } from '@/interface/ThemeInterface'

export interface ThemeContextType {
    cards: Cards
    theme: Theme
  }

  const initialThemeContext: ThemeContextType = {
    cards:{
        name:"",
        img:""
    },
    theme:{
        name: "",
        cards: [{
        cardname: "",
        cardimg: "",
    }],
    }
  }

  interface ThemeContextProviderProps {
    children: ReactNode;
  }

  export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    return (
        <ThemeContext.Provider value={initialThemeContext}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    return useContext(ThemeContext);
};


const contextFetchedTheme = async () => {
    try {
      const { data } = await loginMutation.mutateAsync(loginData);
      
      const token = data.token; 
      const userData = data.user;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      setIsLoggedIn(true);
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  };



export const ThemeContext = createContext<ThemeContextType>(initialThemeContext);


 






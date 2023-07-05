'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { dark } from '@mui/material/styles/createPalette';

const ThemeToggle: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  // const router = useRouter();

  const handleChangeTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    if (darkTheme) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('dark', 'True');
      }
      document.documentElement.classList.add('dark');
    } else {
      if (typeof window !== 'undefined') {
        localStorage.setItem('dark', 'False');
      }
      if (typeof window !== 'undefined') {
        let myVariable = localStorage.getItem('dark') 
        if(myVariable=="False"){
          document.documentElement.classList.remove('dark');
        }
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem('dark', 'False');
      }
    }
  }, [darkTheme]);

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     setDarkTheme(true);
  //   };

  //   router.events.on('routeChangeStart', handleRouteChange);

  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange);
  //   };
  // }, [router]);

  return (
    <div>
      <label>
        <input type="checkbox" checked={darkTheme} onChange={handleChangeTheme} />
        Toggle Dark Theme
      </label>
      <p>Current Theme: {darkTheme ? 'Dark' : 'Light'}</p>
    </div>
  );
};

export default ThemeToggle;

'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ThemeToggle: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const router = useRouter();

  const handleChangeTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  useEffect(() => {
    const handleRouteChange = () => {
      setDarkTheme(true);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

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

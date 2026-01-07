'use client';

import { useEffect, useState } from 'react';

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false); // 👈 thêm

  const syncAuth = () => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    setEmail(loggedIn ? localStorage.getItem('userEmail') : null);
    setIsReady(true); // 👈 auth đã sync xong
  };

  useEffect(() => {
    syncAuth();

    window.addEventListener('storage', syncAuth);
    window.addEventListener('auth-change', syncAuth);

    return () => {
      window.removeEventListener('storage', syncAuth);
      window.removeEventListener('auth-change', syncAuth);
    };
  }, []);

  return { isLoggedIn, email, isReady };
}

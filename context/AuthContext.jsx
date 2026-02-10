'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  // Check if user is logged in on mount - FIX HYDRATION ERROR
  useEffect(() => {
    setIsMounted(true);
    
    try {
      // Only run on client side to avoid hydration mismatch
      const storedToken = localStorage.getItem('authToken');
      if (storedToken) {
        setToken(storedToken);
        // Try to get user info from stored data
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          try {
            setUser(JSON.parse(storedUser));
          } catch (e) {
            console.error('Failed to parse stored user:', e);
            localStorage.removeItem('user');
          }
        }
      }
    } catch (error) {
      console.error("LocalStorage access failed:", error);
    }
  }, []);

  // Signup function
  const signup = async (username, email, password, confirmPassword) => {
    try {
      console.log('🔄 Starting signup request to /api/auth/signup');
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log('📨 Signup response status:', response.status);

      if (!response.ok) {
        try {
          const errorData = await response.json();
          console.error('Server error response:', errorData);
          return { success: false, message: errorData.message || `Error: ${response.status}` };
        } catch (e) {
          return { success: false, message: `Server error: ${response.status} ${response.statusText}` };
        }
      }

      const data = await response.json();
      console.log('✅ Signup response received:', data);

      if (data.success) {
        setToken(data.token);
        setUser(data.user);
        try {
          localStorage.setItem('authToken', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
        } catch (e) {
          console.error("Failed to save to localStorage", e);
        }
        return { success: true, message: data.message };
      } else {
        return { success: false, message: data.message || 'Signup failed' };
      }
    } catch (error) {
      console.error('❌ Signup error:', error);
      
      if (error.name === 'AbortError') {
        return { success: false, message: 'Request timeout. Backend server not responding.' };
      }
      
      return { success: false, message: `Error during signup: ${error.message}.` };
    }
  };

  // Login function
  const login = async (username, password) => {
    try {
      console.log('🔄 Starting login request to /api/auth/login');
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log('📨 Login response status:', response.status);

      if (!response.ok) {
        try {
          const errorData = await response.json();
          console.error('Server error response:', errorData);
          return { success: false, message: errorData.message || `Error: ${response.status}` };
        } catch (e) {
          return { success: false, message: `Server error: ${response.status} ${response.statusText}` };
        }
      }

      const data = await response.json();
      console.log('✅ Login response received:', data);

      if (data.success) {
        setToken(data.token);
        setUser(data.user);
        try {
          localStorage.setItem('authToken', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
        } catch (e) {
          console.error("Failed to save to localStorage", e);
        }
        return { success: true, message: data.message };
      } else {
        return { success: false, message: data.message || 'Login failed' };
      }
    } catch (error) {
      console.error('❌ Login error:', error);
      
      if (error.name === 'AbortError') {
        return { success: false, message: 'Request timeout. Backend server not responding.' };
      }
      
      return { success: false, message: `Error during login: ${error.message}.` };
    }
  };

  // Logout function
  const logout = () => {
    setToken(null);
    setUser(null);
    try {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
    } catch (e) {
      console.error("Failed to clear localStorage", e);
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

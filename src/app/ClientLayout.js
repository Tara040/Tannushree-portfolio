"use client"; // Enable client-side rendering

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // usePathname to track route changes
import Navbar from "./components/Navbar.jsx";
import TransitionEffect from "./components/TransitionEffect";

export default function ClientLayout({ children }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false); 
    }, 1000); 

    return () => clearTimeout(timer);
  }, [pathname]); 

  return (
    <>
      <Navbar />
      {isAnimating && <TransitionEffect />}
    
      {children}
    </>
  );
}

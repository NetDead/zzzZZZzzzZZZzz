import React from "react";
import { useLocation, Link } from 'react-router-dom';

interface Logo__LinkProps {
  children: React.ReactNode,
}

export const Logo__Link: React.FC<Logo__LinkProps> = ({ children }) => useLocation().pathname === '/'
  ? <span className="logo__link">{ children }</span>
  : <Link className="logo__link" to='/'>{ children }</Link>;

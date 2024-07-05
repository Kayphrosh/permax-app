import React, { ReactNode } from 'react';
import NavBar from './navbar';
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section>
      <NavBar />
      <main>{children}</main>
    </section>
  );
};

export default Layout;

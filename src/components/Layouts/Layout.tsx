import { ReactNode } from 'react';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

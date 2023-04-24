import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, List, Logo, NavBtn } from './Layout.styled';
import logo from 'images/Logo.png';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header>
        <List>
          <li>
            <NavBtn to="/">Home</NavBtn>
          </li>
          <li>
            <NavBtn to="/tweets">Tweets</NavBtn>
          </li>
        </List>
        <Logo src={logo} alt="logo" />
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;

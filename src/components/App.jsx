import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Tweets = lazy(() => import('../pages/Tweets'));
// const Some = lazy(() => import('../pages/Some'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="tweets" element={<Tweets />} /> */}
        <Route path="/tweets" element={<Tweets />} />
      </Route>
    </Routes>
  );
};

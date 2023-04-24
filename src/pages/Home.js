import { HomeList } from 'components/HomeList/HomeList';
import { useEffect, useState } from 'react';
import { fetchAll } from 'services/users-api';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAll().then(usersList => {
      setUsers(usersList.data);
    });
  }, []);

  return (
    <section>
      <HomeList usersList={users} />
    </section>
  );
};

export default Home;

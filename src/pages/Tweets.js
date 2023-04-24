import { UsersList } from '../components/UsersList/UsersList';
import { useEffect, useState } from 'react';
import { fetchAll, fetchUsers } from 'services/users-api';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [following, setFollowing] = useState(
    JSON.parse(localStorage.getItem('following'))
      ? JSON.parse(localStorage.getItem('following'))
      : []
  );
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    fetchUsers(page)
      .then(usersList => {
        if (users.length < 3) {
          setUsers(usersList.data);
        } else {
          setUsers(prev => [...prev, ...usersList.data]);
        }
      })
      .finally(() => setisLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    localStorage.setItem('following', JSON.stringify(following));
  }, [following]);

  useEffect(() => {
    fetchAll().then(users => {
      setAllUsers(users.data);
    });
  }, []);

  const onFollowClick = id => {
    let user = {};
    if (users.filter(user => user.id === id)[0]) {
      user = users.filter(user => user.id === id)[0];
    } else {
      user = allUsers.filter(user => user.id === id)[0];
    }

    if (following.filter(user => user.id === id).length > 0) {
      setFollowing(prev => prev.filter(user => user.id !== id));
    } else {
      setFollowing(prev => [...prev, user]);
    }
  };

  const onLoadMoreClick = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div>
      <UsersList
        isLoading={isLoading}
        users={users}
        onClick={onFollowClick}
        following={following}
        onLoadClick={onLoadMoreClick}
      />
    </div>
  );
};

export default Tweets;

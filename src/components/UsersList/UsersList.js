import { UserCard } from 'components/UserCard/UserCard';
import {
  BackBtn,
  Box,
  Button,
  List,
  Section,
  Selector,
} from './UsersList.styled';
import 'react-dropdown/style.css';
import { useEffect, useState } from 'react';
import { fetchAll } from 'services/users-api';
import { Loader } from 'components/Loader/Loader';

export const UsersList = ({
  onLoadClick,
  users,
  onClick,
  following,
  isLoading,
}) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isActiveButton, setIsActiveButton] = useState(true);

  const options = ['show all', 'follow', 'followings'];
  const defaultOption = options[0];

  useEffect(() => {
    setSelectedUsers(users);
  }, [users]);

  const onSelect = e => {
    switch (e.value) {
      case 'show all':
        setSelectedUsers(users);
        setIsActiveButton(true);
        break;

      case 'follow':
        fetchAll()
          .then(usersList => {
            const followingsId = following.map(user => user.id);
            setSelectedUsers(
              usersList.data.filter(user => !followingsId.includes(user.id))
            );
          })
          .finally(() => setIsActiveButton(false));
        break;

      case 'followings':
        setSelectedUsers(following);
        setIsActiveButton(false);
        break;

      default:
        break;
    }
  };

  return (
    <Section>
      <Box>
        <BackBtn to="/">Back</BackBtn>
        <Selector
          options={options}
          onChange={onSelect}
          value={defaultOption}
          placeholder="Select an option"
        />
      </Box>
      <List>
        {selectedUsers.map(user => (
          <UserCard
            key={user.id}
            userData={user}
            onFollowClick={onClick}
            following={following}
          />
        ))}
      </List>

      {isActiveButton &&
        selectedUsers.length >= 3 &&
        selectedUsers.length < 21 && (
          <Button onClick={onLoadClick}>
            {isLoading ? <Loader /> : 'Load more'}
          </Button>
        )}
    </Section>
  );
};

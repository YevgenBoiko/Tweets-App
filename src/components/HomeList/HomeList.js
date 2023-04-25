import { Avatar, Item, List, Text, Title } from './HomeList.styled';
import PropTypes from 'prop-types';

export const HomeList = ({ usersList }) => {
  return (
    <>
      <Title>Our Users</Title>
      <List>
        {usersList.map(({ id, avatar, user }) => (
          <Item key={id}>
            <Avatar src={avatar} alt="avatar" />

            <Text>{user}</Text>
          </Item>
        ))}
      </List>
    </>
  );
};

HomeList.propTypes = {
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      user: PropTypes.string,
      avatar: PropTypes.string,
    })
  ),
};

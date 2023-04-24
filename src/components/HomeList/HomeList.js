import { Avatar, Item, List, Text, Title } from './HomeList.styled';

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

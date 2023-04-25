import logo from 'images/Logo.png';
import { useState } from 'react';
import {
  Avatar,
  BgPicture,
  ButtonFollow,
  ButtonFollowing,
  Card,
  Info,
  Logo,
  Outline,
  UserFollowers,
  UserTweets,
} from './UserCard.styled';

export const UserCard = ({
  userData: { id, tweets, followers, avatar },
  following,
  onFollowClick,
}) => {
  const [followersQty, setFollowersQty] = useState(
    following.filter(user => user.id === id).length > 0
      ? followers + 1
      : followers
  );

  const handleButton = id => {
    if (following.filter(user => user.id === id).length > 0) {
      setFollowersQty(prev => prev - 1);
      onFollowClick(id);
    } else {
      setFollowersQty(prev => prev + 1);
      onFollowClick(id);
    }
  };

  return (
    <Card>
      <div>
        <Logo src={logo} alt="logo" />
        <BgPicture></BgPicture>
        <Outline></Outline>

        <Avatar src={avatar} alt="avatar" />
      </div>
      <Info>
        <UserTweets>{tweets.toLocaleString('en-US')} Tweets</UserTweets>
        <UserFollowers>
          {followersQty.toLocaleString('en-US')} Followers
        </UserFollowers>

        {following.filter(user => user.id === id).length > 0 ? (
          <ButtonFollowing onClick={() => handleButton(id)}>
            Following
          </ButtonFollowing>
        ) : (
          <ButtonFollow onClick={() => handleButton(id)}>Follow</ButtonFollow>
        )}
      </Info>
    </Card>
  );
};

import styled from 'styled-components';
import bgPicture from 'images/picture.png';

export const Card = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 36px;
  padding-top: 28px;
  width: 380px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const BgPicture = styled.div`
  background-image: url(${bgPicture});
  height: 168px;
  width: 308px;
`;

export const Outline = styled.div`
  margin-top: 18px;
  margin-left: -36px;
  width: 380px;

  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;
  box-sizing: border-box;
  border: 8px solid #ebd8ff;
  border-radius: 50%;
  z-index: 100;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 62px;
  width: 100%;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const UserTweets = styled.p`
  margin: 0;
  margin-bottom: 16px;

  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const UserFollowers = styled(UserTweets)`
  margin-bottom: 26px;
`;

export const ButtonFollow = styled.button`
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;

  padding: 14px 56px;
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    background-color: #5cd3a8;
  }
`;
export const ButtonFollowing = styled(ButtonFollow)`
  background-color: #5cd3a8;
`;

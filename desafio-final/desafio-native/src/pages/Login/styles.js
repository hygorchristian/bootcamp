import styled from 'styled-components';

export const Background = styled.ImageBackground`
  height: 100%;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Logo = styled.Image`
  height: 72px;
  width: 72px;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`  height: 44px;
  width: 100%;
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 10px;
  color: #999999;
  background-color: #ffffff;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`  
  height: 44px;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ transparent }) => (transparent ? 'transparent' : '#E5293E')};
  
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

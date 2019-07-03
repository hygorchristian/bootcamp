import styled from 'styled-components';

export const Background = styled.ImageBackground`
  height: 100%;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 72px;
  width: 72px;
`;

export const WelcomeMessage = styled.Text`
  margin-top: 24px;
  color: #ffffff;
  font-size: 24px;
`;

export const LoaderContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.ActivityIndicator.attrs({
  size: 'large', color: '#ffffff',
})`
  margin-top: 60px;
`;


export const DarkLoader = styled.ActivityIndicator.attrs({
  size: 'large', color: '#303030',
})`
  margin-top: 60px;
`;

import styled from 'styled-components';


export const Container = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  background-color: transparent;
`;

export const Background = styled.Image`
  position: absolute;
  height: 140px;
  width: 100%;
`;

export const Toolbar = styled.View`
  flex-direction: row;
  height: 56px;
  align-items: center;
  margin: 0 20px;
`;

export const ToolbarTitle = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
`;

export const ToolbarPrice = styled.Text`
  flex: 1;
  text-align: right;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
`;

export const Notification = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: #ffc107;
`;

export const ItemsList = styled.FlatList.attrs({
  contentContainerStyle: { paddingTop: 16, paddingBottom: 30 },
})`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const ItemContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  align-items: center;
  
  margin: 0 10px;
  padding: 13px 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #ffffff;
  
  elevation: 8;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.3;
  shadow-radius: 2;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  background-color: red;
`;

export const Info = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size:16px;
  color:#0b2031;
`;

export const Size = styled.Text`
  margin-top: 5px;
  font-size:14px;
  color:#706e7b;
`;

export const Price = styled.Text`
  margin-top: 8px;
  font-size: 20px;
  font-weight: bold;
  color:#0b2031;
`;

export const ButtonDelete = styled.TouchableOpacity`
  margin-right: 8px;
`;

export const BottomMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const ButtonCart = styled.TouchableOpacity`
  height: 36px;
  width: 36px;
  border-radius: 18px;
  background-color: #dddddd;
  justify-content: center;
  align-items: center;
`;


export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
`;

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  height: 36px;
  border-radius: 18px;
  padding: 0 16px;
  background-color: #E5293E;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  margin-right: 12px;
`;

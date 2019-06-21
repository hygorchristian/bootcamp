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

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`  
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

export const Bag = styled.Image`
  height: 18px;
  width: 18px;
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
  flex-grow: 1;
  flex-basis: 0;
  flex-direction: column;
  align-items: center;
  
  margin: 0 10px;
  padding: 24px 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #ffffff;
  
  elevation: 8;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.8;
  shadow-radius: 2;
`;

export const Image = styled.Image`
  width: 130px;
  height: 130px;
  background-color: red;
`;

export const Title = styled.Text`
  margin-top: 20px;
  font-size:16px;
  font-weight: bold;
  color:#0b2031;
`;

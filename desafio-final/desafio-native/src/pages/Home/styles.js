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
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`;

export const ToolbarTitle = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`  
`;

export const Cart = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`   
  height: 36px;
  width: 36px;
  border-radius: 18px;
  background-color: #E5293E;
  justify-content: center;
  align-items: center;
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

export const ItemContainer = styled.View`
  flex: 1;
  margin: 0 20px;
  padding: 13px 15px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 10px;
  flex-direction: row;
  elevation: 8;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.8;
  shadow-radius: 2;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  background-color: red;
`;

export const Info = styled.View`
  flex:1;
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size:12px;
  color:#0b2031;
`;

export const Description = styled.Text`
  margin-top: 8px;
  font-size:11px;
  color:#706e7b;
`;

export const Time = styled.View`
  flex-direction: row;
  margin-top: 5px;
  align-items: center;
`;

export const TimeText = styled.Text`
  font-family:Helvetica;
  font-size:10px;
  color:#706e7b;
  letter-spacing:0.46px;
  margin-left: 5px;
`;

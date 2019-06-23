import styled, { css } from 'styled-components';

const statusColor = (status) => {
  switch (status) {
    case 'PRONTO':
      return '#ff0000';
    case 'EM ANDAMENTO':
      return '#00FF00';
    case 'AGUARDANDO':
      return '#0000FF';
    default: return '#000000';
  }
};


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

export const ItemContainer = styled.View`
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

export const Description = styled.Text`
  font-size:14px;
  color:#706e7b;
  margin-top: 5px;
`;

export const OrderStatus = styled.Text`
  font-size:16px;
  color: ${({ status }) => statusColor(status)};
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

export const BottomMenu = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
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

export const Form = styled.View`
  flex-direction: column;
  padding: 20px 20px 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  height: 56px;
`;

export const TextArea = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
  textAlignVertical: 'top',
  multiline: true,
})`
  height: 130px;
  background-color: #ffffff;
  border-radius: 6px;
  margin-bottom: 12px;
  padding: 12px;
  color: #999999;
  font-size: 16px;
  
  elevation: 8;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.3;
  shadow-radius: 2;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  background-color: #ffffff;
  border-radius: 6px;
  margin-bottom: 12px;
  padding: 0 12px;
  color: #999999;
  font-size: 16px;
  
  elevation: 8;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.3;
  shadow-radius: 2;
  ${({ width }) => (width ? css`
    width: ${width};
  ` : css`
    flex: 1;
  `)} 
`;

import styled from 'styled-components';
import React from 'react';

const corStatus = (status) => {
  switch (status) {
    case 'Recebido':
      return '#5283ff';
    case 'Em andamento':
      return '#149859';
    case 'Pronto':
      return '#822ab2';
    case 'Cancelado':
      return '#ff296c';
    default: return '#0b2031';
  }
};

export const Order = styled.div`
  background: #ffffff;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, .2);
  margin-bottom: 16px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size:18px;
  color:#0b2031;
  letter-spacing:0;
`;

export const Status = styled.div`
  font-size:18px;
  letter-spacing:0;
  color: ${({ status }) => corStatus(status)};
  
  select{
    margin-left: 20px;
    option{
      
    }
  }
`;

export const Date = styled.div`
  margin-top: 5px;
  font-size:11px;
  color:#706e7b;
  letter-spacing:0;
  line-height:14px;
`;

export const Price = styled.div`
  margin-top: 5px;
  font-weight: bold;
  font-size:16px;
  color:#0b2031;
  letter-spacing:0;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f2f2f2;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Observation = styled.div`
  font-size:14px;
  color:#706e7b;
  letter-spacing:0;
  
  strong{
    font-weight: bold;
  }
`;

export const ItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 10px;
`;

export const Item = styled.div`
  display: flex;
  padding: 10px 14px;
  border-radius: 5px;
  border: 1px solid #eeeeee;
`;

export const ItemImage = styled.img`
  height: 60px;
  width: 60px;
  object-fit: contain;
  margin-right: 14px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
`;

export const ItemTitle = styled.h1`
  font-size:13px;
  color:s#0b2031;
  letter-spacing:0;
`;

export const ItemSize = styled.h2`
  margin-top: 5px;
  font-size:11px;
  color:#706e7b;
  letter-spacing:0;
  line-height:10.77px;
`;

import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Header = styled.header`
  position: fixed;
  display: flex;
  height: 80px;
  width: 100%;
  background-color: #0B2031;
  justify-content: center;
  
  nav{
    display: flex;
    width: 950px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 32px;
  width: 32px;
  object-fit: contain;
  margin-right: 14px;
`;

export const Brand = styled.h2`
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const AppInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const UserName = styled.h4`
  font-size: 16px;
  color: #ffffff;
`;

export const SignOut = styled.button`
  border: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 14px;
  opacity: 0.6;
`;

export const Separator = styled.div`
  height: 32px;
  width: 1px;
  background-color: #3b4c5a;
  margin-right: 16px;
  margin-left: 16px;
`;


export const Orders = styled.div`
  display: flex;
  height: 36px;
  width: 36px;
  justify-content: center;
  align-items: center;
  background-color: #E5293E;
  border-radius: 50%;
  padding-right: 1px;
  cursor: pointer;
  position: relative;
  
  ${({ notification }) => notification && css`
    div{
      position: absolute;
      background-color: #FFC107;
      height: 12px;
      width: 12px;
      border-radius: 50%;
      top: 0;
      right: 0;
    }
  `} 
`;

export const Bag = styled.img`
  
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  width: 710px;
  
  & > h1{
    font-size:18px;
    color:#333333;
    margin-bottom: 16px;
  }
`;

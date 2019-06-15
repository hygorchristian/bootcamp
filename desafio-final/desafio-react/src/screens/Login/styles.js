import styled from 'styled-components';

import fundo from '../../assets/img/fundo.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.31), black), url(${fundo}) ;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  align-items: center;
`;

export const Logo = styled.img`
  height: 72px;
  width: 72px;
  object-fit: contain;
  margin-bottom: 32px;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;  
  padding: 18px;
  margin-bottom: 16px;
  background-color: white;
  border-radius: 8px;
  outline: none;
  border: none;
  
  text-align:left;
  font-size:15px;
  color:#999999;
  letter-spacing:0;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 48px; 
  background-color: #E5293E;
  border-radius: 8px;
  border: none;
  font-size:15px;
  font-weight: bold;
  color:#ffffff;
  letter-spacing:0;
    cursor: pointer;
  
  &:hover{
    background-color: #c8293c;
  }
  
  &:active{
    background-color: #e42b3d;
  }
`;

import styled from 'styled-components';
import { Spinner } from '../Loading/styles';


export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #121212;
  color: #b3b3b3;
  
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  
  > div {
    padding: 25px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;
  
  &:first-child{
    margin-top: 0;
  }
  
  li{
    display: flex;
    align-items: center;
      
    a{
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;
      font-weight: ${props => (props.main ? 'bold' : 'normal')};
      
      &:hover{
        color: #ffffff;
      }
    }
    
    span{
        font-size: 11px;
        text-transform: uppercase;
        line-height: 22px;
        letter-spacing: 1.11px;
        font-weight: 300;
    }
    
    ${Spinner}{
      height: 12px;
      margin-left: 8px;
    }
  }
`;

export const NewPlaylist = styled.button`
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  font-size: 13px;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  
  &:hover{
    color: #ffffff;
  }
  
  img{
    margin-right: 10px;
  }
`;

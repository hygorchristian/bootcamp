import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  flex: 1;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: scroll;
  padding-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 48px;
  
  ${Spinner}{
    height: 30px;
    margin-left: 30px;
  }
`;

export const List = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 250px) );
  grid-gap: 20px;
`;

export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 250px;
  text-decoration: none;  
  color: #ffffff
  
  &:hover{
    img{      
      opacity: .7;
    }
  }
  
  img{
    height: 250px;
    width: 250px;
  }
  
  strong{
    font-size: 13px;
    margin-top: 10px;
  }
  
  p{
    line-height: 22px;
    font-size: 13px;
    margin-top: 5px;
    color: #b3b3b3;
  }
`;

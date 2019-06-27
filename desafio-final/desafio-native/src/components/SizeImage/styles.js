import styled from 'styled-components';

const getSize = (size) => {
  switch (size) {
    case 'P': return '60px';
    case 'M': return '80px';
    case 'G': return '100px';
    case 'GG': return '120px';
  }
};

export const Container = styled.View`
  height: 120px;
  width: 120px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  height: ${({ size }) => getSize(size)};
  width: ${({ size }) => getSize(size)};;
`;

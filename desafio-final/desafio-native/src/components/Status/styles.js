import styled from 'styled-components';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const HEIGHT = Platform.OS === 'ios' ? getStatusBarHeight() : 0;

export const Container = styled.View`
  height: ${HEIGHT}px;
`;

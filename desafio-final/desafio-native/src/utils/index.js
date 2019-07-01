import Snackbar from 'react-native-snackbar';

export const showError = (message) => {
  Snackbar.show({
    title: message,
    backgroundColor: '#D22F2F',
    duration: Snackbar.LENGTH_LONG,
  });
};

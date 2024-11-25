import {StyleSheet} from 'react-native';

const rectangularButtonStyle = StyleSheet.create({
  button: {
    width: '58%',
    height: 50,
    backgroundColor: '#69bf69',
    borderWidth: 1,
    borderColor: '#4cae4f',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 5,
    display: 'flex',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 'auto',
    color: '#dbfeb8',
    fontWeight: 400,
  },
});

export {rectangularButtonStyle};

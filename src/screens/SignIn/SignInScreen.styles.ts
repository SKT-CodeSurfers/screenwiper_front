import { StyleSheet } from 'react-native';

const SignInScreenStyles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    width: '100%',
  },
  logo: {
    opacity: 0.9,
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Pretendard-Bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Pretendard-Medium',
    color: '#ffffff',
    marginBottom: 100,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '10%',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fee500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: 350,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 17, 
    fontFamily: 'Pretendard-SemiBold',
    color: '#3b1d1d',
  },
});

export default SignInScreenStyles;

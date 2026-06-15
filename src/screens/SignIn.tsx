import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Spacer } from '../components/atoms/Spacer';
import { IMAGES } from '../utils/images';
import { COLORS } from '../utils/colors';
import { Header } from '../components/molecules/Header';
import { SignInForm } from '../components/organisms/Forms/SignInForm';
import { PrimaryButton } from '../components/molecules/Button/PrimaryButton';
import { AuthDivider } from '../components/molecules/AuthDivider';
import { SocialAuthButton } from '../components/molecules/Button/SocialAuthButton';
import { AppFontFamily } from '../components/atoms/Typography';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../navigation/RootNavigator';
import { AuthPrompt } from '../components/molecules/Texts/AuthPrompt';
import { AuthTitleSubtitle } from '../components/molecules/Texts/AuthTitleSubtitle';

const SignIn = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header title="CINEMA DARK" titleAlignment="center" />
      <Spacer height={140} />
      <AuthTitleSubtitle
        title="Welcome Back"
        subtitle="Sign in to resume your cinematic journey."
        alignment="center"
        titleFontFamily={AppFontFamily.Montserrat}
        titleFontSize={16}
        subtitleFontFamily={AppFontFamily.Inter}
        subtitleFontSize={16}
      />
      <Spacer height={24} />
      <SignInForm />
      <Spacer height={12} />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Sign In"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>

      <Spacer height={40} />
      <AuthDivider text="OR CONTINUE WITH" />
      <Spacer height={33} />
      <View style={styles.imageContainer}>
        <Image
          source={IMAGES.Sign_In}
          style={styles.bottomImage}
          resizeMode="cover"
        />
        <View style={styles.actionButton}>
          <View style={styles.actionButtonWrapper}>
            <SocialAuthButton title="Google" />
          </View>

          <View style={styles.actionButtonWrapper}>
            <SocialAuthButton title="iOS" />
          </View>
        </View>
        <View style={styles.signupPromptText}>
          <AuthPrompt text="Don't have an account?" actionText="Sign Up" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
  },
  imageContainer: {
    flex: 1,
  },
  bottomImage: {
    opacity: 0.4,
    width: '100%',
    height: '100%',
  },
  signupPromptText: {
    top: 100,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  actionButton: {
    top: 10,
    left: 24,
    right: 24,
    position: 'absolute',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  actionButtonWrapper: {
    flex: 1,
  },
  buttonContainer: {
    paddingHorizontal: 24,
  },
});

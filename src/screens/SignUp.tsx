import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { COLORS } from '../utils/colors';
import { Header } from '../components/molecules/Header';
import { ICONS } from '../utils/icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../navigation/RootNavigator';
import { AppFontFamily, Typography } from '../components/atoms/Typography';
import { SignUpForm } from '../components/organisms/Forms/SignUpForm';
import { Spacer } from '../components/atoms/Spacer';
import { PrimaryButton } from '../components/molecules/Button/PrimaryButton';
import { Divider } from '../components/atoms/Divider';
import { TermsAgreement } from '../components/molecules/Texts/TermsAgreement';
import { AuthPrompt } from '../components/molecules/Texts/AuthPrompt';
import { AuthTitleSubtitle } from '../components/molecules/Texts/AuthTitleSubtitle';

const SignUp = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header
        title="CINEMA DARK"
        titleAlignment="center"
        leftIcon={<ICONS.Left_Arrow />}
        onLeftPress={() => navigation.goBack()}
      />
      <View style={styles.innerPadding}>
        <View style={styles.contentContainer}>
          <View style={styles.row}>
            <View style={styles.verticalLine} />
            <AuthTitleSubtitle
              title="Create Account"
              subtitle="JOIN THE PREMIERE CIRCLE"
              alignment="left"
              titleFontFamily={AppFontFamily.MontserratSemiBold}
              titleFontSize={32}
              subtitleFontFamily={AppFontFamily.InterSemiBold}
              subtitleFontSize={14}
            />
          </View>
          <Spacer height={24} />
          <SignUpForm />
          <Spacer height={24} />
          <TermsAgreement />
          <Spacer height={24} />
          <View>
            <PrimaryButton
              title="Sign Up"
              onPress={() => navigation.navigate('SignIn')}
            />
          </View>
          <Spacer height={24} />
          <View style={styles.divider}>
            <Divider />
          </View>
          <Spacer height={24} />
          <View>
            <AuthPrompt text="Already have an account?" actionText="Sign In" />
          </View>
        </View>
        <Spacer height={24} />
        <View style={styles.bottomText}>
          <Typography
            fontFamily={AppFontFamily.Montserrat}
            fontSize={12}
            color={COLORS.text2}
          >
            THE ART OF FILM DISCOVERY
          </Typography>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
  },
  innerPadding: {
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  contentContainer: {
    backgroundColor: COLORS.Surface,
    borderWidth: 1,
    borderColor: COLORS.Border,
    borderRadius: 8,
    padding: 32,
    boxShadow: [
      {
        offsetX: 0,
        offsetY: 25,
        blurRadius: 50,
        spreadDistance: -12,
        color: '#00000040',
      },
    ],
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 16,
  },
  verticalLine: {
    width: 6,
    backgroundColor: COLORS.Primary,
    alignSelf: 'stretch',
  },
  divider: {
    flexDirection: 'row',
  },
  bottomText: {
    alignSelf: 'center',
  },
});

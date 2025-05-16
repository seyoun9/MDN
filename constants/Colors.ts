/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#129575';
const tintColorDark = '#129575';

export const Colors = {

  primary: '#129575',         // 메인 초록색 (버튼, 강조 텍스트)
  background: '#FFFFFF',      // 기본 배경색
  inputBackground: '#F9F9F9', // 입력창 배경색
  inputBorder: '#E0E0E0',     // 입력창 테두리 색
  placeholder: '#9E9E9E',     // 입력창 플레이스홀더 텍스트 색
  buttonText: '#FFFFFF',      // 버튼 안 글자 색
  text: '#000000',            // 일반 텍스트 색 (짙은 회색)
  secondaryText: '#000000',   // 부가 설명 텍스트 색 (연한 회색)
  orangeText: '#FF9C00',
  
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

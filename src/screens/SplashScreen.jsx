import React, { useEffect, useRef } from "react";
import { View, Animated, Easing, StyleSheet, Dimensions } from "react-native";
import Logo from "../components/Logo";
import UP from "../assets/splash/splash-up.png";
import { COLORS } from "../styles/color";

const SplashScreen = ({ onFinish }) => {
  const { width, height } = Dimensions.get("window");
  const splashUpHeight = width * 0.5;

  const fadeAnim = useRef(new Animated.Value(0)).current; // 로고 투명도
  const moveAnim = useRef(new Animated.Value(height)).current; // splash-up 시작 위치
  const fadeOutAnim = useRef(new Animated.Value(1)).current; // splash-up 투명도
  const logoTranslate = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current; // 로고 위치 이동

  useEffect(() => {
    const easing = Easing.out(Easing.ease);

    // 애니메이션들 병렬처리
    Animated.parallel([
      // 로고 투명도
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        easing,
        useNativeDriver: true,
        delay: 800,
      }),
      // splash-up 위치
      Animated.timing(moveAnim, {
        toValue: -height / 3.3,
        duration: 3000,
        easing,
        useNativeDriver: true,
        delay: 800,
      }),
      // splash-up 투명도
      Animated.timing(fadeOutAnim, {
        toValue: 0,
        duration: 3000,
        delay: 1800,
        easing,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // 로고 위치 이동
      Animated.timing(logoTranslate, {
        toValue: { x: 0, y: -191 },
        duration: 1000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        if (onFinish) onFinish();
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={UP}
        style={{
          position: "absolute",
          bottom: 0,
          width: width,
          height: splashUpHeight,
          transform: [{ translateY: moveAnim }],
          opacity: fadeOutAnim,
          resizeMode: "contain",
        }}
      />

      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: logoTranslate.getTranslateTransform(),
        }}
      >
        <Logo width="186.67" height="52.67" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;

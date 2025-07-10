import React, { useState } from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import SplashScreen from "./src/screens/SplashScreen";

export default function App() {
  const [splashDone, setSplashDone] = useState(false);
  const isLoggedIn = true; // 로그인여부: 테스트용

  if (!splashDone) {
    return (
      <SplashScreen
        isLoggedIn={isLoggedIn}
        onFinish={() => setSplashDone(true)}
      />
    );
  }

  return <RootNavigator />;
}

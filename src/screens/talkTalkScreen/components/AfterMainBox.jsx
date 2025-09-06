import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AfterMainSentence } from "./AfterMainSentence";

import RESET from "../../../assets/images/talktalk/reset.png";
import { useState } from "react";
import { COLORS } from "../../../styles/color";
import { useRecorder } from "../../../hooks/useRecorder";
import { useAudioPlayer } from "expo-audio";

export const AfterMainBox = ({ selectedLocation, stateText }) => {
  const [sentences, setSentences] = useState([
    "안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕 1",
    "안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕 2",
    "안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕 3",
    "안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕 4",
  ]);

  const { isRecording, toggle } = useRecorder();
  const player = useAudioPlayer();

  const handleReset = () => {
    setSentences([
      "새 문장 새 문장 새 문장 새 문장 새 문장 1",
      "새 문장 새 문장 새 문장 새 문장 새 문장 2",
      "새 문장 새 문장 새 문장 새 문장 새 문장 3",
      "새 문장 새 문장 새 문장 새 문장 새 문장 4",
    ]);
  };

  const handleSentencePress = async (sentence) => {
    // 첫 누름: 녹음 시작, 두번째 누름: 녹음 종료 후 URI 반환
    const uri = await toggle();
    if (uri) {
      console.log("녹음 종료, 파일:", uri, "문장 태그:", sentence);
      // TODO: 여기서 서버 업로드나 상태 저장을 수행
      player.replace({ uri }); // 새 소스로 교체
      player.seekTo(0);
      player.play();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.RecomHeader}>
          <View style={styles.RecomTitle}>
            <Text style={styles.TitleText}>
              추천 문장 몇 개 갖고 왔는데, 골라 봐!
            </Text>
          </View>
          <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
            <Image source={RESET} style={styles.resetImg} />
          </TouchableOpacity>
        </View>
        {sentences.map((sentence, index) => (
          <AfterMainSentence
            key={index}
            text={sentence}
            onPress={() => handleSentencePress(sentence)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 327.33,
    height: 256,
    backgroundColor: COLORS.MAIN_YELLOW2,
    borderRadius: 33.33,
    padding: 12,
  },

  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  RecomHeader: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  resetBtn: {
    position: "absolute",
    right: 5,
  },

  resetImg: {
    width: 24,
    height: 24,
  },

  RecomTitle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.MAIN_YELLOW3,
    borderRadius: 16.67,
    paddingHorizontal: 10,
    paddingVertical: 6.67,
  },

  TitleText: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 14,
    textAlign: "center",
  },
});

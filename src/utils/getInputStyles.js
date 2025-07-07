import { COLORS } from "../styles/color";

// Input창 배경색, 아이콘 색상
export const getInputStyles = (isFocused, text, hasError) => {
  if (hasError) {
    // 유효성 에러
    return {
      backgroundColor: COLORS.ERROR_NORMAL,
      iconColor: COLORS.WHITE,
    };
  }
  if (isFocused) {
    // 입력 중
    return {
      backgroundColor: "#FFD32180",
      iconColor: COLORS.MAIN_YELLOW3,
    };
  } else if (text.length > 0) {
    // 입력 완료
    return {
      backgroundColor: COLORS.MAIN_YELLOW3,
      iconColor: COLORS.WHITE,
    };
  } else {
    // 입력 전
    return {
      backgroundColor: COLORS.MAIN_YELLOW1,
      iconColor: COLORS.MAIN_YELLOW3,
    };
  }
};

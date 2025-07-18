import { COLORS } from "../styles/color";

// Input창과 Selector 배경색, 아이콘 색상
export const getInputStyles = (
  isFocused,
  text,
  hasError,
  variant = "default"
) => {
  // 기본 스타일
  if (variant === "default") {
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
  }

  // 설정(언어, 성별) 스타일
  if (variant === "setting") {
    if (isFocused) {
      return {
        backgroundColor: COLORS.BACKGROUND,
        iconColor: COLORS.MAIN_YELLOW1,
      };
    } else {
      return {
        backgroundColor: COLORS.BACKGROUND,
        iconColor: COLORS.MAIN_YELLOW3,
      };
    }
  }

  // 보호자 통계의 연결계정 목록 스타일
  if (variant === "user") {
    if (isFocused) {
      return {
        backgroundColor: COLORS.MAIN_YELLOW2,
        iconColor: COLORS.BACKGROUND,
      };
    } else {
      return {
        backgroundColor: COLORS.BACKGROUND,
        iconColor: COLORS.MAIN_YELLOW3,
      };
    }
  }

  // fallback
  return {
    backgroundColor: COLORS.MAIN_YELLOW3,
    iconColor: COLORS.WHITE,
  };
};

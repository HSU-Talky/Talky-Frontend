import { COLORS } from "../styles/color";

// Input창 배경색, 아이콘 색상
export const getInputStyles = (isFocused, text) => {
  if (isFocused) {
    return {
      backgroundColor: "#FFD32180",
      iconColor: COLORS.MAIN_YELLOW3,
    };
  } else if (text.length > 0) {
    return {
      backgroundColor: COLORS.MAIN_YELLOW3,
      iconColor: COLORS.WHITE,
    };
  } else {
    return {
      backgroundColor: COLORS.MAIN_YELLOW1,
      iconColor: COLORS.MAIN_YELLOW3,
    };
  }
};

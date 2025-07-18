import { COLORS } from "../styles/color";

// Selector의 dropdown 배경색
export const getDropdownBgColor = (variant) => {
  if (variant === "setting") {
    return COLORS.MAIN_YELLOW2;
  }
  return COLORS.MAIN_YELLOW1; // 기본값
};

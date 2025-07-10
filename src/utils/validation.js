// 유효성 검사 모음
import validator from "validator";

// 회원가입
export const validateSignup = ({ name, id, password }) => {
  const errors = {
    name: "",
    id: "",
    password: "",
  };

  // 이름: 8자 이하
  if (!name) {
    errors.name = "이름을 입력해 주세요.";
  } else if (name.length > 8) {
    errors.name = "이름은 8자 이하로 입력해 주세요.";
  }

  // 아이디: 영문 숫자 포함 5자 이상
  const idRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{5,}$/;
  if (!id) {
    errors.id = "아이디를 입력해 주세요.";
  } else if (!validator.matches(id, idRegex)) {
    errors.id = "영문/숫자 포함 5자 이상 입력해 주세요.";
  }

  // 비밀번호: 영문 숫자 포함 8자 이상
  const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{8,}$/;
  if (!password) {
    errors.password = "비밀번호를 입력해 주세요.";
  } else if (!validator.matches(password, pwRegex)) {
    errors.password = "영문/숫자 포함 8자 이상 입력해 주세요.";
  }

  // 모든 오류가 빈문자열 ->  통과
  const isValid = Object.values(errors).every((v) => v === "");

  return { isValid, errors };
};

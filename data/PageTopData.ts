interface PageTopDataType {
    [key: string]: {
        firstLine: string;
        secondLine: string;
      };
  }
const PageTopData:PageTopDataType = {
  findid: {
    firstLine: "아이디를 찾기 위해",
    secondLine: "아래 정보를 입력해주세요",
  },
  findpwcert: {
    firstLine: "비밀번호 변경을 위해",
    secondLine: "본인인증을 진행해주세요.",
  },
  chgpw: {
    firstLine: "새로 사용하실",
    secondLine: "비밀번호를 입력해주세요.",
  },
  signup: {
    firstLine: "회원가입 순서",
    secondLine: "",
  },
  signupcert: {
    firstLine: "회원가입 본인인증",
    secondLine: "",
  },
  signupagree: {
    firstLine: "회원가입 약관동의",
    secondLine: "",
  },
};

export default PageTopData;

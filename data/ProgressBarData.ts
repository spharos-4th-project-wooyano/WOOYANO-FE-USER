interface ProgressBarDataType {
    [key: string]: {
        total: number,
        completed: number,
      };
  }
const ProgressBarData:ProgressBarDataType = {
  signupprocess: {
    total: 4,
    completed: 0,
  },
  signupcert: {
    total: 4,
    completed: 1,
  },
  signupagree: {
    total: 4,
    completed: 2,
  },
    signupform: {
    total: 4,
    completed: 3,
  },
  signupcomplete: {
    total: 4,
    completed: 4,
  },
}
export default ProgressBarData;
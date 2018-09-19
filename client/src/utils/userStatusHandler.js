import { changeStatus } from './utils';

const fiveMinutes = 60000 * 60;

let timeoutTimer;
let startTime;
let endTime;

const startTimer = () => {
  startTime = performance.now();
  timeoutTimer = setTimeout(changeStatus, fiveMinutes);
};

const resetTimer = () => {
  clearTimeout(timeoutTimer);
  endTime = performance.now();
  const timePassed = endTime - startTime;
  timePassed > fiveMinutes && changeStatus();
};

export default () => {
  resetTimer();
  startTimer();
};
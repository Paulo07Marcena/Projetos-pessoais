const time = document.getElementById("spanTime");
const minute = document.getElementById("spanMinute");
const second = document.getElementById("spansScound");

const watch = setInterval(function time() {
  let dateToday = new Date();
  let time1 = dateToday.getHours();
  let minute1 = dateToday.getMinutes();
  let secound1 = dateToday.getSeconds();

  spanTime.textContent = time1;
  spanMinute.textContent = minute1;
  spanSecond.textContent = secound1;
});

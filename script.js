function setDate() {
  const now = new Date();
  const seconds = now.getSeconds()
  const mins = now.getMinutes()
  const hours = now.getHours()

  const secondsDegrees = seconds*6 + 90;  // we added 90 degreees more because it starts from 9 o'clock not 12
  const minsDegrees = mins*6 + 90;
  const hoursDegrees = hours*30 +90;

  const secondHand = document.querySelector(".second-hand");
  const minsHand = document.querySelector(".min-hand");
  const hoursHand = document.querySelector(".hour-hand");


  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;


}

setInterval(setDate, 1000);

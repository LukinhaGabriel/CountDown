import { useState } from "react";

export const useCountDown = () => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minutes, setMinute] = useState(0);
  const [seconds, setSecond] = useState(0);

  const countDown = () => {
    // Set the date we're counting down to
    const date = new Date("jan 1, 2024 00:00:00").getTime();
    //Get today's date and time
    const dateNow = new Date().getTime();
    // Find the distance between now and the count down date
    const distance = date - dateNow;

    // Time calculations for days, hours, minutes and seconds
    const dayNumber = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hourNumber = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesNumber = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsNumber = Math.floor((distance % (1000 * 60)) / 1000);
  
    setDay(dayNumber);
    setHour(hourNumber);
    setMinute(minutesNumber);
    setSecond(secondsNumber);
  }
  setInterval( countDown, 1000 )
  
  return [day, hour, minutes, seconds];
}
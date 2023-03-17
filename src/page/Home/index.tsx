import { useCountDown } from "../../script/useCountDown";
import "./style.css";



export const Home = () => {
    
  const [day, hour, minutes, seconds] = useCountDown();
  
  // const timeFormat = (time:number) => {
  //   time > 10 ? `0${time}` : time;
  // }

  return (
    <main>
      <div className="container">
        <div className="row-countdown">
          <h1 className="title">Contagem regressiva para 2024</h1>
          <div className="list-countdown">
            <div className="wrapper-countdown">
              <div className="number">{day < 10 ? `0${day}` : day}</div>
              <p>Dias</p>
            </div>
            <span>:</span>
            <div className="wrapper-countdown">
              <div className="number">{hour < 10 ? `0${hour}` : hour}</div>
              <p>Horas</p>
            </div>
            <span>:</span>
            <div className="wrapper-countdown">
              <div className="number">{minutes < 10 ? `0${minutes}` : minutes}</div>
              <p>Minutos</p>
            </div>
            <span>:</span>
            <div className="wrapper-countdown">
              <div className="number">{seconds < 10 ? `0${seconds}` : seconds}</div>
              <p>Segundos</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};



/* npm run dev */
import "./style.css";
import { toys } from "./constants";
import Dinamic from "./../../assets/music-button-dinamic.png";
import LowVoice from "./../../assets/low-voice.png";
import LoudVoice from "./../../assets/loud-voice.png";

export const SecondPage = () => {
  const toysComponets = toys.map((toy, index) => {
    return (
      <div className="flex-container-for-toy-cards__toy-card">
        <span className="toy-card toy-card_name">{toy.name}</span>
        <img src="" alt="" />
        <span className="toy-card toy-card_count">
          {" "}
          Количество: {toy.count}
        </span>
        <span className="toy-card toy-card_year">Год покупки: {toy.year}</span>
        <span className="toy-card toy-card_shape">
          {" "}
          Форма игрушки: {toy.shape}
        </span>
        <span className="toy-card toy-card_color">
          Цвет игрушки: {toy.color}
        </span>
        <span className="toy-card toy-card_size">
          Размер игрушки: {toy.size}
        </span>
        <span className="toy-card toy-card_do-like">Любимая: </span>
      </div>
    );
  });

  return (
    <div className="toys">
      <div className="container-for-second-page">
        <div className="container-for-forms">
          <div>
            <button className="music-button music-button_secon-page">
              <img 
              src={Dinamic} 
              alt="" className="music-button_dinamic" />
              <img src={LowVoice} alt="" className="music-button_low-voice" />
              <img src={LoudVoice} alt=""  className="music-button_loud-voice"/>
            </button>

            <input type="text" />
            <img src="" alt="" />
          </div>
          <div>
            <span></span>
            <div>
              <button>Dropdown</button>
              <div>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="">
              <input type="checkbox" />
            </label>
          </div>
          <div>
            <span></span>
            <div>
              <div>
                <img src="" alt="" />
                <span></span>
              </div>
              <div>
                <img src="" alt="" />
                <span></span>
              </div>
              <div>
                <img src="" alt="" />
                <span></span>
              </div>
              <div>
                <img src="" alt="" />
                <span></span>
              </div>
              <div>
                <img src="" alt="" />
                <span></span>
              </div>
              <div>
                <img src="" alt="" />
                <span></span>
              </div>
              <div>
                <img src="" alt="" />
                <span></span>
              </div>
            </div>
          </div>
          <div>
            <span></span>
            <input type="range" />
          </div>
          <div>
            <span></span>
            <input type="range" />
          </div>
        </div>
        <div className="container-for-toys-and-text">
          <span className="container-for-toys-and-text__text-toys">
            Игрушки
          </span>
          <div className="flex-container-for-toy-cards">
            {toysComponets}
            <div className="flex-container-for-toy-cards__toy-card"></div>
          </div>
        </div>
      </div>
      <div className="footer__second-page"></div>
    </div>
  );
};

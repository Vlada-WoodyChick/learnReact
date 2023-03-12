/* npm run dev */
import "./style.css";
import { toys } from "./constants";

export const SecondPage = () => {
  const toysComponets = toys.map((toy, index) => {
    return (
      <div className="flex-container-for-toy-cards__toy-card">
        <span className="toy-card toy-card_name">{toy.name}</span>
        <img src="" alt="" />
        <span className="toy-card toy-card_count" > Количество:  {toy.count}</span>
        <span className="toy-card toy-card_year" >Год покупки: {toy.year}</span>
        <span className="toy-card toy-card_shape"> Форма игрушки: {toy.shape}</span>
        <span className="toy-card toy-card_color">Цвет игрушки: {toy.color}</span>
        <span className="toy-card toy-card_size">Размер игрушки: {toy.size}</span>
        <span className="toy-card toy-card_do-like">Любимая: </span>
      </div>
    );
  });
  
  return (
    <div className="toys">
      <div className="container-for-second-page">
        <div className="container-for-forms border"></div>
        <div className="container-for-toys-and-text border">
          <span className="container-for-toys-and-text__text-toys">
            Игрушки
            </span>
          <div className="flex-container-for-toy-cards">
          {toysComponets}
          <div className="flex-container-for-toy-cards__toy-card">
          
            </div>
          </div>
        </div>
      </div>
      <div className="footer__second-page"></div>
    </div>
  );
};

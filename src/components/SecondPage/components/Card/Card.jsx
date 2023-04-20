// ВЫНЕСТИ РАЗМЕТКУ КАРТОЧКИ
import { toys } from "../../constants";

export const Card = () => {
    const toysComponets = toys.map ( (toy, index) => {
        return (
            <div className="flex-container-for-toy-cards__toy-card">
        <span className="toy-card toy-card_name font font__neucha  font__neucha_18px">
          {toy.name}
        </span>
        <img src={toy.image} alt="" />

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
    } );

    return (
        <div className="container-for-toys-and-text">
          <span className="container-for-toys-and-text__text-toys font font__neucha  font__neucha_42px">
            Игрушки
          </span>
          <div className="flex-container-for-toy-cards">
            {toysComponets}
            <div className="flex-container-for-toy-cards__toy-card"></div>
          </div>
        </div>
    );
};
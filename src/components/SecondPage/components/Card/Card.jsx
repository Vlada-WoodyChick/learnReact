// ВЫНЕСТИ РАЗМЕТКУ КАРТОЧКИ
import { toys } from "../../constants";
import { Cards } from "./Cards";

export const Card = () => {
    const toysComponets = toys.map ( (toy, index) => {
        return (
            <Cards toy={toy}/>
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
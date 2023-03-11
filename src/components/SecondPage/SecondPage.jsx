/* npm run dev */
import "./style.css";
import { toys } from "./constants";

export const SecondPage = () => {
  const toysComponets = toys.map((toy, index) => {
    return (
      <div className="flex-container-for-toy-cards__toy-card">
        <span>{toy.name}</span>
        <img src="" alt="" />
        <span>{toy.count}</span>
        <span>{toy.year}</span>
        <span>{toy.shape}</span>
        <span>{toy.color}</span>
        <span>{toy.size}</span>
        <span></span>
      </div>
    );
  });
  return (
    <div className="toys">
      <div className="container-for-second-page">
        <div className="container-for-forms border"></div>
        <div className="container-for-toys-and-text border">
          <span className="container-for-toys-and-text__text-toys">Игрушки</span>
          <div className="flex-container-for-toy-cards">
            <div className="flex-container-for-toy-cards__toy-card">
              {toysComponets}
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

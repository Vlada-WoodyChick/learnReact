import "./style.css";
import FooterLogo from "./../../assets/rs_school_js 1.png";
import BallMain_1 from "./../../assets/ball_main_1.png";

import MainCoverPicture from "./../../assets/annie_spratt_unsplash.png";
/* npm run dev */
/* Границы будут одинаковые на всем main cover  странице класс borderMain
 */
export const StartPage = () => {
  return (
    <div className="wrapper">
      <img
        src={MainCoverPicture}
        alt="Еловые лапы"
        className="mainCoverPicture"
      />

      <div className="toys">
        <img src={BallMain_1} alt="Шар елочный" className="ballMain_1" />
        <img src={BallMain_1} alt="Шар елочный" className="ballMain_2" />
      </div>
      <div className="contanierGameTitle borderMain">
        <h1 className="contanierH1">
          <span className="textH1">Помогите бабушке нарядить елку </span>
        </h1>
      </div>

      <button className="startGameButton borderMain">
        <a href="SecondPage.jsx"><span className="startGameText">Начать</span></a>
        
      </button>
      <div className="footer">
        <div className="footer_autor_contanier">
          <span className="footer_autor_text">Vlada</span>
        </div>

        <div className="footer_logo_cont">
          <img src={FooterLogo} alt="Logo" className="footer_logo" />
        </div>
      </div>
    </div>
    /*{<div className="mainCover"></div>
      <div className="rectangle1272">
        <h1> <div className="gameName">
          <div className="words_11">Помогите бабушке</div>
          <div className="words_12">нарядить елку</div>
        </div>
        </h1>
      </div>

      <button className="rectangle1273">
        <div className="startGameText">Начать игру</div>
      </button>
      <div className="ballImage_1"></div>
      <div className="ballImage_2" ></div>

      <footer className="footerMenuMainCover"></footer> } */
  );
};
/*<button class="to-game reset">Начать игру</button>; */

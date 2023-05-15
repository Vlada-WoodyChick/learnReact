import "./style.css";
import FooterLogo from "./../../assets/rs_school_js 1.png";
import BallMain_1 from "./../../assets/ball_main_1.png";
import BallMain_2 from "./../../assets/ball_main_2.png";
import {BallsStartPage} from "./components/BallsStartPage";
//  import MainCoverPicture from "./../../assets/annie_spratt_unsplash.png";
import { Link } from "react-router-dom";
import { Button } from "../../shared/componets/Button/Button";
import { json } from "react-router-dom";

/* npm run dev */
/* Границы будут одинаковые на всем main cover  странице класс borderMain
 */
export const StartPage = () => {


  // const get

  return (
    <div className="wrapper">
     

      <div className="toys">
        <BallsStartPage ballSize={{BallMain_1}} ballProps="ballMain_1" />
        {/* <img src={BallMain_1} alt="Шар елочный" className="ballMain_1" />
        <img src={BallMain_1} alt="Шар елочный" className="ballMain_2" /> */}
      </div>
      <div className="contanierGameTitle borderMain">
        <h1 className="contanierH1">
          <span className="textH1 font font__neucha font font__neucha_53px">Помогите бабушке нарядить елку </span>
        </h1>
      </div>
        <Link to='/second'><Button title={'Начать'} btnClass="startGameButton borderMain" spanClass="startGameText font font__roboto font__roboto_24px "/> </Link>
        <Link to='/third'><Button title={'Страница 3'} btnClass="page-3 borderMain" spanClass="startGameText font font__roboto font__roboto_24px "/> </Link>
      
        {/* <Link to='/second'><button className="startGameButton borderMain"><span className="startGameText font font__roboto font__roboto_24px ">Начать</span></button></Link>      
              

              <button className="page-3 borderMain">
        <Link to='/third'><span className="startGameText font font__roboto font__roboto_24px">Страница 3</span></Link>      
        
      </button> */}


      <div className="footer">
        <div className="footer_autor_contanier">
          <span className="footer_autor_text font font__roboto font__roboto_12px">Vlada</span>
        </div>

        <div className="footer_logo_cont">
          <img src={FooterLogo} alt="Logo" className="footer_logo" />
        </div>
      </div>
    </div>
    
  );
};
/*<button class="to-game reset">Начать игру</button>; */

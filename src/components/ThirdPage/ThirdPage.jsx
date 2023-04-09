import "./style.css";
import Dinamic from "./../../assets/music-button-dinamic.png";
import SnowflakeButton from "./../../assets/button_noun_Snowflake_4336155 1.png";
import { Link } from "react-router-dom";

export const ThirdPage = () => {
  return (
    <div className="third-page">
      <div className="third-page__content ">
        <div className="option-box">
          <form action="#" className="container-for-forms">
            <div className="box--music-button--snowflake-button">
              <button className="music-button ">
                <img src={Dinamic} alt="" className="music-button__image" />
              </button>

              <button className="snowflake-button">
                <img
                  src={SnowflakeButton}
                  alt=""
                  className="snowflake-button__image"
                />
              </button>
            </div>

            <div className=" checkbox-tree-option">
              <span className="text-content text-content__Neucha-font text-content__Neucha-font_20">
                Выберите Ёлку
              </span>

              <div className="checkbox-tree-option__box">
                <input
                  type="checkbox"
                  name="checkbox-tree-option-1"
                  value=""
                  className="checkbox-tree-option__button"
                />

                <input
                  type="checkbox"
                  name="checkbox-tree-option-2"
                  value=""
                  className="checkbox-tree-option__button"
                />

                <input
                  type="checkbox"
                  name="checkbox-tree-option-3"
                  value=""
                  className="checkbox-tree-option__button"
                />

                <input
                  type="checkbox"
                  name="checkbox-tree-option-4"
                  value=""
                  className="checkbox-tree-option__button"
                />
              </div>
            </div>

            <div className="backgroun-box">
              <span className="text-content text-content__Neucha-font text-content__Neucha-font_20">
                Выберите фон
              </span>

              <div className="backgroun-box__block">
                <div className="backgroun-box__item"></div>
                <div className="backgroun-box__item"></div>
                <div className="backgroun-box__item"></div>
                <div className="backgroun-box__item"></div>
                <div className="backgroun-box__item"></div>
                <div className="backgroun-box__item"></div>
                <div className="backgroun-box__item"></div>
                <div className="backgroun-box__item"></div>
              </div>
            </div>

            <div className="garland-option-box">
              <span className="text-content text-content__Neucha-font text-content__Neucha-font_20">
                Гирлянда
              </span>
              <div className="garland-option-box__item-box">
                <div className="garland-option-box__item"></div>
                <div className="garland-option-box__item"></div>
                <div className="garland-option-box__item"></div>
              </div>
            </div>

            <div className="button  reset-button">
              <button className="reset-button__filter-button">
                Сбросить фильтры
              </button>
              <button className="reset-button__settings-button">
                Сбросить настройки
              </button>
              <Link to='/start'><button className="reset-button__filter-button">
                Страница 1
              </button></Link>
              <Link to='/second'>  <button className="reset-button__settings-button">
              Страница 2
              </button></Link>
            
            </div>
          </form>
        </div>

        <div className="nice-background-box"></div>

        <div className="result-box"></div>
      </div>

      {/* <div className="footer footer__third-page-footer"></div> */}
    </div>
  );
};

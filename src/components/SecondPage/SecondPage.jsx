/* npm run dev */
import "./style.css";
import { toys } from "./constants";
import Dinamic from "./../../assets/music-button-dinamic.png";

import SnowflakeButton from "./../../assets/button_noun_Snowflake_4336155 1.png";
import Loupe from "./../../assets/loupe.png";
import Arrow from "./../../assets/arrow.png";
import Bell from "./../../assets/bell.png";
import Ball from "./../../assets/ball.png";
import Pine from "./../../assets/pine.png";
import Star from "./../../assets/star.png";
import Snowflake from "./../../assets/snowflake.png";
import BirdToy from "./../../assets/bird_toy.png";

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
        <form action="#" className="container-for-forms">
          <div className="filter-box">
            <button className="music-button music-button_secon-page">
              <img src={Dinamic} alt="" className="music-button_dinamic" />
            </button>

            <img src={SnowflakeButton} alt="" className="snowflake-container" />

            <div className="search-box">
              <input
                type="text"
                name="toyName"
                value=""
                placeholder="Поиск"
                className="input-text_toy-search "
              />

              <img src={Loupe} alt="" className="search-box_loupe " />
            </div>
          </div>
          <div className="button sort-block">
            <span className="sort-block_text">Сортировать</span>
            <div>
              <button className="sort-block_dropdown-button">
                <img
                  src={Arrow}
                  alt=""
                  className="sort-block_dropdown-button-arrow"
                />
              </button>
              <div>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
              </div>
            </div>
          </div>

          <div className="class-all-box">
            <span className="class-all-box_text">Категории</span>

            <label htmlFor="class-all">
              <input
                type="checkbox"
                id="class-all"
                className="class-all-box_checkbox-button"
              />
              <span className="class-all-box_checkbox-text">Все</span>
            </label>
          </div>

          <div className="toys-form-choise-box">
            <span className="toys-form-choise-box__form-text">Форма</span>

            <div className="toys-form-choise-box__toys-form-box">
              <div className="toys-form-choise-box__toys-form">
                <img
                  src={Bell}
                  className="toys-form-choise-box__toys-form_any-toy 
                toys-form-choise-box__toys-form_bell"
                  alt=""
                />
                <span className="toys-form-choise-box__toys-form-text_bell">
                  Колокол
                </span>
              </div>

              <div className="toys-form-choise-box__toys-form">
                <img
                  className="toys-form-choise-box__toys-form_any-toy 
                toys-form-choise-box__toys-form_ball"
                  src={Ball}
                  alt=""
                />
                <span className="toys-form-choise-box__toys-form-text">
                  Шар
                </span>
              </div>

              <div className="toys-form-choise-box__toys-form">
                <img
                  src={Pine}
                  className="toys-form-choise-box__toys-form_any-toy 
                toys-form-choise-box__toys-form_pine"
                  alt=""
                />
                <span>Шишка</span>
              </div>

              <div className="toys-form-choise-box__toys-form">
                <img
                  src={Star}
                  className="toys-form-choise-box__toys-form_any-toy 
                toys-form-choise-box__toys-form_star"
                  alt=""
                />
                <span>Звезда</span>
              </div>

              <div className="toys-form-choise-box__toys-form">
                <img
                  src={Snowflake}
                  className="toys-form-choise-box__toys-form_any-toy 
                toys-form-choise-box__toys-form_snowflake"
                  alt=""
                />
                <span>Снежинка</span>
              </div>

              <div className="toys-form-choise-box__toys-form">
                <img
                  src={BirdToy}
                  className="toys-form-choise-box__toys-form_any-toy 
                toys-form-choise-box__toys-form_bird-toy"
                  alt=""
                />
                <span>Фигурка</span>
              </div>
              {/* <div>
                <img src="" alt="" />
                <span></span>
              </div> */}
            </div>
          </div>

          <div className="input-range">
            <span className="input__toy-number-text">
              Количество экземпляров
            </span>
            <input type="range" className="input__toy-number-range" />
            <div className="input__toy-number-range">
              <span className="input__toy-number-range_n input__toy-number-range_1">
                1
              </span>
              <span className="input__toy-number-range_n input__toy-number-range_12">
                12
              </span>
            </div>
          </div>

          <div className="input-range">
            <span className="input__year-of-production-text">
              Год приобретения
            </span>
            <input type="range" className=" input__year-of-production-range" />
            <div className="input__year-of-production">
              <span className="input__year-of-production_n input__year-of-production_1940">
                1940
              </span>
              <span className="input__year-of-production_n input__year-of-production_2021">
                2021
              </span>
            </div>
          </div>

          <div className="color-checkbox-block">
            <span>Цвет</span>
            <div className="color-checkbox-block__box">
              <input
                type="checkbox"
                name="color"
                value="white"
                className="color-checkbox-block__box_white"
              />

              <input
                type="checkbox"
                name="color"
                value="yellow"
                className="color-checkbox-block__box_yellow"
              />

              <input
                type="checkbox"
                name="color"
                value="red"
                className="color-checkbox-block__box_red"
              />

              <input
                type="checkbox"
                name="color"
                value="blue"
                className="color-checkbox-block__box_blue"
              />

              <input
                type="checkbox"
                name="color"
                value="green"
                className="color-checkbox-block__box_green"
              />
            </div>
          </div>

          <div className="input-size">
            <span className="input-size__text">Размер</span>
            <div className="input-size__box">
              <label>
                <input
                  type="checkbox"
                  name="size"
                  value="large"
                  className="input-size__button input-size__button_large "
                />
                {"Большой"}
              </label>
              <label>
               
                <input
                  type="checkbox"
                  name="size"
                  value="middle"
                  className="input-size__button input-size__button_middle "
                />
                 {"Средний"}
                
              </label>
              <label>
               
                <input
                  type="checkbox"
                  name="size"
                  value="small"
                  className="input-size__button input-size__button_small "
                />
                 {"Маленький "}
              </label>
            </div>
          </div>


<div className="input input-checkbox input-checkbox-only-favorite-ones">
  <label className="input-checkbox-only-favorite-ones_label">
    <input type="checkbox"/>
    Только любимые
  </label>
</div>


<div className="button  reset-button">
  <button className="reset-button__filter-button">Сбросить фильтры</button>
  <button className="reset-button__settings-button">Сбросить настройки</button>
  </div>



        </form>

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

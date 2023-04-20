import "./style.css";
import Dinamic from "./../../../../assets/music-button-dinamic.png";
import SnowflakeButton from "./../../../../assets/button_noun_Snowflake_4336155 1.png";
import Loupe from "./../../../../assets/loupe.png";
import Arrow from "./../../../../assets/arrow.png";
import Bell from "./../../../../assets/bell.png";
import Ball from "./../../../../assets/ball.png";
import Pine from "./../../../../assets/pine.png";
import Star from "./../../../../assets/star.png";
import Snowflake from "./../../../../assets/snowflake.png";
import BirdToy from "./../../../../assets/bird_toy.png";
import { Link } from "react-router-dom";
import {NavigateButtons} from "./../NavigateButtons/NavigateButtons"
import { Button } from "../../../../shared/componets/Button/Button";


export const Filter = () => {
    return ( 
        <form action="#" className="box box__form-box
        font font__text font__text_white">
        <div className=" 
        box box__form-box box__search-box-block box__row-box">
          <span className="">
            <img src={Dinamic} alt="" className="music-button_dinamic" />
          </span>

          <img src={SnowflakeButton} alt="" className="snowflake-container" />

          <div className="input  input__search-box border border__radius_30">
            <input
              type="text"
              name="toyName"
              value=""
              placeholder="Поиск"
              className="input-text_toy-search font font__roboto font__16px"
            />

            <img src={Loupe} alt="" className="search-box_loupe " />
          </div>
        </div>
        <div className="button sort-block">
          <span className="sort-block_text font font__neucha  font__neucha_20px">Сортировать</span>
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
          <span 
          className="font font__neucha  font__neucha_20px">
            Категории
            </span>

          <label htmlFor="class-all">
            <input
              type="checkbox"
              id="class-all"
              className="class-all-box_checkbox-button"
            />
            <span className="class-all-box_checkbox-text font font__roboto font__roboto_12px">Все</span>
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
              <span 
              className="toys-form-choise-box__toys-form-text_bell font font__roboto font__roboto_12px">
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
              <span 
              className="toys-form-choise-box__toys-form-text font font__roboto font__roboto_12px">
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
              <span
              className="font font__roboto font__roboto_12px">
                Шишка
                </span>
            </div>

            <div className="toys-form-choise-box__toys-form">
              <img
                src={Star}
                className="toys-form-choise-box__toys-form_any-toy 
              toys-form-choise-box__toys-form_star"
                alt=""
              />
              <span
              className="font font__roboto font__roboto_12px">
              Звезда
              </span>
            </div>

            <div className="toys-form-choise-box__toys-form">
              <img
                src={Snowflake}
                className="toys-form-choise-box__toys-form_any-toy 
              toys-form-choise-box__toys-form_snowflake"
                alt=""
              />
              <span
              className="font font__roboto font__roboto_12px">
                Снежинка
              </span>
            </div>

            <div className="toys-form-choise-box__toys-form">
              <img
                src={BirdToy}
                className="toys-form-choise-box__toys-form_any-toy 
              toys-form-choise-box__toys-form_bird-toy"
                alt=""
              />
              <span
              className="font font__roboto font__roboto_12px">
              Фигурка
              </span>
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
  <Button title={"Сбросить фильтры"}
          btnClass="reset-button__settings-button"
          spanClass="reset-button__settings-button"/>
          <Button title={"Сбросить настройки"}
          btnClass="reset-button__settings-button"
          spanClass="reset-button__settings-button"/>


<NavigateButtons/>
{/* <Link to='/start'><button className="reset-button__filter-button">Страница 1</button></Link>
<Link to='/third'><button className="reset-button__settings-button">Страница 3</button></Link> */}
</div>



      </form>
    )
}
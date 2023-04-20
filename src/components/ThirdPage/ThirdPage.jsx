import "./style.css";
import Dinamic from "./../../assets/music-button-dinamic.png";
import SnowflakeButton from "./../../assets/button_noun_Snowflake_4336155 1.png";
import { Link } from "react-router-dom";
import {LargeView} from "./components/LargeView/LargeView"
import { Button } from "../../shared/componets/Button/Button";

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
                <LargeView viewSize="tree-option-box tree-option-box__element tree-option-box__element_large border"/> 
                <LargeView viewSize="tree-option-box tree-option-box__element tree-option-box__element_large border"/> 
                <LargeView viewSize="tree-option-box tree-option-box__element tree-option-box__element_large border"/> 
                <LargeView viewSize="tree-option-box tree-option-box__element tree-option-box__element_large border"/>   

               
              </div>
            </div>

            <div className="backgroun-box">
              <span className="text-content text-content__Neucha-font text-content__Neucha-font_20">
                Выберите фон
              </span>

              <div className="backgroun-box__block">
              <LargeView viewSize="backgroun-box__item tree-option-box__element border"/> 
              <LargeView viewSize="backgroun-box__item tree-option-box__element border"/> 
              <LargeView viewSize="backgroun-box__item tree-option-box__element border"/> 
              <LargeView viewSize="backgroun-box__item tree-option-box__element border"/> 
              <LargeView viewSize="backgroun-box__item tree-option-box__element border"/> 
              <LargeView viewSize="backgroun-box__item tree-option-box__element border"/> 


                
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
<Button title={'Сбросить фильтры'}  btnClass="reset-button__filter-button"/>
<Button title={'Сбросить настройки'}  btnClass="reset-button__filter-button"/>
<Link to='/start'><Button title={'Страница 1'} btnClass="reset-button__filter-button"/> </Link>
<Link to='/second'><Button title={'Страница 2'} btnClass="reset-button__filter-button"/> </Link>
              {/* <button className="reset-button__filter-button">
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
              </button></Link> */}
              <Button title={'loren'}/>
            
            </div>
          </form>
        </div>



        <div className="nice-background-box"></div>




        <div className="result-box">

          <div className="text-content text-content__Neucha-font text-content__Neucha-font_20">Игрушки</div>

          <div className="result-box__toys-box ">
            <LargeView viewSize="backgroun-box__item tree-option-box__element border"/>
            <LargeView viewSize="backgroun-box__item tree-option-box__element border"/>
            <LargeView viewSize="backgroun-box__item tree-option-box__element border"/>
            <LargeView viewSize="backgroun-box__item tree-option-box__element border"/>
            <LargeView viewSize="backgroun-box__item tree-option-box__element border"/>
            <LargeView viewSize="backgroun-box__item tree-option-box__element border"/>
            <LargeView viewSize="backgroun-box__item tree-option-box__element border"/>
            <LargeView viewSize="backgroun-box__item tree-option-box__element border"/>
            <LargeView viewSize="backgroun-box__item tree-option-box__element border"/>
            <LargeView viewSize="backgroun-box__item tree-option-box__element border"/>          
          </div>

          <div className="result-box__tree-box" >
            <div className="text-content text-content__Neucha-font text-content__Neucha-font_20">Вы нарядили</div>
<div className="result-box__tree-box">
<LargeView viewSize="tree-option-box__element result-box__tree-box result-box__tree-box-item  tree-option-box__element_large border"/>
<LargeView viewSize="tree-option-box__element result-box__tree-box result-box__tree-box-item  tree-option-box__element_large border"/>
<LargeView viewSize="tree-option-box__element result-box__tree-box result-box__tree-box-item  tree-option-box__element_large border"/>
<LargeView viewSize="tree-option-box__element result-box__tree-box result-box__tree-box-item  tree-option-box__element_large border"/>
<LargeView viewSize="tree-option-box__element result-box__tree-box result-box__tree-box-item  tree-option-box__element_large border"/>
<LargeView viewSize="tree-option-box__element result-box__tree-box result-box__tree-box-item  tree-option-box__element_large border"/>
<LargeView viewSize="tree-option-box__element result-box__tree-box result-box__tree-box-item  tree-option-box__element_large border"/>
<LargeView viewSize="tree-option-box__element result-box__tree-box result-box__tree-box-item  tree-option-box__element_large border"/>
</div>

          </div>


        </div>
      </div>

      {/* <div className="footer footer__third-page-footer"></div> */}
    </div>
  );
};

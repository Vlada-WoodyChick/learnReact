import "./style.css";
/* npm run dev */
/* Границы будут одинаковые на всем main cover  странице класс borderMain
 */
export const StartPage = () => {
  return (
    <body>
      <div className="mainCover"></div>
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

      <footer className="footerMenuMainCover"></footer>
    </body>
  );
};
/*<button class="to-game reset">Начать игру</button>; */

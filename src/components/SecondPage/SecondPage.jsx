/* npm run dev */
import "./style.css";
import { Filter } from "./components/Filter/Filter";
import { Card } from "./components/Card/Card";

export const SecondPage = () => {
  

  return (
    <div className="toys">
      <div className="container-for-second-page">
        <Filter />
        <Card/>
        
      </div>
      <div className="footer__second-page"></div>
    </div>
  );
};

/* npm run dev */
import "./style.css";
import { Filter } from "./components/Filter/Filter";
import { Card } from "./components/Card/Card";

export const SecondPage = () => {
 const getToDo = () => {
  const responce = fetch ('https://jsonplaceholder.typicode.com/todos/1').then((data) =>
   {
    console.log(data)
    return data.json();
  }).then( (json) =>  {console.log(json) } )
  console.log (responce);

 }
 getToDo();
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

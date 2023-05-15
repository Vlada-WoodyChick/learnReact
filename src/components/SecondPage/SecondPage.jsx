/* npm run dev */
import "./style.css";
import { Filter } from "./components/Filter/Filter";
import { Card } from "./components/Card/Card";
import { json } from "react-router-dom";

export const SecondPage = () => {
//  const getToDo = () => {
//   const responce = fetch ('https://jsonplaceholder.typicode.com/todos/1').then((data) =>
//    {
//     console.log(data)
//     return data.json();
//   }).then( (json) =>  {console.log(json) } )
//   console.log (responce);

//  }
//  getToDo();

// const getPost = () => {
//   let result = {};
//   fetch('https://jsonplaceholder.typicode.com/posts/100').then( (data) =>{
//     console.log(data);
//     return(data).json();
//   } ).then( (data1) => 
//   {result = data1
//   console.log(result);
//   });
//   //console.log (responce);
//   console.log(result);
// }
// getPost();

// const  getPhotos = async function(n) {
//   let pesponse = await fetch(`https://jsonplaceholder.typicode.com/photos/${n}`) 
//   /*await*/ pesponse.json

// }
// getPhotos(800);

const getPostNThen =   function (n) {
    let result = {};
    fetch (`https://jsonplaceholder.typicode.com/posts/${n}`).then( (data1) => (data1).json() ).then((data1) =>{
      result = data1;
      console.log(result);

    } )

}

getPostNThen(n);




  





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

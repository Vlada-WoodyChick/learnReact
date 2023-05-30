/* npm run dev */
import "./style.css";
import { Filter } from "./components/Filter/Filter";
import { Card } from "./components/Card/Card";
import { json } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

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

// const getPostThen =(n) => {
//   let answer = {};
//   const fetchN = fetch(`https://jsonplaceholder.typicode.com/posts/${n}`).then( (data) =>
//   {    //console.log(data );
//     return data.json;
//   }). 
//   then( (json) => { 
//     answer =  json.json(); 
//     console.log(answer);    
//   return answer; 

//   })
//   //console.log(answer); 
//   //console.log(fetchN);
//   }

//   getPostThen(5);


//  const getPostAwait = async function(n) {
// const response = await fetch(`https://jsonplaceholder.typicode.com/users/${n}`);
// const answer = await response.json();

//  }

//  getPostAwait(3);
  
// const fooAxios = async (n) => {
//   const response = await axios.get (`https://jsonplaceholder.typicode.com/users/${n}`);
//   console.log(response.data);
// }
// fooAxios(5);




const fooAxios = async (n) => {
  if(n < 0 && n> 10) return;
  try{const response = await axios.get (`https://jsonplaceholder.typicode.com/users/${n}`);
  console.log(response.data)}
catch(error) {console.log(error)}; 
  

}


useEffect( () => {
  fooAxios(15);
 return () =>{
console.log('Dddd');
 }
}, [])









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

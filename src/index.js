import { getBlogPosts } from "./data";

import "./style.css";
import HaiImage from "./assets/img/hai.jpg";
import './test/date/printDate'


const blogs=getBlogPosts();
const ul=document.createElement('ul');
blogs.forEach(blog=>{
    const li=document.createElement('li');
    li.innerHTML=blog;
    ul.appendChild(li);
});
document.body.appendChild(ul);

const img=document.createElement('img');
img.src=HaiImage;
document.body.prepend(img);

const h1=document.createElement('h1');
h1.innerHTML='hello world';
document.body.prepend(h1);
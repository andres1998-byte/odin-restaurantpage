(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("img");n.src="../images/images.jpeg",n.classList.add("image"),t.appendChild(n);const l=document.createElement("h1");l.textContent="Welcome to our restaurant!",l.classList.add("headline"),t.appendChild(l);const i=document.createElement("p");i.textContent="We serve the best food. Hope you enjoy it!",i.classList.add("paragraph"),t.appendChild(i),e.appendChild(t)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}(()=>{const n=document.querySelector("#content"),l=document.createElement("button");l.classList.add("button"),l.textContent="Home";const i=document.createElement("button");i.classList.add("button"),i.textContent="Menu";const a=document.createElement("button");a.classList.add("button"),a.textContent="Contact",n.appendChild(l),n.appendChild(i),n.appendChild(a),l.addEventListener("click",(function(){t(),e()})),a.addEventListener("click",(function(){t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("form");n.setAttribute("id","form1"),n.innerHTML='\n    <label for="name">Full name: </label>\n    <input type="text" id="name" placeholder="Andres Villarreal">\n\n    <label for="address">Address: </label>\n    <input type="text" id="address" placeholder="Write address here...">\n\n    <label for="email">E-mail: </label>\n    <input type="text" id="email" placeholder="amvillarreal98@gmail.com">\n\n    <button type="submit" id="submitbutton">Submit</button>\n    ',t.appendChild(n),e.appendChild(t)})()})),i.addEventListener("click",(function(){t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("div");n.classList.add("appetizers"),n.innerHTML+="\n    <h3>Appetizers</h3>\n<ul>\n    <li>Spicy Lobster</li>\n    <li>Baked Escargot</li>\n    <li>Seared Ahi Tuna</li>\n    <li>Clam Chowder</li>\n    <li>Oysters</li>\n</ul>",t.appendChild(n);const l=document.createElement("div");l.classList.add("dishes"),l.innerHTML+="\n    <h3>Main Dishes</h3>\n<ul>\n    <li>Whole Lobster</li>\n    <li>Maryland Crab Cake</li>\n    <li>Fisherman's Platter</li>\n    <li>Maine Lobster</li>\n    <li>Stuffed Lobster</li>\n</ul>",t.appendChild(l);const i=document.createElement("div");i.classList.add("beverages"),i.innerHTML+="\n    <h3>Beverages:</h3>\n<ul>\n    <li>Coke</li>\n    <li>Diet Coke</li>\n    <li>Beer</li>\n    <li>Tea</li>\n    <li>Water</li>\n</ul>",t.appendChild(i),e.appendChild(t)})()}))})(),e()})();
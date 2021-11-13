fetch('https://fakestoreapi.com/products') //
.then((data)=>{
    //console.log(data);
    return data.json();    
}).then((completedata)=>{
    //console.log(completeddata);
   let data1="";
   completedata.map((values)=>{
       data1+=` <div class="card">
       <h1 class="title">${values.title}</h1>
       <img src=${values.image} alt="img" width="80%">
       <p>${values.description}</p>
       <p class=category">${values.Category}</p>
       <p class="price">${values.price}</p>
   </div> `;
   })
   document.getElementById("cards").innerHTML=data1
}).catch((err)=>{
    console.log(err);
})
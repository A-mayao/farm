const express = require('express');
const { json } = require('body-parser');
const qs = require('qs');
const axios = require('axios');
const myform = document.getElementById("my-form");
const resultArea = document.getElementById("result-area");
const loadingElement = document.getElementById("loading-element");
let loading = false;
exports.formprocess = async(req, res) =>
{ 
myform.addEventListener('submit', async function (event) {
 
   console.log(req.body);



   const data = {
    
    N:req.body.N,
    P:req.body.P,
    K:req.body.K,
    temperature:req.body.temperature,
    humidity:req.body.humidity,
    ph: req.body.ph,
    rainfall:req.body.rainfall,


}

console.log(data);
 const obj = await axios.post("https://mod1.onrender.com/label" ,JSON.stringify(data),
 {
    headers: {
    'Content-Type': 'application/json'
    }
})
// ).then(res => {
//     return res.data
// })
.then(()=>{
  console.log("hii")
  console.log(obj)
  showResult(obj);
}).catch(()=>{
  console.log("error")
})





});
function showResult(result) {
    resultArea.classList.remove("hidden-element");
    resultArea.classList.add("shown-element");
    resultArea.innerHTML = `<h5>Crop: </h5><h2>${result}</h2>`;
    loading = false;
    loadingControl();
    autoScroll();
}
function loadingControl() {

    if (loading) {
      loadingElement.classList.remove("hidden-element");
      loadingElement.classList.add("shown-element");
    } else {
      loadingElement.classList.remove("shown-element");
      loadingElement.classList.add("hidden-element");
    }
    autoScroll();
  }
  function autoScroll() {
    const heightPage = document.body.scrollHeight;
    window.scrollTo(0, heightPage);
  }
}
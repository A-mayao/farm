const { json } = require('body-parser');
const express = require('express');
const qs = require('qs');
const axios = require('axios');

// module to handle get request on localhost:3000 and load the registration form
exports.home = (req, res) =>
{  
    res.sendFile('public/sidebar/sidebar.html', { root: '.' })
} 
exports.mod1 = (req, res) =>
{  
    res.sendFile('public/model 1/model1.html', { root: '.' })
} 
exports.model2 = (req, res) =>
{  
    res.sendFile('public/model 2/model2.html', { root: '.' })
} 

exports.model3 = (req, res) =>
{  
    res.sendFile('public/try/try.html', { root: '.' })
} 




// module to handle post request on localhost:3000 when user submits the registration form
// form data is captured and sent back as a response



// const myform = document.getElementById("my-form");
// const resultArea = document.getElementById("result-area");
// const loadingElement = document.getElementById("loading-element");
let loading = false;
exports.formprocess = async(req, res) =>
{ 
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
}
).then(res => {
  // console.log({la})
      return res.data
  })
showResult(obj)

function showResult(result) {
    resultArea.classList.remove("hidden-element");
    myform.classList.add("my-form");
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
const url = "https://mod1.onrender.com/label";

// user choices
const vehicle = {
  N: '',
  P: '',
  K: '',
  temperature: '',
  humidity: '',
  ph: '',
  rainfall: ''

};
const myform = document.getElementById("my-form");
const resultArea = document.getElementById("result-area");
const loadingElement = document.getElementById("loading-element");
let loading = false;

myform.addEventListener('submit', async function (event) {
    event.preventDefault();
    loading = true;
    loadingControl();
    const result = await fetch(`${url}/${vehicle.type}/marcas/${vehicle.brand}/modelos/${vehicle.model}/anos/${vehicle.year}`)
      .then(data => data.json());
    showResult(result);
  });
  
  function showResult(result) {
    resultArea.classList.remove("hidden-element");
    resultArea.classList.add("shown-element");
    myform.classList.add("my-form");
    resultArea.innerHTML = result;
    loading = false;
    loadingControl();
    autoScroll();
  }
  
  // autoscroll and loading control
  function autoScroll() {
    const heightPage = document.body.scrollHeight;
    window.scrollTo(0, heightPage);
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
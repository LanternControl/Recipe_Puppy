//let resultsArray = [];
//
//function searchSubmit(){
//  let usersearch = document.getElementById("textinput").value;
//  fetch("http://recipepuppyproxy.herokuapp.com/api/?q=" + usersearch)
//    .then(
//      function(response) {
//        if (response.status !== 200) {
//          console.log(response.status);
//          return;
//        }
//      
//        response.json().then(function(data) {
//          let resultsArray = data.results;
//            makeDisplay(resultsArray);
//          
//          })
//          function makeDisplay(wrap){
//          for (let i = 0; i < resultsArray.length; i++){
//              wrap = document.getElementById('wrapper');
//              let wrap = `
//                <div id=box${i} class="box">
//                    <h3><a href="${resultsArray[i].href}"> ${resultsArray[i].title}</a></h3>
//                    <img src="${resultsArray[i].thumbnail}">
//                    </div>
//                    `
//      wrap.innerHTML += wrap;
//console.log(resultsArray);
//          }
//              
//        };
//      })
//}

//Just started over. Got so fed up with this shit.


searchSubmit.addEventListener("click", call);


function call(){
  let search = document.getElementById('searchBox').value;
  pull(search);
}

function pull (textInput) {
  let url="http://recipepuppyproxy.herokuapp.com/api/?i=" + textInput;
  fetch(url)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
    response.json().then(function(data) {
      resultsArray=data.results;
      makeContainer(resultsArray);
    });
  })
  
  function makeContainer(resultsArray){
    for (i=0; i < resultsArray.length; i++){
      wrap = document.getElementById('wrapper');
      let container = `
      <div>
      <h3><a href="${resultsArray[i].href}"> ${resultsArray[i].title}</a></h3>
      <img src="${resultsArray[i].thumbnail}">
      </div>
      `
      wrap.innerHTML += container;
    }
  }
} 

      
   
   
    

        
        
        
        
        
        
 
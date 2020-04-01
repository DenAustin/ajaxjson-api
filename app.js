//Add event listener for Get Jokes click
document.querySelector(".fetch-jokes").addEventListener("click", fetchJokes);


function fetchJokes(e){
  // const number = document.querySelector("#number").value
  //The above can be written wiht data type specified
  const number = document.querySelector("input[type='number']").value
  console.log(number)
  //Prepare the Ajax/xhr request
  const xhr = new XMLHttpRequest();

  //In xhr.open we use the url instead of a local file
  xhr.open("GET",`http://api.icndb.com/jokes/random/${number}`, true);
  //${} is so that the number of jokes is not cold-coded

  //funtion for what we want to do with the API
  xhr.onload = function(){
    if(this.status ===200){
      //wrap response in JSON
      const response = JSON.parse(this.responseText);
      console.log(response);
      //Create an empty variable to relay reponse to DOM 
      let output = "";
      //Set condition for populating the variable
      if(response.type === "success"){
        response.value.forEach(function(joke){
          //We want the joke from the joke object
          output += `<li>${joke.joke}</li>`
        });
      }else{
      output += "<li>Oops! Something just went wrong</li>"
    };
    //Append output HTML to DOM 
    document.querySelector(".jokes").innerHTML = output
  }
  }

  xhr.send();

  e.preventDefault()
}

//onload forEach with arrow function
// if(response.type === "success"){
//   response.value.forEach((joke)=>{
//     output += `<li>${joke.joke}</li>`
//   })
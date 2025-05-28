const apiKey="34183b4d";

const input=document.getElementById('searchbtn');
const searchbtn=document.getElementById('searchIcon');
const movieContainer=document.getElementById('movieContainer');
const statusText = document.getElementById('statusText');
const spinner = document.getElementById('spinner');
const errorIcon = document.querySelector('.error-icon');
const statusContainer=document.querySelector('.status-container');

searchbtn.addEventListener('click',function(){
    const movieName=input.value.trim();
console.log(movieName);

    if (movieName===""){
        alert("Please enter any movie name");
        return
    }
    // document.querySelector.remove=".loading"
    displayMovie(movieName);
})




async function displayMovie(movieName){
 try{
    movieContainer.innerHTML=""
    spinner.style.display="block"
    statusContainer.classList.add("loading")
    statusText.textContent = "Loading...";
   const response = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`);


    const data=await response.json();
    if  (data.Response==="False"){
        statusContainer.classList.remove("loading")
        statusContainer.classList.add(error)
        statusText.textContent="Movie Not found"
    }
    //  document.getElementById("StutsText").textContent=""

 const movies=data.Search;//yaha pr jo api response aya usme bahut sare movie aye hiinge to serch ek arry hai jo apne ander ke sbhi array ko de rha
  spinner.style.display="none"
    statusText.textContent = "";
     for(let i=0; i<movies.length; i++){
        movieContainer.innerHTML+=`<div class="movieCard">
                <img id="poster" src=${movies[i].Poster} alt="Movie Poster" />
                <div class="des">
                    <h3 id="movieName">Movie Name: <span class="title">${movies[i].Title}</span></h3>
                    <p class="releaseDate">Released: <span id="release">${movies[i].Year}</span></p>
                </div>
            </div>`
    }

 }catch(error){
console.log(error);
statusContainer.classList.add("error");
spinner.style.display="none"
errorIcon.style.display="block"
statusText.textContent = "Something went wrong. Try again.";

 }
}
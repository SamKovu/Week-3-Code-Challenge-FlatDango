// Your code here

//Global Variables used in different functions
let availableTickets= 0; 
let selected;
 
//This function only retrives the first movie in the list to display on the doc.
function retrieveFirstMovie(){             

    fetch(" http://localhost:3000/films/1")
    .then(resp => resp.json())
    .then(data => displayMovie(data))
}

//This dunction retrives movie list and displays it on the document.
function retrieveMovieList(){

    fetch(" http://localhost:3000/films")
    .then(resp => resp.json())
    .then(data => displayList(data))
}



function displayMovie(movie){        //Passes text and image link to elements in the html programatically
    availableTickets= movie.capacity-movie.tickets_sold;
    document.querySelector("#poster").src=movie.poster;
    document.querySelector("#title").innerText=movie.title;
    document.querySelector("#runtime").innerText=movie.runtime;
    document.querySelector("#showtime").innerText=movie.showtime;
    document.querySelector("#film-info").innerText=movie.description;
    document.querySelector('#ticket-num').innerText=availableTickets;
}

function displayList(movieList){         //Dispays list of movies with attached event listener
    document.querySelector("#films li").remove();

    movieList.forEach((movie)=>{
        let newList=document.createElement("li");
        newList.innerText=movie.title;
        newList.className="film item";
   //Adds event listener to node object before appending. This event listener allows us to switch movies and calls dispayMovie. 
         newList.addEventListener('click',()=>{         
            console.log("click");
            selected=newList.innerText;
            displayMovie(movie);
        })
        document.querySelector("#films").appendChild(newList);

    })
    
}


//enables usage of the buyTicket button.
function buyTicket(){  
  button=document.querySelector("#buy-ticket");
  button.addEventListener('click',()=>{
    if(availableTickets>0){
    availableTickets-=1
    document.querySelector('#ticket-num').innerText=availableTickets;}
    else(alert("No more tickets!"))
});
  
}



retrieveFirstMovie();
retrieveMovieList();
buyTicket();







const movieForm= document.getElementById("movieForm");



// http://www.omdbapi.com/?t=Game of Thrones&Season=1&Episode=1
movieForm.addEventListener('submit', event=> {
    event.preventDefault();

    const movieName=document.getElementById("movie").value;
    const apikey=` http://www.omdbapi.com/?s=${movieName}&apikey=cf987b8e`

    fetch(apikey).then(
    response => response.json()
).then(data=>  {
    console.log(data.Search);
    const para= document.getElementById("error")
    if(data.Search === undefined) {
        para.textContent="Not available";
        para.style.display="flex";

        
    }
    else{

        data.Search.forEach(search=> {
            para.style.display="none";
            
           console.log( search.Title);
           let decCard= document.getElementById("dec-of-cards");
        let MovieDiv = document.createElement('div');
        MovieDiv.id="card"
       

           let movieInfo= `
            
                <p class="year">${search.Year}</p>
                <img src="${search.Poster}" alt="movie" id="img">
                <p class="title">
                    ${search.Title}
                </p>
                <p class="description">
                    ${search.Type}
                </p>
           
           `

        MovieDiv.innerHTML= movieInfo;
        decCard.appendChild(MovieDiv)
        })
    }
})
.catch(error=> console.error(error));


});


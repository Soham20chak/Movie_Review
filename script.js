const API_KEY = 'api_key=a22660cc1d884fd967730b95a4aea6cf';
const MAIN_URL= 'https://api.themoviedb.org/3';
const API_POP= MAIN_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL='https://image.tmdb.org/t/p/w500';
const search_URL = MAIN_URL+'/search/movie?'+API_KEY;



const main= document.getElementById('main');
const form= document.getElementById('form');
const Search= document.getElementById('Search');

getMovies(API_POP);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML='';
    data.forEach(movie => {
        const {title,poster_path,vote_average}=movie;
        const movie_el=document.createElement('div');
        movie_el.classList.add('movie');
        movie_el.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${title}>
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${get_color(vote_average)}">${vote_average}</span>
        </div>
        
        `
        main.appendChild(movie_el);
    })
}

function get_color(vote){
    if(vote>=8){
        return 'green'
    }
    else if(vote>=5){
        return 'orange'
    }
    else{  
        return 'red'
    }
}

form.addEventListener('submit',(e) =>{
    e.preventDefault();

    const searchterm=Search.value;
    if(searchterm){
        getMovies(search_URL+'&query='+searchterm)
    }

})
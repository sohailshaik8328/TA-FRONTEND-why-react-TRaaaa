let input = document.querySelector('#input');
let ul = document.querySelector('.ul');

let allMovies = [];

function handleInput(event) {
    if(event.keyCode === 13) {
        allMovies.push({
            name : event.target.value,
            watched : false
        });
        createMovieUI();
    }
}

function createMovieUI() {
    ul.innerHTML = "";
    allMovies.forEach((movie, i) => {
        let li = document.createElement('li');

        let h2 = document.createElement('h2');
        h2.innerHTML = movie.name;

        let button = document.createElement('button');
        button.innerHTML = movie.watched ? "watched" : "To Watch";

        li.append(h2, button);
        ul.append(li);
    }) 
}

createMovieUI();

input.addEventListener('keyup', handleInput);


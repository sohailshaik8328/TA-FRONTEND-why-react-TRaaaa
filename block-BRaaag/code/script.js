let input = document.querySelector('input');
let ul = document.querySelector('ul');

let allMovies = [
    {
        name : "forest gump",
        watched : false
    }
];

input.addEventListener('keyup', (event) => {
    if(event.keyCode === 13) {
        allMovies.push({
            name : event.target.value,
            watched : false
        });
        event.target.value = '';
        createMovieUI(allMovies, ul);
    }
});

function handleChange(event) {
    let id = event.target.id;

    allMovies[id].watched = !allMovies[id].watched;
    createMovieUI(allMovies, ul)
}

// let elm = React.createElement;

function createMovieUI(data, root) {
    let ui = data.map((movie, i) => {
        
        return React.createElement('li',
        //  {classList : "flex"},
        null,
          React.createElement("label", {for : i}, movie.name),
          React.createElement("button", {id : i, onClick : handleChange}, movie.watched ? "watched" : "To Watch")
        );
            }) 
    ReactDOM.render(ui, root)
}

createMovieUI(allMovies, ul);
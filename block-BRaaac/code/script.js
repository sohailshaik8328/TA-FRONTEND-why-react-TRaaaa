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



function createMovieUI(data, root) {
    root.innerHTML = "";
    data.forEach((movie, i) => {
        
        let li = elm('li',
         {classList : "flex"},
          elm("label", {for : i}, movie.name),
          elm("button", {id : i, onCLick : handleChange}, movie.watched ? "watched" : "To Watch")
        );
        
        root.append(li);
    }) 
}

createMovieUI(allMovies, ul);

function elm(type, attr = {}, ...children) {
    let element = document.createElement(type);
    for(let key in attr) {
        if(key.startsWith("data-")) {
            element.setAttribute(key, attr[key]);
        } else if (key.startsWith('on')) {
            let eventType = key.replace('on', '').toLocaleLowerCase();
            element.addEventListener(eventType, attr[key]);
        } else {
            element[key] = attr[key];
        }
    }
    children.forEach(child => {
        if(typeof child === "object") { 
            element.append(child);
        }
        if(typeof child === "string") {
            let node = document.createTextNode(child);
            element.append(node)
        }
    });
    return element;
}
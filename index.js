

const wrapper = document.querySelector('.wrapper');

let database = [
    {
        "id" : 1,
        "url" : "https://catherineasquithgallery.com/uploads/posts/2021-03/1615816386_33-p-fon-khaitek-39.jpg",
        "title" : "Khaitek 29",
        "description" : "lorem ips lore maiore mag",
    },
    {
        "id" : 2,
        "url" : "https://catherineasquithgallery.com/uploads/posts/2021-03/1615816386_33-p-fon-khaitek-39.jpg",
        "title" : "Khaitek 29",
        "description" : "lorem ips lore maiore mag",
    },
];

function createCrad(){

    let res = " "

    for (let i = 0; i < database.length; i++) {

        res += `
            <div class="card" style="width: 18rem;">
                <img src="${database[i].url}" class="card-img-top" alt="${database[i].title}">
                <div class="card-body">
                <h5 class="card-title">${database[i].title}</h5>
                <p class="card-text">${database[i].description}</p>
                <a href="#" class="btn btn-primary" onclick="create(${database[i].id})">Go somewhere</a>
            </div>
        `
    }

    wrapper.innerHTML = res
}

createCrad();

function create(id){

    let deleteVideo = database.filter(todo => {
        todo.id != id;
        console.log(id);
    })

    createCrad();
    
}


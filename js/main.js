"use strict";

let app = new Vue({
    el: '#app',
    data: {
        teachers: [{
            name: "Birgitte Kirk Iversen",
            mail: "bki@baaa.dk",
            position: "Senior Lecturer",
            img: "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335231430000&format=webp"
        }, {
            name: "Lykke Dahlén",
            mail: "lyda@baaa.dk",
            position: "Lecturer",
            img: "https://www.eaaa.dk/media/vk5evkad/lykke-dahlen.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335291100000&format=webp"
        }, {
            name: "Kim Elkjær Marcher-Jepsen",
            mail: "kije@baaa.dk",
            position: "Lecturer",
            img: "https://www.eaaa.dk/media/3zihz21l/kim-elkjaer-marcher-jepsen.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335276900000&format=webp"
        }],
        newTeacher: {
            name: "",
            mail: "",
            position: "",
            img: ""
        },
    },
    methods: {
        addNewTeacher() {
            this.teachers.push(this.newTeacher);
            this.newTeacher = {};
        }
    }
});


/*let app = new Vue({
    el: '#app',
    data: {
        posts: [{
            navn: "Pikachu #025",
            kampstil: "Elektrisitet",
            kategori: "Mus",
            img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
        }, {
            navn: "Sandshrew #027",
            kampstil: "Sand",
            kategori: "Mus",
            img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png"

        }, {
            navn: "Nidoran #029",
            kampstil: "Gift",
            kategori: "Gift dyr",
            img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png"

        }],
        newPost: {
            navn: "",
            kampstil: "",
            kategori: "",
            img: ""
        },
    },
    methods: {
        addNewPost() {
            this.posts.push(this.newPost);
            this.newPost = {};
        }
    }
});*/
"use strict";

let app = new Vue({
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
});
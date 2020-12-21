<template>
    <div class="row mt-md-5 mt-sm-5 mt-xs-5">
        <div class="col-lg-6 col-xs-12" v-for="(noticia,index) of noticias" :key="index">
            <div class="d-flex justify-content-center align-items-center" >

                <div class="p-3">
                    <img :src="noticia.urlToImage" alt="Poster Noticia" width="200px">
                </div>

                <div class="p-2">
                    <h4>{{noticia.title}}</h4> 
                    <h5>{{noticia.author}}</h5> 
                    <p>{{noticia.description}}</p>
                    <h5><a :href="noticia.url" target="_blank" >LEER ESTA NOTICIA</a></h5>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "NewsSection",
    data(){

        return{
            noticias : null
  
        }
    },

    created(){

        axios
            // .get('https://www.omdbapi.com/?apikey=1e176025&s=harry')
            .get('http://newsapi.org/v2/everything?q=books&from=2020-12-21&sortBy=publishedAt&apiKey=c2d95a52111d43fcb4c8bdac5d7d1310')
            .then( response => { this.noticias = response.data.articles.slice(0,4) })
        console.log(this.noticias)
        

    }
}
</script>
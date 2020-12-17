<template>
        <!-- Image and text -->
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-primary ">
        <a class="navbar-brand " href="# ">
            <img src="https://i.ibb.co/S74xqHz/iconfinder-house-shelf-1378832.png" width="30" height="30" 
            class="d-inline-block align-top " alt=" " loading="lazy "> Macondo Book's Store
        </a>
        <div class="collapse navbar-collapse justify-content-end " id="navbarNav ">
            <ul class="navbar-nav ">
                <li class="nav-item active ">
                    <a class="nav-link " href="#Inicio">Inicio <span class="sr-only ">(current)</span></a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link " href="#Noticias">Noticias</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link " href="#Integrantes ">Integrantes</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link " href="#Contacto">Contacto</a>
                </li>
            </ul>
        </div>
    </nav>

</template>

<script>
import NewsSection from "./components/NewsSection.vue"
    export default {
        name: "ImageText",
        components: {NewsSection}
        
    }
</script>

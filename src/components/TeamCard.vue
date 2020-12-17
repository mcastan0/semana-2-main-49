<template>
    <div class="container-fluid">
        <div class="row justify-content-center mb-5">
            <div class="col mt-5" v-for="(member,index) of Team" :key="index">
                <div class="card text-white bg-dark">
                    
                    <div class="d-flex justify-content-center p-2">
                        <img :src="member.image" alt="Foto del equipo" height="200px">
                    </div>
                    <div class="card-body">
                        <h3 class="card-title font-weight-bold" >{{member.nombre}}</h3>
                        <p class="card-text">{{member.descripcion}}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">{{member.rol}}</small>
                    </div>
                    
                </div>
            </div>          
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeamCard",
        props: ['member'],
            data(){
        return{

            Team: [
        {
          codigo: 1,
          nombre: "Andres Castaño",
          descripcion: "Tecnologo Electónico. Apasionado por el Cine, y la Investigación.",
          rol: "Desarrollador Frontend, Backend, Arquitecto de Software, Analista, Tester",
          image: "https://i.ibb.co/FXxrt36/iconfinder-10-avatar-2754575.webp",
        },
         {
          codigo: 2,
          nombre: "Jules Winnfield",
          descripcion: "Director, productor, guionista, editor y actor de cine y televisión .",
          rol: "Coaching Motivacional",
          image: "https://i.ibb.co/4gdcL9q/Jules-Winnfield.jpg"
        },
         {
          codigo: 3,
          nombre: "Beatrix Kiddo",
          descripcion: "Experta en Artes Marciales. Apasionada por la vida y la estética.",
          rol: "Guía Espiritual",
          image: "https://i.ibb.co/rvWYVFG/Beatrix-Kiddo.jpg"
        }
      ],


        }
    },

       
        
       }
</script>

<style scoped>

</style>

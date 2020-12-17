<template>
    <div class="container-fluid">        
        <news-section></news-section>   
    </div>
</template>

<script>
import NewsSection from '../components/NewsSection.vue'
export default {
  components: { NewsSection },
    name: "News",
    data(){
        return{

            dato: {
                nombre : 1,
                apellido: 2
            }

        }
    },
    methods:{

    }
}
</script>
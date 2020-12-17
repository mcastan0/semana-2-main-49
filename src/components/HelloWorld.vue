<template>
  <div>
      <carousel-section></carousel-section>
      <news-section></news-section>
      <team-card></team-card>
      <footer-section></footer-section>
  </div>
</template>

<script>
import CarouselSection from '../components/CarouselSection.vue'
import FooterSection from '../components/FooterSection.vue'
import NewsSection from '../components/NewsSection.vue'
import TeamCard from '../components/TeamCard.vue'

export default {
  components: { 
    CarouselSection,
    NewsSection,
    TeamCard,
    FooterSection },
    name: "HelloWorld",
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

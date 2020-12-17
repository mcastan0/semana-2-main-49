<template>
<!-- Carrusel de imagenes -->   
            <!-- Carrusel de imagenes -->   
			
    <div id="mycarousel" class="carousel slide" data-ride="carousel">
    
    <ol class="carousel-indicators">
    <li data-target="#mycarousel" data-slide-to="0" class="active"></li>
    <li data-target="#mycarousel" data-slide-to="1"></li>
    <li data-target="#mycarousel" data-slide-to="2"></li>
    </ol>

    
    <div class="carousel-inner">
    <div class="item active">
        <img src="tienda.png" alt="los angeles" style="width:100%;">
    </div>

    <div class="item">
        <img src="slide1.png" alt="chicago" style="width:100%;">
    </div>
    
    <div class="item">
        <img src="slide2.png" alt="new york" style="width:100%;">
    </div>

    <div class="item">
        <img src="slide3.png" alt="miami" style="width:100%;">
    </div>

    <div class="item">
        <img src="slide4.png" alt="illinois" style="width:100%;">
    </div>


    </div>

    
    <a class="left carousel-control" href="#mycarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">previous</span>
    </a>
    <a class="right carousel-control" href="#mycarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">next</span>
    </a>
</div>


</template>

<script>
export default {
    name:'CarouselSection'
}
</script>
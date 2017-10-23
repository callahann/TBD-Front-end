<template>
  <div>
    <header>
      <div class="branding">
        
      </div>
      <nav>
        <a href="#/">Home </a>
        <a href="#/graficoPorCanal">Gráficos por Canal</a>
        <a href="#/graficoNoticias">Gráfico Noticias</a>
        <a href="#/graficoTeleseries">Gráfico Teleseries</a>
        <a href="#/graficoMatinales">Gráfico Matinales</a>
        <a href="#/agregarNuevoPrograma">Agregar Nuevo Programa</a>
      </nav>
    </header>

    <main class="container">
      <router-view></router-view>
    </main>
</div>
</template>

<script>
export default {

}
</script>

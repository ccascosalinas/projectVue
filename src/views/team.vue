<template lang='pug'>
section
  // Left
  b-breadcrumb(align="is-left")
    b-breadcrumb-item(tag="router-link", to="/") Login
    b-breadcrumb-item(tag="router-link", to="/home.vue") Home
    b-breadcrumb-item(tag="router-link", to="/Schedule.vue") Discover the company
  section
    b-message(
      title="Team",
      type="is-success",
      aria-close-label="Close message"
    )
      h2 Team highly qualified, professional team at your disposal to help you achieve your goals, committed people with the best values ​​to be by your side when you need it.
    section
        b-button(@click='facebook' type='is-info') Facebook
        b-button(@click='instagram' type='is-danger') Instagram
        b-button(@click='twitter' type='is-primary') Twitter
        b-button(@click='git' type='is-warning') GitHub
    section
      b-carousel
        b-carousel-item(v-for="(carousel, i) in carousels", :key="i")
          section(:class="`hero is-medium is-${carousel.color}`")
            .hero-body.has-text-centered
              h1.title {{ carousel.text }}
      .card
  .card-image
    figure.image.is-4by3
      img(src='@/assets/img/usuario1.jpg' alt='Placeholder image')
  .card-content
    .content
      p.title {{profesion1}} 
      p.subtitle {{nombre1}}
      h3 {{descripcion1}}
      .card
  .card-image
    figure.image.is-4by3
      img(src='@/assets/img/usuario1.jpg' alt='Placeholder image')
  .card-content
    .content
      p.title {{profesion2}} 
      p.subtitle {{nombre2}}
      h3 {{descripcion2}}
    
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      carousels: [
        { text: "Leadership", color: "primary" },
        { text: "Professionalism", color: "info" },
        { text: "Responsibility", color: "success" },
        { text: "Love", color: "warning" },
        { text: "Loyalty", color: "danger" },
      ],
      profesion1: '',
      nombre1:'',
      descripcion1:'',
      profesion2:'',
      nombre2:'',
      descripcion2:''
    };
  },
  
   async mounted(){
     try{
       const response = await axios.get('http://localhost:3006/users')
       console.log(response)
      this.profesion1= response.data[0].profesion
      this.nombre1 = response.data[0].nombre
      this.descripcion1 = response.data[0].descripcion
      this.profesion2 = response.data[1].profesion
      this.nombre2 = response.data[1].nombre
      this.descripcion2 = response.data[1].descripcion
      this.profesion3 = response.data[2].profesion
      this.nombre3 = response.data[2].nombre
      this.descripcion3 = response.data[2].descripcion
     }
       catch(error){
         console.log(error)
       }
  },
  methods: {
      facebook(){
        window.open('https://es-la.facebook.com/')
      },
      instagram(){
        window.open('https://www.instagram.com/?hl=es-la')
      },
      twitter(){
        window.open('https://twitter.com/?lang=es')
      },
       git(){
        window.open('https://github.com/')
      },
  }
};
</script>
<style scoped>
.card-image, .card-content{
  width:30%;
  margin: 15px;
  
}
</style>
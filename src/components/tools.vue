<template lang='pug'>
section
  // Left
  b-breadcrumb(align="is-left")
    b-breadcrumb-item(tag="router-link", to="/") Login
    b-breadcrumb-item(tag="router-link", to="/home.vue") Home
    b-breadcrumb-item(tag="router-link", to="/team.vue") Team
  section
        b-button(@click='music' type='is-info') Music
        b-button(@click='sports' type='is-danger') Sports
        b-button(@click='hobbie' type='is-primary') Hobbies
        b-button(@click='place' type='is-warning') Travels
  nav.panel
    p.panel-heading
    | Repositories
  .panel-block
    p.control.has-icons-left
      input.input(type="text", placeholder="Search")
      span.icon.is-left
        i.fas.fa-search(aria-hidden="true")
  p.panel-tabs
    a.is-active All
    a Public
    a Private
    a Sources
    a Forks
  a.panel-block.is-active
    span.panel-icon
     i.fas.fa-book(aria-hidden="true")
      | Vuejs
  a.panel-block
    span.panel-icon
      i.fas.fa-book(aria-hidden="true")
        | React
  a.panel-block
    span.panel-icon
      i.fas.fa-book(aria-hidden="true")
        | Angular
  a.panel-block
    span.panel-icon
      i.fas.fa-book(aria-hidden="true")
      | Github
  a.panel-block
    span.panel-icon
      i.fas.fa-code-branch(aria-hidden="true")
        | Bulma
  a.panel-block
    span.panel-icon
      i.fas.fa-code-branch(aria-hidden="true")
        | ObjectionJs
  label.panel-block
     button.button.is-link.is-outlined.is-fullwidth
      | Reset all filters
  textarea.textarea(placeholder='e.g. Hello world')
  .file
  label.file-label
    input.file-input(type='file' name='resume')
    span.file-cta
      span.file-icon
        i.fas.fa-upload
      span.file-label
        | Choose a file&mldr;

</template>

<script>
export default {
  name: "Tools",
  mounted:{
    form(){
      alert('Hola')
    }
  },
  methods: {
    music(){
      let question1 = prompt('What music do you prefer, salsa or pop?')
      if(question1 === 'salsa'){
        window.open('https://www.youtube.com/watch?v=Sj3oy9jrbFc')
      } else{
        window.open('https://www.youtube.com/watch?v=yG3WzHSemzQ&t=276s')
      }
    },
    sports(){
      let question2 = prompt('What is your favorite sport?')
      alert('It is amazing, it is very interesting ' + question2)
    },
    hobbie(){
      let question3 = prompt('Do you like extreme challenges?')
      if(question3 === 'yes' || question3 === 'si'){
        alert('Cool, here I share a few recommendations')
        window.open('https://lifeandstyle.expansion.mx/entretenimiento/2016/12/14/los-10-deportes-mas-extremos-del-mundo')
      } else{
        alert('Your thing is tranquility, I recommend some interesting books.')
        window.open('https://www.planetadelibros.com/seleccion-editorial/libros-recomendados/132')
      }
    }
  }
};
    
</script>

<style>
</style>
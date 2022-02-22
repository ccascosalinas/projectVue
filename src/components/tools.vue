<template lang='pug'>
section
  // Left
  b-breadcrumb(align="is-left")
    b-breadcrumb-item(tag="router-link", to="/") Login
    b-breadcrumb-item(tag="router-link", to="/home.vue") Home
    b-breadcrumb-item(tag="router-link", to="/team.vue") Team
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
};
</script>

<style>
</style>
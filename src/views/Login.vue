<template lang='pug'>
   section
    // Left
    b-breadcrumb(align='is-left')
      b-breadcrumb-item(tag='router-link' to='/home.vue') Home
      b-breadcrumb-item(tag='router-link' to='/team.vue') Team
      b-breadcrumb-item(tag='router-link' to='/Schedule.vue') Discover the company   
    section
      p Sign in
    b-field(label='Name')
      b-input(value='' placeholder='Enter a name')
    b-field(label='Email' type='is-danger' message='Enter a valid email')
      b-input(type='email' value='' maxlength='30' placeholder='Enter a email')
    b-field(label='Username' type='is-success' message='Enter a unique username')
      b-input(value='' maxlength='30' placeholder='Enter a username')
    b-field(label='Password' type='is-warning' :message="['Password must have at least 8 characters']")
      b-input(value='' type='password' maxlength='30' placeholder='Enter a security password')
    b-field(label='Subject')
      b-select(placeholder='Select a subject')
        option(value='1') Option 1
        option(value='2') Option 2
      .field
        .control
    label.checkbox
      input(type='checkbox')
      |       I agree to the 
      a(href='#') terms and conditions
      .field
        .control
    button.button.is-link(v-on:click='register') Submit
        .control
    button.button.is-link.is-light Cancel
    section
      b-image(:src="require('@/assets/img/login.jpg')" ratio='601by235' :rounded='rounded')
</template>

<script>
export default {
  setup() {
    
  },
  methods: {
    register(){
      alert('Congratulations your account has been successfully registered!')
    },
    
  }
}
</script>

<style lang='css'>
  p{
    text-align: center ;
    font-size: 45px;
  
  }
  .button{
    position: absolute;
    margin: 10px;
    left: 70px;
    bottom: 15px;
  }
</style>
<template>
  <div class="home">
    <h1>COMED</h1>
    <h3>Come and join our seminars for FREE TRIAL!</h3>
    <p>If you know nothing about HTML, CSS and JavaScript or just have learned a little bit about web development, this is the great place for you. We have FREE TRAIL for 4 serminars. In the seminars, you will meet professional web developers there. You will more or less earn something you want involved web development.</p>
    <p>If you are interested in learn more, please go to <router-link to="/seminars" class="blue">Seminars menu</router-link> for more wonderful seminars.</p>
    <p>If you have any question, please go to <router-link to="/contact" class="blue">Contact menu</router-link> for contact information.</p>

  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
   
  }
}
</script>

<style scoped>

  h1 {
    margin-top:35px
  }
  p {
    width:80%;
    margin:10px auto;
    line-height: 1.8rem;
  }

  .blue {

    color:rgb(77, 77, 226);
  }
  
</style>

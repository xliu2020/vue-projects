<template>
  <div class="seminars">
    <h1>Seminars</h1>
    <!-- <p>{{seminars}}</p> -->
    <h3>Free Seminars </h3>
  <ul>
    <li v-for="sem in seminars" :key="sem.id">
      <router-link :to="{ name:'Details', params:{ id:sem.id, title:sem.title, location:sem.location, time:sem.start_time, desc:sem.short_desc }}">{{ sem.title }}</router-link>
      
    </li>
  </ul>
    <h3>Want To Learn More?</h3>
    <ul>
      <li>Coming Soon...</li>
    </ul>


  </div>
</template>

<script>
import Seminars from '../seminars.json'

export default {

  data() {

    return {

      seminars:Seminars
    }
  }
}
    
  
</script>

<style scoped>

ul {

  background-color: rgb(130, 155, 251);
  padding:25px 30px 30px;
  width:60%;
  margin:0 auto;
  border-radius:15px

}
li {
  text-align: cneter;
  list-style-type: none;
  margin-top:10px;
  color:rgb(254, 232, 68);
  font-size:18px

  
}

li a {
  color:rgb(254, 232, 68);
  text-decoration: none;
  
}

a:hover {

  color:rgb(251, 252, 250)
}
</style>


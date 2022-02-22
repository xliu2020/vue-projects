<template>
  <div class="details">
    <h1>Seminar Details</h1>
    <div class="content">
      <strong>Details for {{ title }}</strong>
      <p>Location: {{ location }}</p>
      <p>Time: {{ time }}</p>
      <p>Description: {{ desc }}</p>
    </div>
    
    <p></p>
  </div>
</template>

<script>
   

    export default {
        props:['id','title','location','time','desc'],
        // data() {
        //     return {
        //         id:this.$route.params.id
        //     }
        // }
    }
</script>


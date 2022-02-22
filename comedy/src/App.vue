<template>
  <div id="nav">
    <img id="logo" src="./assets/comde.png" alt="organizor icon" width="35" height="35">
   <router-link to="/Contact">Contact</router-link>
    <router-link to="/Seminars">Seminars</router-link>
     <router-link to="/">Home</router-link> 
  </div>
  <router-view/>
</template>

<style>
body {
  margin:0px
}


#logo {

  margin-top:20px;
  /* padding:5px 10px 0; */
  float:left;
  vertical-align: center;
  
  
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px 20px;
  background-color:rgb(77, 77, 226);
  height: 80px;
  overflow: auto;

}

#nav a {
  font-weight: bold;
  color: #f0f5fa;
  height:80px;
  line-height: 80px;
  float:right;
  padding:0 10px;
  
  
  
}

#nav a.router-link-exact-active {
  color: #fce72f;
  
}

.content {
    width:60%;
    margin: 0 auto;
    padding:30px 30px 25px;  
    border-radius: 15px;
    box-shadow:6px 8px 20px rgb(186, 197, 241);
  }


</style>

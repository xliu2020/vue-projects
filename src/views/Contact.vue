<template>
    <h1>Contact Us</h1>
    <form @submit.prevent="subForm">
        <label for="username">Your Name:</label>
        <input type="text" id="username" required v-model="username">
        <div v-if="nameError" class="error">{{ nameError }}</div>
        
        <label for="useremail">Your Email:</label>
        <input type="email" id="useremail" required v-model="email">
         
        <label for='comments'> Questions Or Comments:</label>
        <textarea id="comments" required v-model="comments" >          
        </textarea>
        <div v-if="cmtError" class="error">{{ cmtError }}</div>
         
        <div class="button">
            <button>Submit</button>
        </div>

    </form>

    <div class="content">
        <h3>Your input information</h3>
        <p>Name: <span class="info">{{ username }}</span></p>
        <p>Email: <span class="info">{{ email }}</span></p>
        <p>Questions or Comments: <span class="info">{{ comments }}</span></p>
    </div>
    
</template>

<script>
export default{

    data() {
        return {
            username:'',
            email:'',
            comments:'',
            nameError:'',
            cmtError:'',

        }
    },

    methods: {

        subForm() {

            this.nameError = this.username.length > 5 ? '' : 'Your name must have at leate 5 characters';
            this.cmtError = this.comments.length > 10 ? '' : 'Comments or questions muxt have at least 10 characters'
        }
    }
}
</script>
<style scoped>

    .error {
    color: red;
    font-size: 0.7em;
    font-style: italic;
    margin-top:10px
}

    form {

        width:60%;
        margin:0 auto;
    }

    label {

     text-align:center;
     display:block;
     line-height:1.5rem;
     margin-top:15px
    }

    input {

        padding:5px 10px;
        width:200px;
        height: fit-content;
        margin-top:10px

    }

    p {
        text-align: center;
        margin-bottom:10px;
        line-height:1.5rem
    }

    button {

        background-color: rgb(130, 155, 251);
        border:none;
        padding:10px 15px;
        margin-top:15px;
        border-radius: 10px;
        color:cornsilk

    }

    textarea {

        width:300px;
        height:100px;
        margin-top:10px
    }

    button:hover {
        background-color: rgb(254, 232, 68);
        color:rgb(77, 77, 226);
        cursor: pointer;
    }

    .info {

        color:rgb(77, 77, 226);
       

    }

    .content {

        margin:40px auto;
    }

</style>

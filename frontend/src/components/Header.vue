<template>
    <nav class="navbar">
        <div class="navbar__logo">
            <router-link :to="{name:'index'}">😶</router-link>
        </div>
        <ul class="navbar__menu" :class="{'active': isActive}" v-on:click="addActive">
            <li><router-link :to="{name:'index'}">HOME</router-link></li>
            <li><router-link :to="{name:'todo'}">TODO</router-link></li>
            <li><a href="">Gallery</a></li>
            <li><a href="">Wedding</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Bookings</a></li>
        </ul>
        <ul class="navbar__icons" :class="{'active': isActive}" v-on:click="addActive">
            <li>😘</li>
            <li>🥰</li>
        </ul>
        <div class="navbar__toggleBtn" :class="{'active': isActive}" v-on:click="addActive">
            <div class="menu__btn"></div>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            isActive: false
        }
    },
    methods: {
        addActive: function (){
            return this.isActive = !this.isActive
        }
    }
}
</script>

<style scoped>
   a{
       text-decoration: none;
       color: #f0f4f5;
   }
   .navbar {
       display : flex;
       justify-content: space-between;
       align-items: center;
       background-color: #263343;
       padding: 8px 12px;
   }
   .navbar__logo {
       font-size: 24px;
       /*color: cadetblue;*/
   }
   .navbar__menu li{
       padding: 10px 20px;
   }
   .navbar__icons {
       list-style: none;
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding-left: 0px;
   }
   .navbar__menu {
       display: flex;
       list-style: none;
       padding-left: 0px;
   }
   .navbar__menu li:hover {
       background-color: rgb(87, 170, 166);
       border-radius: 5px;
   }
   .navbar__icons li {
       padding: 10px;
   }
   .navbar__toggleBtn {
       display: none;
   }
   @media screen and (max-width: 768px) {
        .navbar{
            flex-direction: column;
            align-items: flex-start;
            padding : 10px 24px;
        }
        .navbar__menu {
            display: none;
            flex-direction: column;
            align-items:center;
            width:100%;
        }
        .navbar__menu li {
            color: #f0f4f5;
            width: 100%;
            text-align: center;
        }
        .navbar__icons {
            display: none;
            width: 100%;
            justify-content: center;
        }
        .navbar__toggleBtn {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            border: 3px;
            cursor: pointer;
            top:8px;
            right:30px;
            /*transition: all .3s ease-in-out;*/
        }
        .menu__btn {
            width: 40px;
            height: 5px;
            background: #fff;
            border-radius: 4px;
            box-shadow: 0 2px 5px rgba(255,101,47,.2);
            /*transition: all .5s ease-in-out;*/
        }
        .menu__btn::before, .menu__btn::after {
            content: '';
            position: absolute;
            width: 40px;
            height: 5px;
            background: #fff;
            border-radius: 4px;
        }
        .menu__btn::before {
            transform: translate(-50%,-13px);
        }
        .menu__btn::after {
            transform: translate(-50%,13px);
        }   
        /* ANIMATION */
        .navbar__toggleBtn.active .menu__btn {
            background: transparent;
            box-shadow: none;
        }
        .navbar__toggleBtn.active .menu__btn::before {
            transform: rotate(45deg) translate(-16px, 16px);
        }
        .navbar__toggleBtn.active .menu__btn::after {
            transform: rotate(-45deg) translate(-16px,-16px);
        }

        .navbar__menu.active,
        .navbar__icons.active{
            display:flex;
            transition: 1.5s ease-out;
        }
   }
</style>
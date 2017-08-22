<template>
  <div class="hello">
    <header>
       Vue-webpack

        <p v-if="login"><i class="icon iconfont icon-out" @click="logout" ></i>{{ userinfo }}</p>
        <p v-else><i class="icon iconfont icon-personalcurrent" @click="loginfun" ></i></p>

     </header>

     <div id="content">
        <ul class="nav">

            <li><i class="icon iconfont icon-menu"></i>Menu</li>

            <li v-for="p in navs"  @click="nav( p.name )" v-bind:class=" p.name  " >
                <span><i v-bind:class=" p.icon  "></i>{{ p.title }}</span>
            </li>

        </ul>

        <div id="nav-cont">
            <div v-if="navban">

                <Nav-view></Nav-view>

            </div>
            <div v-else>

                <div  id="ban-sin" v-bind:class=" p.name  " v-for="p in navs" @click="nav( p.name )"  >
                      <span >{{ p.title }}</span>
                 </div>

            </div>

        </div>
     </div>

  </div>
</template>

<script>
import Nav from '@/components/Nav'
import '@/assets/js/jquery.min.js'
import { mapGetters , mapActions } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      login:true,
      userinfo : this.$root.userData
    }
  },

  computed:{
      ...mapGetters({
            navs:'navarr',
            navban:'navban'
      })
  },

   created(){
        if(this.$root.userData){
            this.login = true;
        }else{
            this.login = false;
        }

        this.$store.dispatch('getNavs')
   },

  methods:{

    ...mapActions([
        'nav'
    ]),

    loginfun:function(){
        this.$router.replace({path:'/login'});
    },

    logout:function(){
        this.$root.userData = null;
        this.$router.replace({path:'/login'});
    }


  },

  components:{
        'Nav-view':Nav
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

header{background-color:#e8e8e8;height:40px;line-height:40px;border-bottom:solid 1px silver;padding-left:30px;width:1190px;margin:0 auto;position:relative;}
header p{position:absolute;right:20px;top:0;line-height:20px;}
header p .iconfont{font-size:18px;margin-right:10px;cursor:pointer}

#content{width:1220px;height:1220px;margin:0 auto;}
.nav{background-color:#e8e8e8;height:40px;padding:0;}
.nav li{float:left;width:120px;height:40px;line-height:40px;padding-left:30px;}
.nav li .iconfont{font-size:20px;margin-right:10px;}
.nav li:not(:first-child):hover{background-color:#009A61;color:white;cursor:pointer;}

#ban-sin{width:150px;height:150px;line-height:150px;text-align:center;border-radius:50%;background-color:#e8e8e8;display:inline-block;margin:20px;cursor:pointer;font-size:24px;}
#ban-sin:hover{background-color:#009A61;color:white;}

.clicked_nav{background-color:#009A61;color:white;}
</style>

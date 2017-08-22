<template>
  <div class="login">
    <div class="form">
        <h1>welcome to swan</h1>
        <form>
            <label>user:<input type="text" name="user" v-model="name"/></label>
            <label>pass:<input type="password" name="pswd" v-model="pswd" /></label>
            <label><button type="button" @click="post()">submit</button></label>
        </form>

        <router-link to="/tip"><span class="tips">about tips</span></router-link><br/>
        <router-view></router-view>

    </div>
  </div>
</template>



<script>
import Tip from '@/components/Tip'

export default {
  name: 'login',
  data () {
    return {
      name:'',
      pswd:''
    }
  },


  methods:{
    post:function() {

        var that = this;

        that.$http.jsonp('http://demo.raoye.me/fun.php',

                        {
                            params:{
                               type:'login',
                               name:this.name,
                               pswd:this.pswd
                            },

                            jsonp:'callback'

        			        }).then(function (res) {

        					alert(res.body.data);

        					if(res.body.status == "1"){
                                   this.$root.userData = that.name //进行每个页面的数据通信
                                   this.$router.push({ path: '/hello' ,query:{datanum:"1"}}); //进行页面跳转
        					}

                            },function (res) {
                                alert("网络有误");
                            });
    }
  }
 }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form{width:300px;height:300px;border:solid 1px #009A61;position:absolute;top:50%;left:50%;margin:-150px 0 0 -150px;text-align:center}
form{margin-top:40px;}
label{display:block;height:50px;}
label input{width:150px;border:solid 1px black;margin-left:10px;}
label button{width:200px;background-color:#009A61;border:solid 1px #009A61;height:25px;}
h1{font-weight:normal;}
.tips{position:absolute;left:15px;}
</style>

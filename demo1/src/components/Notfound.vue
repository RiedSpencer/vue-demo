<template>
  <div class="hello">

       NOT FOUND , THAT MEAN 404 ! <br/>

       AFRER <span class="time">{{ time }}</span> SECOND,THIS WILL REDIRECT TO HOME PAGE

  </div>
</template>

<script>

export default {
  name: 'notfound',
  data () {
    return {
        time:5
    }
  },

  created(){
        var that = this;
            setInterval(function(){
                if(that.time>1){
                    that.time--;
                }else{
                    clearInterval();
                    that.$router.replace({name:'Hello'});
                }
            },1000);
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{text-align:center;margin-top:30px;font-size:30px;color:#009A61}
.time{color:red;}
</style>

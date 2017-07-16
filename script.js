new Vue({
    el:'#app',
    data:{
      mas:'hello world are you okay?',
      showClose: true,
      form:{
        
      }
    },
    methods:{

    },
    mounted:function(){
      let self = this
      let el = document.querySelector('#header img')
      this.$message({
          showClose: true,
          message: "Warning, please Don't use Facebook browser ",
          type: 'warning'
        });

    }
})
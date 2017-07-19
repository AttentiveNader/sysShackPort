new Vue({
    el:'#app',
    data:{
      mas:'hello world are you okay?',
      showClose: true,
      form:{},
      socialArray:[
        {
          link:'https://www.facebook.com/systemshackp/',
          src:'./src/imgs/facebook.ico'
        }, {
          link:'https://systemshackblog.wordpress.com/',
          src:'./src/imgs/wordpress1600.png'
        }, {
          link:'https://www.linkedin.com/company-beta/13361187/',
          src:'./src/imgs/linkedin.ico'
        },
      ]
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
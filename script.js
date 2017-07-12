new Vue({
    el:'#app',
    data:{
      mas:'hello world are you okay?'
    },
    methods:{

    },
    mounted:function(){
      let self = this
      let el = document.querySelector('#header img')
      console.log(el.clientHeight)

    }
})
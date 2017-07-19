new Vue({
    el:'#app',
    data:{
     height: (window.innerHeight - 60) +'px',
    },
    methods:{

    },
    mounted:function(){
      let self = this
      self.el=document.getElementById('about'); 
      
    },
    computed:{
        scrControl:function(){
            console.log(window)
        }
    }
})
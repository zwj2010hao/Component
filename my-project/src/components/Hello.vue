<template>
  <div transition="app" id='app'>
    <div class="clearfix pageleft">
      <ul class="nav">
        <li v-for="item in navMsg" class="cat1">
            {{item.category}}
            <ul>
                <li v-for="item in item.cates" class="cat2">
                   <a v-link="{path: '/'+item.url}">{{item.name}}</a>
                </li>
            </ul>
        </li>
      </ul>
    </div>
    <div class="pageright" id='pagecontent'>
         <h1>Welcome to our Repository</h1>
         <p>This is a repository of excellent code.<br>There are so many css code that help us to realize some visual effects.<br>
         We hope that this repository will improve our quality of css code.<br><b>So enjoy it!!!</b></p>
    </div>
  </div>
</template>
<script>
export default {
    name: 'HelloView',
    data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      navMsg: [
        {
            category:'pc',
            cates:[{
                name:'button',
                url:'button'
            }]
          }
      ]
    }
  }
}

</script>

<style lang="scss">
#app{
    min-height: 1000px;
    background: url("./../assets/hellopage.jpg") repeat;
    background-size: cover;
}
.pageleft{
    width: 200px;
    position: fixed;
    top: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding:20px;
    min-height: 1000px;
    //background: url("./../assets/nav_bg.png") repeat;
}
.pageright{
    //background: url("./../assets/hellopage.jpg") repeat;
    margin-left: 240px;
    min-height: 1000px;
    //background-size: cover;
    h1{
      //color: #222;
      color:#fff;
      padding: 100px 0 0 100px;
      font-size: 50px;
      font-weight: 700;
    }
    p{
    	//color:#555;
      color:#fff;
    	padding: 50px 0 0 100px;
    	font-size: 20px;
    	line-height: 2;
    	b{
    		font-size: 30px;
    		font-weight:700;
    	}
    }
    img{
     		margin:50px;
    }
}
.nav{
    color: #fff;
}
.nav .cat1{
    font-size: 25px;
    font-weight: bold;
    border-bottom: 1px solid rgba(255,255,255,.2);
    color: #fff;
}
.nav .cat2 a{
    display: inline-block;
    padding: 15px 0;
    font-size: 18px;
    color: #fff;
}
.nav .cat2 a:hover{
   text-decoration: underline;
}
</style>

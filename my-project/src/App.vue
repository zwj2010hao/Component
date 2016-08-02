<template>
    <router-view
        class="view"
        keep-alive
        transition="slide">
      </router-view>
      <div id="returnIndex">
        <a href="/">返回首页</a>
      </div>
</template>

<script>
// import Hello from './components/Hello'

// export default {
//   components: {
//     Hello
//   }
// }
</script>

<style lang="scss">
@import url(./style/common/reset.css);
#returnIndex{
  position: fixed;
  top: 200px;
  right: 0;
  a{
    display: inline-block;
    color: #3ed3e1;
    width: 100px;
    text-shadow: 3px 3px 10px #34c4d1;
    font-weight: 700;
    &:hover{
      text-decoration:underline;
    };
  }
}
</style>

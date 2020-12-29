<template>
    <div>
       <ul>
           <router-link to="/movie" tag="li" active-class="active" >
           <i class="iconfont icondianying"></i>电影</router-link>
           <router-link to="/cinema" tag="li" active-class="active" >
           <i class="iconfont iconyingyuan"></i>影院</router-link>
           <router-link to="/mine" tag="li" active-class="active" >
           <i class="iconfont iconziyuan"></i>我的</router-link>
       </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    ul{
        position:fixed;
        bottom: 0;
        width: 100%;
        display:flex;
        height: 50px;
        li{
            flex: 1;
            text-align: center;
            line-height: 50px;
        }
    }
    .active{
        color: orange;
    }
</style>
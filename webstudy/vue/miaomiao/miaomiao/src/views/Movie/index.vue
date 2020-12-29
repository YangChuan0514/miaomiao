<template>
    <div>
        <headed title="喵喵电影" />
        <tabber />
        <ul class="center">
            <router-link to="/movie/city" tag="li" active-class="active">city</router-link>
            <router-link to="/movie/nowplaying" tag="li" active-class="active">正在热映</router-link>
            <router-link to="/movie/comingsoon" tag="li" active-class="active">即将上演</router-link>
            <router-link to="/movie/search" tag="li" active-class="active"><i class="iconfont iconsousuo"></i></router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
import Tabber from '@/components/Tabber'
import Headed from '@/components/Header'
export default {
    name:'movie',
    components:{
        Tabber,
        Headed
    }
}
</script>
<style lang="scss" scoped>
    .center{
        display: flex;
        height: 50px;
        background-color: white;
        li{
            flex:1;
            text-align: center;
            line-height: 50px;
            font-size: 18px;
        }
    }
    .active{
        color:orange;
    }
</style>
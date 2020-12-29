<template>
    <div>
        <headed title="喵喵影院"/>
        <ul class="center">
            <router-link to="/cinema/one" tag="li" active-class="active">全城</router-link>
            <router-link to="/cinema/two" tag="li" active-class="active">品牌</router-link>
            <router-link to="/cinema" tag="li" active-class="active">特色</router-link>
        </ul>
        <ctlist />
        <tabber />
    </div>
</template>
<script>
import Tabber from '@/components/Tabber'
import Headed from '@/components/Header'
import Ctlist from '@/components/Ctlist'
export default {
    name:'cinema',
    components:{
        Tabber,
        Headed,
        Ctlist,
    }
}
</script>
<style lang="scss" scp>
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
<template>
    <div>
        {{title}}
    </div>
</template>
<script>
export default {
    name:'header',
   props:{
       title:{
           type:String,
           default:"喵喵电影"
       }
   }
}
</script>
<style lang="scss" scoped>
    div{
        height: 50px;
        width: 100%;
        background-color: red;
        color:white;
        line-height: 50px;
        font-size: 20px;
        text-align: center;
    }
</style>
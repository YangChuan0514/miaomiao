<template>
    <div class="main">
        <ul>
            <li v-for="data in datalist" :key=data>
                <img src="https://p1.meituan.net/movie/be4418055735904a43e41ddf4c364db81444834.jpg@1l_1e_1c_128w_180h" alt="">
                <div>
                    {{data}}
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            datalist:["111","222","333"],
        }
    },
}
</script>
<style lang="scss" scoped>
    .main{
        margin-left: 20px;
        margin-right: 20px;
        ul{
            li{clear: both;
                height: 110px;
                img{
                    height: 90px;
                    width: 64px;
                    float: left;
                }
              div{
                  margin-left: 80px;
                  height: 93px;
                  border-bottom: #696464 0.05px solid;
              }
            }
        }
    }
</style>
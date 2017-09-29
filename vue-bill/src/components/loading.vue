<!--遮罩层loading-->
<template>
    <div v-show="show" class="mask">
        <div class="loading">
            <i class="iconfont icon-loading"></i>
        </div>
    </div>
</template>

<style lang="less" scoped>
    @import "../styles/loading.less"
</style>

<script>
    export default {
        props : {                       //props验证show属性
            show : {
                type : Boolean,
                default : false,
            }
        }
    }
</script>



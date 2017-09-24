<template>
	<div class="d_footer">
		<slot></slot>
	</div>
</template>

<script>
	import footerItem from './footer-item'
	
	export default {
		props:['value']	//定义组件需要的一个key的值
	}
</script>

<style>
	.d_footer {
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        /*固定底部*/
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		overflow: hidden;
		height: 50px;
		background: #fff;
		border-top: 1px solid #e4e4e4;
    }
</style>
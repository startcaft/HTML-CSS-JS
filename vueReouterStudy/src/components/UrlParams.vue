<template>
	<div>
		<p>{{ msg }}</p>
		<p>新闻编号：{{ $route.params.newsId }}</p>
		<p>新闻标题：{{ $route.params.newsTitle }}</p>
	</div>
</template>

<script>
	export default {
		data : function(){
			return {
				msg : 'urlParams Page'
			}
		}
	}
</script>

<style>
</style>
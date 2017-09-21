<template>
	<div class="hello">
		<h1>{{ msg }} - {{ $route.params.name }}:{{ $route.params.age }}</h1>
	</div>
</template>

<script>
	export default {
		name : 'hi1',
		data : function(){
			return {
				msg : 'This is Hi1 Page.'
			}
		}
	}
</script>

<style scoped>
</style>
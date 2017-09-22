<template>
	<div id="error">
		{{ msg }}
	</div>
</template>

<script>
	export default {
		data : function(){
			return {
				msg:'Error 404'
			}
		}
	}
</script>

<style>
	#error {
		color: red;
		text-align: center;
		font-size: 16;
		font-weight: 700;
	}
</style>
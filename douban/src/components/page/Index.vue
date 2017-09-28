<template>
	<footer-bar v-model="select">
		<footer-item id="tab1">
			<img src="../../assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal" />
			<img src="../../assets/images/ic_tab_home_active.png" alt="" slot="icon-active" />
			首页
		</footer-item>
		<footer-item id="tab2">
			<img src="../../assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal" />
			<img src="../../assets/images/ic_tab_subject_active.png" alt="" slot="icon-active" />
			书影音
		</footer-item>
		<footer-item id="tab3">
			<img src="../../assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal" />
			<img src="../../assets/images/ic_tab_status_active.png" alt="" slot="icon-active" />
			广播
		</footer-item>
		<footer-item id="tab4">
			<img src="../../assets/images/ic_tab_group_normal.png" alt="" slot="icon-normal" />
			<img src="../../assets/images/ic_tab_group_active.png" alt="" slot="icon-active" />
			小组
		</footer-item>
		<footer-item id="tab5">
			<img src="../../assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal" />
			<img src="../../assets/images/ic_tab_profile_active.png" alt="" slot="icon-active" />
			我的
		</footer-item>
	</footer-bar>
</template>

<script>
	import footer from '@/components/common/footer-bar'
	import footerItem from '@/components/common/footer-item'
	export default {
		name : 'index',
		components : {
			'footer-bar' : footer,
			'footer-item' : footerItem
		},
		data : function(){
			return {
				select : 'tab1'
			}
		}
	}
</script>

<style>
	
    
</style>





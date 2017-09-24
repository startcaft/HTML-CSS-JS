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
    <!--<div class="d_footer">
        <div id="tab1" class="footer_item is-active">
            <a>
                <span class="item_icon">
                    <img src="../../assets/images/ic_tab_home_active.png" />
                </span>
                <span class="item_text">首页</span>
            </a>
        </div>
        <div id="tab2" class="footer_item">
            <a>
                <span class="item_icon">
                    <img src="../../assets/images/ic_tab_subject_normal.png" />
                </span>
                <span class="item_text">书影城</span>
            </a>
        </div>
        <div id="tab3" class="footer_item">
            <a>
                <span class="item_icon">
                    <img src="../../assets/images/ic_tab_status_normal.png" />
                </span>
                <span class="item_text">广播</span>
            </a>
        </div>
        <div id="tab4" class="footer_item">
            <a>
                <span class="item_icon">
                    <img src="../../assets/images/ic_tab_group_normal.png" />
                </span>
                <span class="item_text">小组</span>
            </a>
        </div>
        <div id="tab5" class="footer_item">
            <a>
                <span class="item_icon">
                    <img src="../../assets/images/ic_tab_profile_normal.png" />
                </span>
                <span class="item_text">我的</span>
            </a>
        </div>
    </div>-->
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





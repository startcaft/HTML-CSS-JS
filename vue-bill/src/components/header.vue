<template>
    <div>
        <span class="page_cover" @click="toggleMenu" v-if="show"></span>
        <header class="header-bar">
            <span class="menu_btn" @click="toggleMenu"></span>
            <span class="header_title">
				<span class="vue_logo"></span>
				<span class="headerbar_title" v-if="tab == 'all'">全部</span>
				<span class="headerbar_title" v-else-if="tab == 'good'">精华</span>
				<span class="headerbar_title" v-else-if="tab == 'share'">分享</span>
				<span class="headerbar_title" v-else-if="tab == 'ask'">问答</span>
				<span class="headerbar_title" v-else-if="tab == 'job'">招聘</span>
			</span>
            <router-link :to="{name:'login'}" v-if="!loginname" class="publish_btn">
				<i class="iconfont icon-publish"></i>
			</router-link>
            <router-link :to="{name:'create'}" v-else class="publish_btn">
				<i class="iconfont icon-publish"></i>
			</router-link>
        </header>
        <nv-menu :show="show"></nv-menu>
    </div>
</template>

<style lang="less">
    @import '../styles/header.less';
	@import '../styles/iconfont/iconfont.css';
</style>

<script>
    import nvMenu from '@/components/menu'
    export default {
        data : function(){
            return {
                show : false,
                tab : 'all',
                loginname : ''
            }
        },
        mounted : function(){
            let loginname = localStorage.getItem('name');
            this.loginname = loginname
        },
        methods:{
            toggleMenu : function(){
                let v = this;
                this.show = !this.show;
            }
        },
        watch:{
			'$route'(to,from){
				var v =this;
				var tab = v.$route.query.tab;
				v.tab = tab;
			}
		},
        components : {
            nvMenu
        }
    }
</script>



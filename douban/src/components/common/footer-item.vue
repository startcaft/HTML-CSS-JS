<template>
	<div class="footer_item is-active" :class="{'is-active':isActive}">
        <a @click="$parent.$emit('input',id)">
            <span class="item_icon" v-show="!isActive">
                <slot name="icon-normal"></slot>
            </span>
            <span class="item_icon" v-show="isActive">
                <slot name="icon-active"></slot>
            </span>
            <span class="item_text">
            	<slot></slot>
            </span>
        </a>
    </div>
</template>

<script>
	export default {
		props: ['id'],
		computed: {
			isActive : function(){
				if(this.$parent.value === this.id){
					return true;
				}
			}
		}
	}
</script>

<style>
	.d_footer .footer_item {
    	flex: 1;
    	text-align: center;
    }
    .d_footer .footer_item > a {
    	display: block;
    }
    .d_footer .footer_item > a .item_icon > img{
    	height: 32px;
    	width: 32px;
    }
    .d_footer .footer_item > a .item_text {
   		display: block;
      	font-size: 10px;
      	color:#949494;
      	line-height: 16px;
    }
    .d_footer .footer_item .is-active {
    	color: #42bd56;
    }
</style>
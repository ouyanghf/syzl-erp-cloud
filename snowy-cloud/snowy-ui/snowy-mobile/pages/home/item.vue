<template>
	<view>
		<!-- 轮播图 -->
		<view class="img-item" v-if="['swiper',].includes(code) && isShow">
			<home-swiper></home-swiper>
		</view>
		<!-- 图表 插件地址：https://ext.dcloud.net.cn/plugin?id=271 官方地址：https://www.ucharts.cn/v2/#/demo/index-->
		<view class="item snowy-shadow" v-if="['chart',].includes(code) && isShow">
			<home-chart></home-chart>
		</view>
		<!-- 日程 -->
		<view class="item snowy-shadow" v-if="['schedule',].includes(code) && isShow">
			<home-schedule></home-schedule>
		</view>
	</view>
</template>
<script setup>
	import HomeSwiper from './home-swiper.vue'
	import HomeChart from './home-chart.vue'
	import HomeSchedule from './home-schedule/index.vue'
	const props = defineProps({
		code: {
			type: String,
			default: '',
			required: true
		},
		isShow: {
			type: Boolean,
			default: false,
			required: true
		},
	})
</script>
<style lang="scss" scoped>
	.img-item {
		margin-bottom: 5rpx;
	}
	.item {
		background-color: #ffffff;
		margin-bottom: 15rpx;
		padding: 10rpx 0;
	}
</style>
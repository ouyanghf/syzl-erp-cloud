<template>
	<view class="search-bar" :style="customStyle">
		<view class="search-bar-form">
			<view class="search-bar-box">
				<icon type="search" :size="16"></icon>
				<input class="search-bar-input" confirm-type="search" :placeholder="$attrs.placeholder ? $attrs.placeholder: '请输入搜索关键词'" placeholder-class="phcolor" :value="inputVal" @input="inputTyping" @confirm="searchConfirm" />
				<icon type="clear" :size="15" v-if="inputShowed" @tap="clearInput"></icon>
			</view>
		</view>
		<view v-if="$attrs.seniorEnable" class="senior" @tap="seniorSearch">
			<slot><text style="color: #5677fc; font-weight: bold; text-shadow: 2px 2px 4px #ccc;">高级\n搜索</text></slot>
		</view>
	</view>
</template>
<script setup>
	import { ref, watch } from "vue";
	const emits = defineEmits(['update:modelValue', 'confirm', 'clear', 'seniorSearch'])
	const props = defineProps({
		modelValue: [String, Array],
		customStyle: {
			type: Object,
			default: {},
			required: false
		}
	})
	const inputVal = ref("")
	watch(() => props.modelValue, (newValue, oldValue) => {
		inputVal.value = newValue
	}, {
		deep: false,
		immediate: true
	})
	// inputVal.value = props.modelValue
	const inputShowed = ref(false)
	const inputTyping = (e) => {
		inputVal.value = e.detail.value
		inputShowed.value = true
		emits('update:modelValue', inputVal.value)
	}
	const clearInput = () => {
		inputVal.value = "";
		inputShowed.value = false
		uni.hideKeyboard() //强行隐藏键盘
		emits('update:modelValue', inputVal.value)
		emits('clear')
	}
	const searchConfirm = () => {
		emits('update:modelValue', inputVal.value)
		emits('confirm', inputVal.value)
	}
	const seniorSearch = () => {
		emits('seniorSearch')
	}
</script>
<style lang="scss" scoped>
	.search-bar {
		display: flex;
		align-items: center;
		position: relative;
		padding: 20rpx 20rpx 20rpx;
		background-color: #fff;
		border-radius: 10rpx;

		.search-bar-form {
			flex: 1;
			position: relative;
			border-radius: 10rpx; // 32rpx;
			background: #f2f5f7; // #F8F8F8F8; // #f2f5f7;
			box-shadow: 0 2px 2px #ccc;

			.search-bar-box {
				display: flex;
				align-items: center;
				position: relative;
				padding-left: 20rpx;
				padding-right: 20rpx;
				height: 75rpx;
				z-index: 1;

				.search-bar-input {
					line-height: normal;
					width: 100%;
					padding-left: 20rpx;
					font-size: 30rpx;
					color: #333;
					background: #f2f5f7; //#F8F8F8F8; // #f2f5f7;
				}

				.phcolor {
					font-size: 26rpx;
				}
			}
		}

		.senior {
			margin-left: 20rpx;
		}
	}

	.img {
		width: 45upx;
		height: 45upx;
	}
</style>
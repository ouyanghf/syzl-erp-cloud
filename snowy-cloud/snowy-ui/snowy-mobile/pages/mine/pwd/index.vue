<template>
	<view class="snowy-form">
		<uni-forms ref="form" :value="user" label-position="top" labelWidth="auto">
			<uni-forms-item name="oldPassword" label="旧密码">
				<uni-easyinput type="password" v-model="user.oldPassword" placeholder="请输入旧密码" />
			</uni-forms-item>
			<uni-forms-item name="newPassword" label="新密码">
				<uni-easyinput type="password" v-model="user.newPassword" placeholder="请输入新密码" />
			</uni-forms-item>
			<uni-forms-item name="confirmPassword" label="确认密码">
				<uni-easyinput type="password" v-model="user.confirmPassword" placeholder="请确认新密码" />
			</uni-forms-item>
			<tui-button margin="50rpx 0" :preventClick="true" :shadow="true" @click="submit">提交</tui-button>
		</uni-forms>
	</view>
</template>
<script setup>
	import userCenterApi from "@/api/sys/user-center-api"
	import { onReady } from '@dcloudio/uni-app'
	import { reactive, ref } from 'vue'
	const form = ref()
	const user = reactive({
		oldPassword: undefined,
		newPassword: undefined,
		confirmPassword: undefined
	})
	const rules = {
		oldPassword: {
			rules: [{
				required: true,
				errorMessage: '旧密码不能为空'
			}, ]
		},
		newPassword: {
			rules: [{
				required: true,
				errorMessage: '新密码不能为空',
			}, {
				minLength: 6,
				maxLength: 20,
				errorMessage: '长度在 6 到 20 个字符'
			}]
		},
		confirmPassword: {
			rules: [{
				required: true,
				errorMessage: '确认密码不能为空'
			}, {
				validateFunction: (rule, value, data) => data.newPassword === value,
				errorMessage: '两次输入的密码不一致'
			}]
		},
	}
	onReady(() => {
		form.value.setRules(rules)
	})
	const submit = () => {
		form.value.validate().then(res => {
			userCenterApi.userUpdatePassword({
				password: user.oldPassword,
				newPassword: user.newPassword
			}).then(data => {
			})
		})
	}
</script>
<style lang="scss" scoped>
</style>
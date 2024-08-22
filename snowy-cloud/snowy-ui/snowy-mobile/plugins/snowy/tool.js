import store from '@/store'
const tool = {}
// 字典翻译方法，界面插槽使用方法 {{ $TOOL.dictType('sex', record.sex) }}
tool.dictTypeData = (dictValue, value) => {
	// const dictTypeTree = tool.dictDataAll()
	const dictTypeTree = store.getters.dictTypeTreeData
	if (!dictTypeTree) {
		return '需重新登录'
	}
	const tree = dictTypeTree.find((item) => item.dictValue === dictValue)
	if (!tree) {
		return '无此字典'
	}
	const children = tree.children
	const dict = children.find((item) => item.dictValue === value)
	return dict?.name || '无此字典'
}
// 获取某个code下字典的列表，基于dictTypeList 改进，保留老的，逐步替换
tool.dictList = (dictValue) => {
	// const dictTypeTree = tool.dictDataAll()
	const dictTypeTree = store.getters.dictTypeTreeData
	if (!dictTypeTree) {
		return []
	}
	const tree = dictTypeTree.find((item) => item.dictValue === dictValue)
	if (tree) {
		return tree.children.map((item) => {
			return {
				value: item['dictValue'],
				text: item['name']
			}
		})
	}
	return []
}
// 判断不为空
tool.isNotEmpty = (value) => {
	if (typeof value === 'object') {
		for (const key in value) {
			return true
		}
		return false
	}
	return !(value === null || value === undefined || value === 'undefined' || value === '')
}
// 判断为空
tool.isEmpty = (value) => {
	return !tool.isNotEmpty(value)
}
export default tool
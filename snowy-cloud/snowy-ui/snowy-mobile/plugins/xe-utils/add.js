import helperNumberAdd from './helperNumberAdd'
import toNumber from './toNumber'

/**
 * 加法运算
 *
 * @param { Number } num1 被加数
 * @param { Number } num2 加数
 * @return {Number}
 */
function add (num1, num2) {
  return helperNumberAdd(toNumber(num1), toNumber(num2))
}

export default add

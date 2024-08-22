import { PageVo } from '@/api/model/pageVo';

export interface QuerySettleInItemVo extends PageVo {
  /**
   * 编号
   */
  code: string;

  /**
   * 名称
   */
  name: string;

  /**
   * 状态
   */
  available: boolean;
}

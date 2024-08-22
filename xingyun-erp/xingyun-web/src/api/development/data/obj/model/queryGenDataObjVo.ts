import { PageVo } from '@/api/model/pageVo';

export interface QueryGenDataObjVo extends PageVo {
  /**
   * 名称
   */
  name: string;

  /**
   * 分类ID
   */
  categoryId: string;

  /**
   * 状态
   */
  available: boolean;
}

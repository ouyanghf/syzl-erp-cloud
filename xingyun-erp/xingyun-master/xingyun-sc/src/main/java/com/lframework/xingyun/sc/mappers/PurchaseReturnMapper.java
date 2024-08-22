package com.lframework.xingyun.sc.mappers;

import com.lframework.starter.web.mapper.BaseMapper;
import com.lframework.xingyun.sc.dto.purchase.returned.PurchaseReturnFullDto;
import com.lframework.xingyun.sc.entity.PurchaseReturn;
import com.lframework.xingyun.sc.enums.SettleStatus;
import com.lframework.xingyun.sc.vo.purchase.returned.QueryPurchaseReturnVo;
import com.lframework.xingyun.template.core.annotations.permission.DataPermission;
import com.lframework.xingyun.template.core.annotations.permission.DataPermissions;
import com.lframework.xingyun.template.core.annotations.sort.Sort;
import com.lframework.xingyun.template.core.annotations.sort.Sorts;
import com.lframework.xingyun.template.core.components.permission.SysDataPermissionDataPermissionType;
import java.time.LocalDateTime;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * <p>
 * Mapper 接口
 * </p>
 *
 * @author zmj
 * @since 2021-10-16
 */
public interface PurchaseReturnMapper extends BaseMapper<PurchaseReturn> {

  /**
   * 查询列表
   *
   * @param vo
   * @return
   */
  @Sorts({
      @Sort(value = "code", alias = "o", autoParse = true),
      @Sort(value = "createTime", alias = "o", autoParse = true),
      @Sort(value = "approveTime", alias = "o", autoParse = true),
  })
  @DataPermissions(type = SysDataPermissionDataPermissionType.ORDER, value = {
      @DataPermission(template = "order", alias = "r")
  })
  List<PurchaseReturn> query(@Param("vo") QueryPurchaseReturnVo vo);

  /**
   * 根据ID查询
   *
   * @param id
   * @return
   */
  PurchaseReturnFullDto getDetail(String id);

  /**
   * 查询已审核列表
   *
   * @param supplierId
   * @param startTime
   * @param endTime
   * @return
   */
  List<PurchaseReturn> getApprovedList(@Param("supplierId") String supplierId,
      @Param("startTime") LocalDateTime startTime, @Param("endTime") LocalDateTime endTime,
      @Param("settleStatus") SettleStatus settleStatus);
}

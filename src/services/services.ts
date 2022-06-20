/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 5
 */

import { AxiosRequestConfig } from "axios";
import { SwaggerResponse } from "./config";
import { Http } from "./httpRequest";
import {
  AccountAuthority,
  AccountGroup,
  AccountInformation,
  AreaInformations,
  AttentionRecord,
  CityInformations,
  CompanyInformation,
  DeleteAccountInfosP0QueryParams,
  DeliveryRecord,
  DirectionTags,
  EducationExperience,
  FilterInformation,
  GarnerRecord,
  GetAdminAccountauthoritiesQueryParams,
  GetAdminAccountgroupsQueryParams,
  GetAdminAccountsQueryParams,
  GetAreaInformationsQueryParams,
  GetCompanyInfosP0BigDataQueryParams,
  GetCompanyInfosP0DeliveryRecordsQueryParams,
  GetCompanyInfosP0PositionInfosQueryParams,
  GetCompanyInfosP0SawMeRecordsQueryParams,
  GetCompanyInfosPositionInfosQueryParams,
  GetCompanyInfosQueryParams,
  GetDirectionTagsQueryParams,
  GetHrInfosP0InspectionRecordsQueryParams,
  GetHrInfosQueryParams,
  GetUserInfosP0AttentionRecordsQueryParams,
  GetUserInfosP0DeliveryRecordsQueryParams,
  GetUserInfosP0EduExperiencesQueryParams,
  GetUserInfosP0GarnerRecordsQueryParams,
  GetUserInfosP0InspectionRecordsQueryParams,
  GetUserInfosP0JobExpectationsQueryParams,
  GetUserInfosP0ProjectExperiencesQueryParams,
  GetUserInfosP0SawMeRecordsQueryParams,
  GetUserInfosP0WorkExperiencesQueryParams,
  GetUserInfosQueryParams,
  GetVerificationCodeQueryParams,
  HrInformation,
  HrInspectionRecord,
  JobExpectation,
  PositionInformation,
  PositionTypes,
  ProjectExperience,
  UserInformation,
  UserInspectionRecord,
  WorkExperience,
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __DEV__ = process.env.NODE_ENV !== "production";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function overrideConfig(
  config?: AxiosRequestConfig,
  configOverride?: AxiosRequestConfig
): AxiosRequestConfig {
  return {
    ...config,
    ...configOverride,
    headers: {
      ...config?.headers,
      ...configOverride?.headers,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function template(path: string, obj: { [x: string]: any } = {}) {
  Object.keys(obj).forEach((key) => {
    const re = new RegExp(`{${key}}`, "i");
    path = path.replace(re, obj[key]);
  });

  return path;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToForm(requestBody: object) {
  const formData = new FormData();

  Object.entries(requestBody).forEach(([key, value]) => {
    value && formData.append(key, value);
  });

  return formData;
}

/**
 *
 * 注销账号
 */
export const deleteAccountInfosP0 = (
  /**
   *
   * 账号ID
   */
  accountInfoId: string,
  queryParams?: DeleteAccountInfosP0QueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteAccountInfosP0.key, { accountInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteAccountInfosP0.key = "/accountInfos/{accountInfoId}";

/**
 *
 * 删除账号权限信息
 */
export const deleteAdminAccountauthoritiesP0 = (
  /**
   *
   * 账号权限ID
   */
  accountauthorityid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountAuthority;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteAdminAccountauthoritiesP0.key, { accountauthorityid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteAdminAccountauthoritiesP0.key =
  "/admin/accountauthorities/{accountauthorityid}";

/**
 *
 * 删除账号组
 */
export const deleteAdminAccountgroupsP0 = (
  /**
   *
   * 账号组ID
   */
  accountgroupid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountGroup;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteAdminAccountgroupsP0.key, { accountgroupid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteAdminAccountgroupsP0.key = "/admin/accountgroups/{accountgroupid}";

/**
 *
 * 删除账号信息
 */
export const deleteAdminAccountsP0 = (
  /**
   *
   * 账号ID
   */
  accountId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteAdminAccountsP0.key, { accountId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteAdminAccountsP0.key = "/admin/accounts/{accountId}";

/**
 *
 * 删除职位信息
 */
export const deleteCompanyInfosP0PositionInfosP1 = (
  /**
   *
   * 公司信息ID
   */
  companyInfoId: string,
  /**
   *
   * 职位信息ID
   */
  positionInfoId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: PositionInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteCompanyInfosP0PositionInfosP1.key, {
      companyInfoId,
      positionInfoId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteCompanyInfosP0PositionInfosP1.key =
  "/companyInfos/{companyInfoId}/positionInfos/{positionInfoId}";

/**
 *
 * 删除查看记录
 */
export const deleteHrInfosP0InspectionRecordsP1 = (
  /**
   *
   * 用户信息ID
   */
  hrInfoId: string,
  /**
   *
   * 查看记录ID
   */
  inspectionRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 查看记录
     *
     */
    body: HrInspectionRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteHrInfosP0InspectionRecordsP1.key, {
      hrInfoId,
      inspectionRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteHrInfosP0InspectionRecordsP1.key =
  "/hrInfos/{hrInfoId}/inspectionRecords/{inspectionRecordId}";

/**
 *
 * 删除关注记录
 */
export const deleteUserInfosP0AttentionRecordsP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 关注记录ID
   */
  attentionRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AttentionRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserInfosP0AttentionRecordsP1.key, {
      userInfoId,
      attentionRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserInfosP0AttentionRecordsP1.key =
  "/userInfos/{userInfoId}/attentionRecords/{attentionRecordId}";

/**
 *
 * 删除投递记录
 */
export const deleteUserInfosP0DeliveryRecordsP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 投递记录ID
   */
  deliveryRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: DeliveryRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserInfosP0DeliveryRecordsP1.key, {
      userInfoId,
      deliveryRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserInfosP0DeliveryRecordsP1.key =
  "/userInfos/{userInfoId}/deliveryRecords/{deliveryRecordId}";

/**
 *
 * 删除教育经历
 */
export const deleteUserInfosP0EduExperiencesP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 教育经历ID
   */
  eduExperienceId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: EducationExperience;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserInfosP0EduExperiencesP1.key, {
      userInfoId,
      eduExperienceId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserInfosP0EduExperiencesP1.key =
  "/userInfos/{userInfoId}/eduExperiences/{eduExperienceId}";

/**
 *
 * 删除收藏记录
 */
export const deleteUserInfosP0GarnerRecordsP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 收藏记录ID
   */
  garnerRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: GarnerRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserInfosP0GarnerRecordsP1.key, {
      userInfoId,
      garnerRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserInfosP0GarnerRecordsP1.key =
  "/userInfos/{userInfoId}/garnerRecords/{garnerRecordId}";

/**
 *
 * 删除查看记录
 */
export const deleteUserInfosP0InspectionRecordsP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 查看记录ID
   */
  inspectionRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: UserInspectionRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserInfosP0InspectionRecordsP1.key, {
      userInfoId,
      inspectionRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserInfosP0InspectionRecordsP1.key =
  "/userInfos/{userInfoId}/inspectionRecords/{inspectionRecordId}";

/**
 *
 * 删除求职期望
 */
export const deleteUserInfosP0JobExpectationsP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 求职期望ID
   */
  jobExpectationId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: JobExpectation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserInfosP0JobExpectationsP1.key, {
      userInfoId,
      jobExpectationId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserInfosP0JobExpectationsP1.key =
  "/userInfos/{userInfoId}/jobExpectations/{jobExpectationId}";

/**
 *
 * 删除项目经历
 */
export const deleteUserInfosP0ProjectExperiencesP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 项目经历ID
   */
  projectExperienceId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 项目经历
     *
     */
    body: ProjectExperience;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserInfosP0ProjectExperiencesP1.key, {
      userInfoId,
      projectExperienceId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserInfosP0ProjectExperiencesP1.key =
  "/userInfos/{userInfoId}/projectExperiences/{projectExperienceId}";

/**
 *
 * 删除工作经历
 */
export const deleteUserInfosP0WorkExperiencesP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 工作经历ID
   */
  workExperienceId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: WorkExperience;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserInfosP0WorkExperiencesP1.key, {
      userInfoId,
      workExperienceId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserInfosP0WorkExperiencesP1.key =
  "/userInfos/{userInfoId}/workExperiences/{workExperienceId}";

/**
 *
 * 查询所有账号权限信息
 */
export const getAdminAccountauthorities = (
  queryParams?: GetAdminAccountauthoritiesQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountAuthority[];
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getAdminAccountauthorities.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAdminAccountauthorities.key = "/admin/accountauthorities";

/**
 *
 * 查询账号权限信息
 */
export const getAdminAccountauthoritiesP0 = (
  /**
   *
   * 账号权限ID
   */
  accountauthorityid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountAuthority;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getAdminAccountauthoritiesP0.key, { accountauthorityid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAdminAccountauthoritiesP0.key =
  "/admin/accountauthorities/{accountauthorityid}";

/**
 *
 * 查询所有账户组信息
 */
export const getAdminAccountgroups = (
  queryParams?: GetAdminAccountgroupsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountGroup[];
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getAdminAccountgroups.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAdminAccountgroups.key = "/admin/accountgroups";

/**
 *
 * 查询账号组信息
 */
export const getAdminAccountgroupsP0 = (
  /**
   *
   * 账号组ID
   */
  accountgroupid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountGroup;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getAdminAccountgroupsP0.key, { accountgroupid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAdminAccountgroupsP0.key = "/admin/accountgroups/{accountgroupid}";

/**
 *
 * 查询所有账号信息
 */
export const getAdminAccounts = (
  queryParams?: GetAdminAccountsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation[];
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getAdminAccounts.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAdminAccounts.key = "/admin/accounts/";

/**
 *
 * 查询账号信息
 */
export const getAdminAccountsP0 = (
  /**
   *
   * 账号ID
   */
  accountId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getAdminAccountsP0.key, { accountId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAdminAccountsP0.key = "/admin/accounts/{accountId}";

/**
 *
 * 查询地区信息
 */
export const getAreaInformations = (
  queryParams?: GetAreaInformationsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 地区信息
     *
     */
    body: AreaInformations;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getAreaInformations.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAreaInformations.key = "/areaInformations";

/**
 *
 * 查询城市信息
 */
export const getCityInformations = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 城市信息
     *
     */
    body: CityInformations;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getCityInformations.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCityInformations.key = "/cityInformations";

/**
 *
 * 查询所有公司信息
 */
export const getCompanyInfos = (
  queryParams?: GetCompanyInfosQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      /**
       *
       * 公司信息列表
       *
       */
      companyInformations: CompanyInformation[];
      /**
       *
       * 记录总数
       *
       */
      totalCount: number;
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getCompanyInfos.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyInfos.key = "/companyInfos";

/**
 *
 * 查询公司信息
 */
export const getCompanyInfosP0 = (
  /**
   *
   * 公司信息ID
   */
  companyInfoId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: CompanyInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getCompanyInfosP0.key, { companyInfoId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyInfosP0.key = "/companyInfos/{companyInfoId}";

/**
 *
 * 查询历史大数据
 */
export const getCompanyInfosP0BigData = (
  /**
   *
   * 公司信息ID
   */
  companyInfoId: string,
  queryParams?: GetCompanyInfosP0BigDataQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 历史大数据列表
     *
     */
    body: {
      /**
       *
       * 记录日期
       *
       */
      date: string;
      /**
       *
       * 投递记录数量
       *
       */
      deliveryRecordCount: number;
      /**
       *
       * 浏览记录数量
       *
       */
      inspectionRecordCount: number;
      /**
       *
       * 在线沟通数量
       *
       */
      onlineCommunicateCount: number;
    }[];
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getCompanyInfosP0BigData.key, { companyInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyInfosP0BigData.key = "/companyInfos/{companyInfoId}/bigData";

/**
 *
 * 查询所有投递记录
 */
export const getCompanyInfosP0DeliveryRecords = (
  companyInfoId: string,
  queryParams?: GetCompanyInfosP0DeliveryRecordsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      /**
       *
       * 投递记录列表
       *
       */
      deliveryRecords: DeliveryRecord[];
      /**
       *
       * 记录总数
       *
       */
      totalCount: number;
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getCompanyInfosP0DeliveryRecords.key, { companyInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyInfosP0DeliveryRecords.key =
  "/companyInfos/{companyInfoId}/deliveryRecords";

/**
 *
 * 查询所有职位信息
 */
export const getCompanyInfosP0PositionInfos = (
  /**
   *
   * 公司信息ID
   */
  companyInfoId: string,
  queryParams?: GetCompanyInfosP0PositionInfosQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      /**
       *
       * 职位信息列表
       *
       */
      positionInformations: PositionInformation[];
      /**
       *
       * 记录总数
       *
       */
      totalCount: number;
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getCompanyInfosP0PositionInfos.key, { companyInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyInfosP0PositionInfos.key =
  "/companyInfos/{companyInfoId}/positionInfos";

/**
 *
 * 查询职位信息
 */
export const getCompanyInfosP0PositionInfosP1 = (
  /**
   *
   * 公司信息ID
   */
  companyInfoId: string,
  /**
   *
   * 职位信息ID
   */
  positionInfoId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: PositionInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getCompanyInfosP0PositionInfosP1.key, {
      companyInfoId,
      positionInfoId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyInfosP0PositionInfosP1.key =
  "/companyInfos/{companyInfoId}/positionInfos/{positionInfoId}";

/**
 *
 * 查询谁看过我记录
 */
export const getCompanyInfosP0SawMeRecords = (
  /**
   *
   * 公司信息ID
   */
  companyInfoId: string,
  queryParams?: GetCompanyInfosP0SawMeRecordsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      /**
       *
       * 用户查看记录列表
       *
       */
      hrInspectionRecords: UserInspectionRecord[];
      /**
       *
       * 记录总数
       *
       */
      totalCount: number;
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getCompanyInfosP0SawMeRecords.key, { companyInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyInfosP0SawMeRecords.key =
  "/companyInfos/{companyInfoId}/sawMeRecords";

/**
 *
 * 查询所有职位信息
 */
export const getCompanyInfosPositionInfos = (
  queryParams?: GetCompanyInfosPositionInfosQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      /**
       *
       * 职位信息列表
       *
       */
      positionInformations: PositionInformation[];
      /**
       *
       * 记录总数
       *
       */
      totalCount: number;
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getCompanyInfosPositionInfos.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyInfosPositionInfos.key = "/companyInfos/positionInfos";

/**
 *
 * 查询细分标签
 */
export const getDirectionTags = (
  queryParams?: GetDirectionTagsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 细分标签
     *
     */
    body: DirectionTags;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getDirectionTags.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getDirectionTags.key = "/directionTags";

/**
 *
 * 查询筛选信息
 */
export const getFilterInformation = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 筛选信息
     *
     */
    body: FilterInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getFilterInformation.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFilterInformation.key = "/filterInformation";

/**
 *
 * 查询所有人管信息
 */
export const getHrInfos = (
  queryParams?: GetHrInfosQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      /**
       *
       * HR信息列表
       *
       */
      HrInformations: HrInformation[];
      /**
       *
       * 记录总数
       *
       */
      totalCount: number;
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getHrInfos.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHrInfos.key = "/hrInfos";

/**
 *
 * 查询人管信息
 */
export const getHrInfosP0 = (
  /**
   *
   * 公司信息ID
   */
  hrInfoId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: HrInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getHrInfosP0.key, { hrInfoId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHrInfosP0.key = "/hrInfos/{hrInfoId}";

/**
 *
 * 查询所有查看记录
 */
export const getHrInfosP0InspectionRecords = (
  /**
   *
   * 用户信息ID
   */
  hrInfoId: string,
  queryParams?: GetHrInfosP0InspectionRecordsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      /**
       *
       * 记录总数
       *
       */
      totalCount: number;
      /**
       *
       * 用户查看记录列表
       *
       */
      userInspectionRecords: UserInspectionRecord[];
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getHrInfosP0InspectionRecords.key, { hrInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHrInfosP0InspectionRecords.key = "/hrInfos/{hrInfoId}/inspectionRecords";

/**
 *
 * 查询查看记录
 */
export const getHrInfosP0InspectionRecordsP1 = (
  /**
   *
   * 用户信息ID
   */
  hrInfoId: string,
  /**
   *
   * 查看记录ID
   */
  inspectionRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 查看记录
     *
     */
    body: HrInspectionRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getHrInfosP0InspectionRecordsP1.key, {
      hrInfoId,
      inspectionRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHrInfosP0InspectionRecordsP1.key =
  "/hrInfos/{hrInfoId}/inspectionRecords/{inspectionRecordId}";

/**
 *
 * 查询新版本
 */
export const getNewVersion = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 版本信息
     *
     */
    body: number;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getNewVersion.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNewVersion.key = "/newVersion";

/**
 *
 * 查询职位类型
 */
export const getPositionTypes = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 职位类型
     *
     */
    body: PositionTypes;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getPositionTypes.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getPositionTypes.key = "/positionTypes";

/**
 *
 * 查询推荐人才
 */
export const getRecommendations = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 用户信息ID
     *
     */
    body: string[];
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getRecommendations.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getRecommendations.key = "/recommendations";

/**
 *
 * 查询所有用户信息
 */
export const getUserInfos = (
  queryParams?: GetUserInfosQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      /**
       *
       * 记录总数
       *
       */
      totalCount: number;
      /**
       *
       * 用户信息列表
       *
       */
      userInformations: UserInformation[];
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getUserInfos.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfos.key = "/userInfos";

/**
 *
 * 查询用户信息
 */
export const getUserInfosP0 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 用户信息
     *
     */
    body: UserInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0.key, { userInfoId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0.key = "/userInfos/{userInfoId}";

/**
 *
 * 查询所有关注记录
 */
export const getUserInfosP0AttentionRecords = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0AttentionRecordsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      /**
       *
       * 关注记录列表
       *
       */
      attentionRecords: AttentionRecord[];
      /**
       *
       * 记录总数
       *
       */
      totalCount: number;
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0AttentionRecords.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0AttentionRecords.key = "/userInfos/{userInfoId}/attentionRecords";

/**
 *
 * 查询关注记录
 */
export const getUserInfosP0AttentionRecordsP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 关注记录ID
   */
  attentionRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AttentionRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0AttentionRecordsP1.key, {
      userInfoId,
      attentionRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0AttentionRecordsP1.key =
  "/userInfos/{userInfoId}/attentionRecords/{attentionRecordId}";

/**
 *
 * 查询所有投递记录
 */
export const getUserInfosP0DeliveryRecords = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0DeliveryRecordsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      /**
       *
       * 投递记录列表
       *
       */
      deliveryRecords: DeliveryRecord[];
      /**
       *
       * 记录总数
       *
       */
      totalCount: number;
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0DeliveryRecords.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0DeliveryRecords.key = "/userInfos/{userInfoId}/deliveryRecords";

/**
 *
 * 查询投递记录
 */
export const getUserInfosP0DeliveryRecordsP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 投递记录ID
   */
  deliveryRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: DeliveryRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0DeliveryRecordsP1.key, {
      userInfoId,
      deliveryRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0DeliveryRecordsP1.key =
  "/userInfos/{userInfoId}/deliveryRecords/{deliveryRecordId}";

/**
 *
 * 查询所有教育经历
 */
export const getUserInfosP0EduExperiences = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0EduExperiencesQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      /**
       *
       * 教育经历列表
       *
       */
      educationExperiences: EducationExperience[];
      /**
       *
       * 记录总数
       *
       */
      totalCount: number;
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0EduExperiences.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0EduExperiences.key = "/userInfos/{userInfoId}/eduExperiences";

/**
 *
 * 查询教育经历
 */
export const getUserInfosP0EduExperiencesP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 教育经历ID
   */
  eduExperienceId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: EducationExperience;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0EduExperiencesP1.key, {
      userInfoId,
      eduExperienceId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0EduExperiencesP1.key =
  "/userInfos/{userInfoId}/eduExperiences/{eduExperienceId}";

/**
 *
 * 查询所有收藏记录
 */
export const getUserInfosP0GarnerRecords = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0GarnerRecordsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      /**
       *
       * 收藏记录列表
       *
       */
      garnerRecords: GarnerRecord[];
      /**
       *
       * 记录总数
       *
       */
      totalCount: number;
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0GarnerRecords.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0GarnerRecords.key = "/userInfos/{userInfoId}/garnerRecords";

/**
 *
 * 查询收藏记录
 */
export const getUserInfosP0GarnerRecordsP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 收藏记录ID
   */
  garnerRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: GarnerRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0GarnerRecordsP1.key, { userInfoId, garnerRecordId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0GarnerRecordsP1.key =
  "/userInfos/{userInfoId}/garnerRecords/{garnerRecordId}";

/**
 *
 * 查询所有查看记录
 */
export const getUserInfosP0InspectionRecords = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0InspectionRecordsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      /**
       *
       * 记录总数
       *
       */
      totalCount: number;
      /**
       *
       * 查看记录列表
       *
       */
      userInspectionRecords: UserInspectionRecord[];
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0InspectionRecords.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0InspectionRecords.key =
  "/userInfos/{userInfoId}/inspectionRecords";

/**
 *
 * 查询查看记录
 */
export const getUserInfosP0InspectionRecordsP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 查看记录ID
   */
  inspectionRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: UserInspectionRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0InspectionRecordsP1.key, {
      userInfoId,
      inspectionRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0InspectionRecordsP1.key =
  "/userInfos/{userInfoId}/inspectionRecords/{inspectionRecordId}";

/**
 *
 * 查询所有求职期望
 */
export const getUserInfosP0JobExpectations = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0JobExpectationsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      /**
       *
       * 求职期望列表
       *
       */
      jobExpectations: JobExpectation[];
      /**
       *
       * 记录总数
       *
       */
      totalCount: number;
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0JobExpectations.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0JobExpectations.key = "/userInfos/{userInfoId}/jobExpectations";

/**
 *
 * 查询求职期望
 */
export const getUserInfosP0JobExpectationsP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 求职期望ID
   */
  jobExpectationId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: JobExpectation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0JobExpectationsP1.key, {
      userInfoId,
      jobExpectationId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0JobExpectationsP1.key =
  "/userInfos/{userInfoId}/jobExpectations/{jobExpectationId}";

/**
 *
 * 查询所有项目经历
 */
export const getUserInfosP0ProjectExperiences = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0ProjectExperiencesQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      /**
       *
       * 项目经历列表
       *
       */
      projectExperiences: ProjectExperience[];
      /**
       *
       * 记录总数
       *
       */
      totalCount: number;
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0ProjectExperiences.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0ProjectExperiences.key =
  "/userInfos/{userInfoId}/projectExperiences";

/**
 *
 * 查询项目经历
 */
export const getUserInfosP0ProjectExperiencesP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 项目经历ID
   */
  projectExperienceId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 项目经历
     *
     */
    body: ProjectExperience;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0ProjectExperiencesP1.key, {
      userInfoId,
      projectExperienceId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0ProjectExperiencesP1.key =
  "/userInfos/{userInfoId}/projectExperiences/{projectExperienceId}";

/**
 *
 * 查询谁看过我记录
 */
export const getUserInfosP0SawMeRecords = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0SawMeRecordsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      /**
       *
       * HR查看记录列表
       *
       */
      hrInspectionRecords: HrInspectionRecord[];
      /**
       *
       * 记录总数
       *
       */
      totalCount: number;
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0SawMeRecords.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0SawMeRecords.key = "/userInfos/{userInfoId}/sawMeRecords";

/**
 *
 * 查询所有工作经历
 */
export const getUserInfosP0WorkExperiences = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0WorkExperiencesQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      /**
       *
       * 记录总数
       *
       */
      totalCount: number;
      /**
       *
       * 工作经历列表
       *
       */
      workExperiences: WorkExperience[];
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0WorkExperiences.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0WorkExperiences.key = "/userInfos/{userInfoId}/workExperiences";

/**
 *
 * 查询工作经历
 */
export const getUserInfosP0WorkExperiencesP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 工作经历ID
   */
  workExperienceId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: WorkExperience;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0WorkExperiencesP1.key, {
      userInfoId,
      workExperienceId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0WorkExperiencesP1.key =
  "/userInfos/{userInfoId}/workExperiences/{workExperienceId}";

/**
 *
 * 获取验证码
 */
export const getVerificationCode = (
  queryParams?: GetVerificationCodeQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getVerificationCode.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getVerificationCode.key = "/verificationCode";

/**
 *
 * 注册账号
 */
export const postAccountInfos = (
  requestBody: {
    /**
     *
     * 账号类型
     *
     * {1:用户,2:HR}
     */
    accountType: "1" | "2";
    /**
     *
     * 密码
     *
     */
    password: string;
    /**
     *
     * 用户名
     *
     */
    userName: string;
    /**
     *
     * 短信验证码
     *
     */
    verificationCode: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postAccountInfos.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAccountInfos.key = "/accountInfos";

/**
 *
 * 登录账号
 */
export const postAccountInfosLogin = (
  requestBody: {
    /**
     *
     * 密码
     *
     */
    password: string;
    /**
     *
     * 用户名
     *
     */
    userName: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 响应结果
     *
     */
    body: {
      accountInformation: AccountInformation;
      /**
       *
       * TOKEN
       *
       */
      token: string;
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.postRequest(
    postAccountInfosLogin.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAccountInfosLogin.key = "/accountInfos/login";

/**
 *
 * 增加账号权限
 */
export const postAdminAccountauthorities = (
  requestBody: {
    /**
     *
     * 账号权限名称
     *
     */
    authorityName: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountAuthority;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.postRequest(
    postAdminAccountauthorities.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAdminAccountauthorities.key = "/admin/accountauthorities";

/**
 *
 * 增加账号组
 */
export const postAdminAccountgroups = (
  requestBody: {
    /**
     *
     * 账号组名称
     *
     */
    groupName: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountGroup;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.postRequest(
    postAdminAccountgroups.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAdminAccountgroups.key = "/admin/accountgroups";

/**
 *
 * 增加账号信息
 */
export const postAdminAccounts = (
  requestBody: {
    /**
     *
     * 账号类型
     *
     * {1:用户,2:HR}
     */
    accountType: "1" | "2";
    /**
     *
     * 详细信息ID
     *
     */
    fullInformationId: string;
    /**
     *
     * 用户名
     *
     */
    userName: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.postRequest(
    postAdminAccounts.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAdminAccounts.key = "/admin/accounts";

/**
 *
 * 上传头像
 */
export const postAvatars = (
  requestBody: {
    /**
     *
     * 头像
     * - Format: binary
     * @example
     *   file://C:\Users\19790\Pictures\Default.jpg
     */
    avatar: File;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postAvatars.key,
    undefined,
    objToForm(requestBody),
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
postAvatars.key = "/avatars";

/**
 *
 * 增加公司信息
 */
export const postCompanyInfos = (
  requestBody: {
    /**
     *
     * 扩展信息
     *
     */
    about: string;
    /**
     *
     * 详细地址
     *
     */
    address: string;
    /**
     *
     * 公司福利
     *
     */
    benefits: string[];
    /**
     *
     * 所在城市
     *
     */
    cityName: string;
    /**
     *
     * 公司名称
     *
     */
    companyName: string;
    /**
     *
     * 领域名称
     *
     */
    comprehensionName: string;
    /**
     *
     * 成立时间
     *
     * - pattern: ^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$
     */
    establishmentTime: string;
    /**
     *
     * 融资阶段
     *
     * {1:未融资,2:天使轮,3:A轮,4:B轮,5:C轮,6:D轮及以上,7:上市公司,8:不需要融资}
     */
    financingStage: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
    /**
     *
     * 公司全称
     *
     */
    fullName: string;
    /**
     *
     * 法定代表人
     *
     */
    legalRepresentative: string;
    /**
     *
     * 公司地点
     *
     */
    location: {
      /**
       *
       * 纬度
       *
       */
      latitude: number;
      /**
       *
       * 经度
       *
       */
      longitude: number;
    };
    /**
     *
     * LOGO地址
     *
     */
    logoUrl: string;
    /**
     *
     * 机构类型
     *
     */
    organizationType: string;
    /**
     *
     * 在招职位
     *
     */
    recruitmentPosition: number;
    /**
     *
     * 注册资本
     *
     */
    registeredCapital: string;
    /**
     *
     * 公司规模
     *
     * {1:少于15人,2:15-50人,3:50-150人,4:150-500人,5:500-2000人,6:2000以上}
     */
    scale: "0" | "1" | "2" | "3" | "4" | "5" | "6";
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postCompanyInfos.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postCompanyInfos.key = "/companyInfos";

/**
 *
 * 增加职位信息
 */
export const postCompanyInfosP0PositionInfos = (
  /**
   *
   * 公司信息ID
   */
  companyInfoId: string,
  requestBody: {
    /**
     *
     * 上限薪资
     *
     * 单位K
     */
    ceilingSalary: number;
    /**
     *
     * 公司信息ID
     *
     */
    companyInformationId: string;
    /**
     *
     * 所属部门
     *
     */
    departmentName: string;
    /**
     *
     * 职位描述
     *
     */
    description: string;
    /**
     *
     * 细分标签
     *
     */
    directionTags: string[];
    /**
     *
     * 学历要求
     *
     * {1:不要求,2:大专,3:本科,4:硕士,5:博士}
     */
    education: "0" | "1" | "2" | "3" | "4" | "5";
    /**
     *
     * 职位亮点
     *
     */
    highlights: string[];
    /**
     *
     * HR信息ID
     *
     */
    hrInformationId: string;
    /**
     *
     * 面试信息
     *
     */
    interviewInfo: {
      /**
       *
       * 面试说明
       *
       * {1:可周末面试,2:包含笔试,3:可下班面试,4:包含面试作业}
       */
      illustrate: "1" | "2" | "3" | "4";
      /**
       *
       * 面试形式
       *
       * {1:现场面试,2:视频面试,3:电话面试}
       */
      situation: "1" | "2" | "3";
      /**
       *
       * 面试时长
       *
       * {1:一天内完成,2:分多次完成}
       */
      time: "1" | "2";
      /**
       *
       * 面试轮数
       *
       * {1:1-2轮次,2:3-4轮次,3:5-6轮次,4:暂不确定}
       */
      wheel: "1" | "2" | "3" | "4";
    };
    /**
     *
     * 下班时间
     *
     */
    overTime: string;
    /**
     *
     * 职位名称
     *
     */
    positionName: string;
    /**
     *
     * 职位类型
     *
     */
    positionType: string;
    /**
     *
     * 起始薪资
     *
     * 单位K
     */
    startingSalary: number;
    /**
     *
     * 周末休息时间
     *
     * {1:周末双休:,2:周末单休,3:大小周}
     */
    weekendReleaseTime: "0" | "1" | "2" | "3";
    /**
     *
     * 工作地区
     *
     */
    workAreaName: string;
    /**
     *
     * 工作城市
     *
     */
    workCityName: string;
    /**
     *
     * 工作省份
     *
     */
    workProvinceName: string;
    /**
     *
     * 上班时间
     *
     */
    workTime: string;
    /**
     *
     * 工作类型
     *
     * {1:全职,2:兼职,3:实习}
     */
    workType: "0" | "1" | "2" | "3";
    /**
     *
     * 工作地点
     *
     */
    workingPlace: {
      /**
       *
       * 纬度
       *
       */
      latitude: number;
      /**
       *
       * 经度
       *
       */
      longitude: number;
    };
    /**
     *
     * 工作年限
     *
     * {1:经验不限,2:在校/应届,3:3年及以下,4:3-5年,5:5-10年,6:10年以上}
     */
    workingYears: "0" | "1" | "2" | "3" | "4" | "5" | "6";
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postCompanyInfosP0PositionInfos.key, { companyInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postCompanyInfosP0PositionInfos.key =
  "/companyInfos/{companyInfoId}/positionInfos";

/**
 *
 * 上传文件
 */
export const postFiles = (
  requestBody: {
    /**
     *
     * 文件
     * - Format: binary
     * @example
     *   file://C:\Users\19790\Downloads\东江人才招聘.md
     */
    file: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postFiles.key,
    undefined,
    objToForm(requestBody),
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
postFiles.key = "/files";

/**
 *
 * 增加关注记录
 */
export const postUserInfosP0AttentionRecords = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  requestBody: {
    /**
     *
     * 公司信息ID
     *
     */
    companyInformationId: string;
    /**
     *
     * 用户信息ID
     *
     */
    userInformationId: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserInfosP0AttentionRecords.key, { userInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserInfosP0AttentionRecords.key =
  "/userInfos/{userInfoId}/attentionRecords";

/**
 *
 * 增加投递记录
 */
export const postUserInfosP0DeliveryRecords = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  requestBody: {
    /**
     *
     * 公司信息ID
     *
     */
    companyInformationId: string;
    /**
     *
     * 职位信息ID
     *
     */
    positionInformationId: string;
    /**
     *
     * 用户信息ID
     *
     */
    userInformationId: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserInfosP0DeliveryRecords.key, { userInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserInfosP0DeliveryRecords.key = "/userInfos/{userInfoId}/deliveryRecords";

/**
 *
 * 增加教育经历
 */
export const postUserInfosP0EduExperiences = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  requestBody: {
    /**
     *
     * 入学时间
     *
     * - pattern: ^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$
     */
    admissionTime: string;
    /**
     *
     * 学历层次
     *
     * {1:大专,2:本科,3:硕士,4:博士}
     */
    education: "0" | "1" | "2" | "3" | "4";
    /**
     *
     * 毕业时间
     *
     * - pattern: ^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$
     */
    graduationTime: string;
    /**
     *
     * 专业名称
     *
     */
    majorName: string;
    /**
     *
     * 学校名称
     *
     */
    schoolName: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserInfosP0EduExperiences.key, { userInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserInfosP0EduExperiences.key = "/userInfos/{userInfoId}/eduExperiences";

/**
 *
 * 增加收藏记录
 */
export const postUserInfosP0GarnerRecords = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  requestBody: {
    /**
     *
     * 公司信息ID
     *
     */
    companyInformationId: string;
    /**
     *
     * 职位信息ID
     *
     */
    positionInformationId: string;
    /**
     *
     * 用户信息ID
     *
     */
    userInformationId: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserInfosP0GarnerRecords.key, { userInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserInfosP0GarnerRecords.key = "/userInfos/{userInfoId}/garnerRecords";

/**
 *
 * 增加求职期望
 */
export const postUserInfosP0JobExpectations = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  requestBody: {
    /**
     *
     * 上限薪资
     *
     * 单位K
     */
    ceilingSalary: number;
    /**
     *
     * 期望城市
     *
     */
    cityName: string;
    /**
     *
     * 细分标签
     *
     */
    directionTags: string[];
    /**
     *
     * 职位名称
     *
     */
    positionName: string;
    /**
     *
     * 职位类型
     *
     * {1:全职,2:兼职,3:实习}
     */
    positionType: "0" | "1" | "2" | "3";
    /**
     *
     * 起始薪资
     *
     * 单位K
     */
    startingSalary: number;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserInfosP0JobExpectations.key, { userInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserInfosP0JobExpectations.key = "/userInfos/{userInfoId}/jobExpectations";

/**
 *
 * 增加项目经历
 */
export const postUserInfosP0ProjectExperiences = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  requestBody: {
    /**
     *
     * 我的成就
     *
     */
    achievement: string;
    /**
     *
     * 结束时间
     *
     * - pattern: ^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$
     */
    endTime: string;
    /**
     *
     * 项目描述
     *
     */
    projectDescription: string;
    /**
     *
     * 项目链接
     *
     */
    projectLink: string;
    /**
     *
     * 项目名称
     *
     */
    projectName: string;
    /**
     *
     * 开始时间
     *
     * - pattern: ^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$
     */
    startTime: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserInfosP0ProjectExperiences.key, { userInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserInfosP0ProjectExperiences.key =
  "/userInfos/{userInfoId}/projectExperiences";

/**
 *
 * 增加工作经历
 */
export const postUserInfosP0WorkExperiences = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  requestBody: {
    /**
     *
     * 公司领域
     *
     */
    companyIndustry: string;
    /**
     *
     * 公司名称
     *
     */
    corporateName: string;
    /**
     *
     * 部门名称
     *
     */
    departmentName: string;
    /**
     *
     * 离职时间
     *
     * - pattern: ^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$
     */
    endTime: string;
    /**
     *
     * 工作内容
     *
     */
    jobContent: string;
    /**
     *
     * 职位名称
     *
     */
    positionName: string;
    /**
     *
     * 职位类型
     *
     * {1:全职,2:兼职,3:实习}
     */
    positionType: "0" | "1" | "2" | "3";
    /**
     *
     * 就职时间
     *
     * - pattern: ^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$
     */
    startTime: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserInfosP0WorkExperiences.key, { userInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserInfosP0WorkExperiences.key = "/userInfos/{userInfoId}/workExperiences";

/**
 *
 * 忘记密码
 */
export const putAccountInfosForget = (
  requestBody: {
    /**
     *
     * 密码
     *
     */
    password: string;
    /**
     *
     * 用户名
     *
     */
    userName: string;
    /**
     *
     * 验证码
     *
     */
    verificationCode: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    putAccountInfosForget.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putAccountInfosForget.key = "/accountInfos/forget";

/**
 *
 * 修改密码
 */
export const putAccountInfosP0 = (
  accountInfoId: string,
  requestBody: {
    /**
     *
     * 密码
     *
     */
    password: string;
    /**
     *
     * 验证码
     *
     */
    verificationCode: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putAccountInfosP0.key, { accountInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putAccountInfosP0.key = "/accountInfos/{accountInfoId}";

/**
 *
 * 修改账号权限信息
 */
export const putAdminAccountauthoritiesP0 = (
  /**
   *
   * 账号权限ID
   */
  accountauthorityid: string,
  requestBody: AccountAuthority,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountAuthority;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putAdminAccountauthoritiesP0.key, { accountauthorityid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putAdminAccountauthoritiesP0.key =
  "/admin/accountauthorities/{accountauthorityid}";

/**
 *
 * 修改账号组信息
 */
export const putAdminAccountgroupsP0 = (
  /**
   *
   * 账号组ID
   */
  accountgroupid: string,
  requestBody: AccountGroup,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountGroup;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putAdminAccountgroupsP0.key, { accountgroupid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putAdminAccountgroupsP0.key = "/admin/accountgroups/{accountgroupid}";

/**
 *
 * 修改账号信息
 */
export const putAdminAccountsP0 = (
  /**
   *
   * 账号ID
   */
  accountId: string,
  requestBody: AccountInformation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putAdminAccountsP0.key, { accountId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putAdminAccountsP0.key = "/admin/accounts/{accountId}";

/**
 *
 * 修改公司信息
 */
export const putCompanyInfosP0 = (
  /**
   *
   * 公司信息ID
   */
  companyInfoId: string,
  requestBody: CompanyInformation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: CompanyInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putCompanyInfosP0.key, { companyInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putCompanyInfosP0.key = "/companyInfos/{companyInfoId}";

/**
 *
 * 修改职位信息
 */
export const putCompanyInfosP0PositionInfosP1 = (
  /**
   *
   * 公司信息ID
   */
  companyInfoId: string,
  /**
   *
   * 职位信息ID
   */
  positionInfoId: string,
  requestBody: PositionInformation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: PositionInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putCompanyInfosP0PositionInfosP1.key, {
      companyInfoId,
      positionInfoId,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putCompanyInfosP0PositionInfosP1.key =
  "/companyInfos/{companyInfoId}/positionInfos/{positionInfoId}";

/**
 *
 * 修改人管信息
 */
export const putHrInfosP0 = (
  /**
   *
   * HR信息ID
   */
  hrInfoId: string,
  requestBody: HrInformation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: HrInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putHrInfosP0.key, { hrInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putHrInfosP0.key = "/hrInfos/{hrInfoId}";

/**
 *
 * 修改用户信息
 */
export const putUserInfosP0 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  requestBody: UserInformation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 用户信息
     *
     */
    body: UserInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserInfosP0.key, { userInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserInfosP0.key = "/userInfos/{userInfoId}";

/**
 *
 * 修改关注记录
 */
export const putUserInfosP0AttentionRecordsP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 关注记录ID
   */
  attentionRecordId: string,
  requestBody: AttentionRecord,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AttentionRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserInfosP0AttentionRecordsP1.key, {
      userInfoId,
      attentionRecordId,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserInfosP0AttentionRecordsP1.key =
  "/userInfos/{userInfoId}/attentionRecords/{attentionRecordId}";

/**
 *
 * 修改投递记录
 */
export const putUserInfosP0DeliveryRecordsP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 投递记录ID
   */
  deliveryRecordId: string,
  requestBody: DeliveryRecord,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: DeliveryRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserInfosP0DeliveryRecordsP1.key, {
      userInfoId,
      deliveryRecordId,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserInfosP0DeliveryRecordsP1.key =
  "/userInfos/{userInfoId}/deliveryRecords/{deliveryRecordId}";

/**
 *
 * 修改教育经历
 */
export const putUserInfosP0EduExperiencesP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 教育经历ID
   */
  eduExperienceId: string,
  requestBody: EducationExperience,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: EducationExperience;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserInfosP0EduExperiencesP1.key, {
      userInfoId,
      eduExperienceId,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserInfosP0EduExperiencesP1.key =
  "/userInfos/{userInfoId}/eduExperiences/{eduExperienceId}";

/**
 *
 * 修改收藏记录
 */
export const putUserInfosP0GarnerRecordsP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 收藏记录ID
   */
  garnerRecordId: string,
  requestBody: GarnerRecord,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: GarnerRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserInfosP0GarnerRecordsP1.key, { userInfoId, garnerRecordId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserInfosP0GarnerRecordsP1.key =
  "/userInfos/{userInfoId}/garnerRecords/{garnerRecordId}";

/**
 *
 * 修改求职期望
 */
export const putUserInfosP0JobExpectationsP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 求职期望ID
   */
  jobExpectationId: string,
  requestBody: JobExpectation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: JobExpectation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserInfosP0JobExpectationsP1.key, {
      userInfoId,
      jobExpectationId,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserInfosP0JobExpectationsP1.key =
  "/userInfos/{userInfoId}/jobExpectations/{jobExpectationId}";

/**
 *
 * 修改项目经历
 */
export const putUserInfosP0ProjectExperiencesP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 项目经历ID
   */
  projectExperienceId: string,
  requestBody: ProjectExperience,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 项目经历
     *
     */
    body: ProjectExperience;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserInfosP0ProjectExperiencesP1.key, {
      userInfoId,
      projectExperienceId,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserInfosP0ProjectExperiencesP1.key =
  "/userInfos/{userInfoId}/projectExperiences/{projectExperienceId}";

/**
 *
 * 修改工作经历
 */
export const putUserInfosP0WorkExperiencesP1 = (
  /**
   *
   * 用户信息ID
   */
  userInfoId: string,
  /**
   *
   * 工作经历ID
   */
  workExperienceId: string,
  requestBody: WorkExperience,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: WorkExperience;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserInfosP0WorkExperiencesP1.key, {
      userInfoId,
      workExperienceId,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserInfosP0WorkExperiencesP1.key =
  "/userInfos/{userInfoId}/workExperiences/{workExperienceId}";
export const _CONSTANT0 = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export const _CONSTANT1 = {
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
};

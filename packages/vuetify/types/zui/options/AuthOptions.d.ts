export interface ZLoginConfigOptions {
    login: () => Promise<any>
    logout: () => Promise<any>
}

export interface ZLoginOptions {
  username: string
  password: string
  remember: boolean
}

/**
 * 认证选项
 */
export interface ZAuthOptions {
  /**
   * 登录接口
   * @param data
   */
  login?: (data: ZLoginOptions) => Promise<any>

  /**
   * 登出接口
   */
  logout?: () => Promise<any>

  /**
   * 验证登录, 返回true登录成功，返回false登录失败
   * @param data
   */
  verifyLogin?: (data: any) => boolean

  /**
   * 验证登录状态, 返回true已登录, 返回false为未登录
   */
  verifyLoginStatus?: () => boolean

  /**
   * 验证权限, 返回true验证成功, 返回false为验证失败
   * @param key
   */
  verifyPermission?: (key: string) => boolean
}

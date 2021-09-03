import { ZAuthDescription } from '../../types/zui/ZAuth'
import { ZAuthOptions, ZLoginOptions } from '../../types'
import { UIEvent } from './events/UIEvent'

let instance: ZAuthClass

export class ZAuthClass extends UIEvent implements ZAuthDescription {
  constructor () {
    super()
    if (!instance) {
      instance = this
    }
    return instance
  }

  login (data: ZLoginOptions): Promise<any> {
    const login = ZAuthClass.options.login
    return login ? login(data) : new Promise<any>(resolve => resolve())
  }

  logout (): Promise<any> {
    const logout = ZAuthClass.options.logout
    return logout ? logout() : new Promise<any>(resolve => resolve())
  }

  verifyLogin (data: any): boolean {
    const verifyLogin = ZAuthClass.options.verifyLogin
    return verifyLogin ? verifyLogin(data) : true
  }

  verifyLoginStatus (): boolean {
    const verifyLoginStatus = ZAuthClass.options.verifyLoginStatus
    return verifyLoginStatus ? verifyLoginStatus() : true
  }

  verifyPermission (key: string): boolean {
    const verifyPermission = ZAuthClass.options.verifyPermission
    return verifyPermission ? verifyPermission(key) : true
  }

  setting (options: ZAuthOptions) {
    ZAuthClass.options = options
  }

  static options: ZAuthOptions

  public static genInstance (): ZAuthClass {
    if (!instance) {
      instance = new ZAuthClass()
    }
    return instance
  }
}

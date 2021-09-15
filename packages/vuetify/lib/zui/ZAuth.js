import { UIEvent } from './events/UIEvent';
let instance;
export class ZAuthClass extends UIEvent {
  constructor() {
    super();

    if (!instance) {
      instance = this;
    }

    return instance;
  }

  login(data) {
    const login = ZAuthClass.options.login;
    return login ? login(data) : new Promise(resolve => resolve());
  }

  logout() {
    const logout = ZAuthClass.options.logout;
    return logout ? logout() : new Promise(resolve => resolve());
  }

  verifyLogin(data) {
    const verifyLogin = ZAuthClass.options.verifyLogin;
    return verifyLogin ? verifyLogin(data) : true;
  }

  verifyLoginStatus() {
    const verifyLoginStatus = ZAuthClass.options.verifyLoginStatus;
    return verifyLoginStatus ? verifyLoginStatus() : true;
  }

  verifyPermission(key) {
    const verifyPermission = ZAuthClass.options.verifyPermission;
    return verifyPermission ? verifyPermission(key) : true;
  }

  setting(options) {
    ZAuthClass.options = options;
  }

  static genInstance() {
    if (!instance) {
      instance = new ZAuthClass();
    }

    return instance;
  }

}
//# sourceMappingURL=ZAuth.js.map
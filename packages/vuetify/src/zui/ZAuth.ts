import { ZAuthDescription } from '../../types/zui/ZAuth'
import { ZAuthOptions } from '../../types'
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

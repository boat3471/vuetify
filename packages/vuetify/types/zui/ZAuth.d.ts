import { ZAuthOptions } from './options'

export interface ZAuthDescription extends ZAuthOptions {
  setting (options: ZAuthOptions): void
}

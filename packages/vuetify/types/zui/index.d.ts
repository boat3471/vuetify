import Vue from 'vue'
import { CreateAppOptions } from './options'

export * from './options'
export * from './ZMessage'
export * from './ZModal'
export * from './ZuiTool'

export function createApp (options: CreateAppOptions): Vue

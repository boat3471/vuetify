// Types
import Vue from 'vue'
import { Zui } from '@zwd/z-ui/'
import { VuetifyPreset } from '@zwd/z-ui/types/services/presets'

export interface VuetifyServiceContract {
  framework: Record<string, VuetifyServiceContract>
  init: (root: Vue, ssrContext?: object) => void
}

export interface VuetifyService {
  property: string
  new (
    preset: VuetifyPreset,
    parent: InstanceType<typeof Zui>
  ): VuetifyServiceContract
}

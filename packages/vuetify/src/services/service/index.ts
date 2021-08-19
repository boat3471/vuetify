// Contracts
import { VuetifyServiceContract } from '@zwd/z-ui/types/services/index'

// Types
import Vue from 'vue'

export class Service implements VuetifyServiceContract {
  framework = {}

  init (root: Vue, ssrContext?: object) {}
}

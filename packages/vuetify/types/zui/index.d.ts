import Vue from 'vue'
import VueRouter from 'vue-router'
import { CreateAdminOptions, CreateAppOptions, ZRouterOptions, ZMenuOption } from './options'

export * from './options'

export function createApp (options: CreateAppOptions): Vue
export function createAdmin (options: CreateAdminOptions): Vue
export function createMenus (menus: ZMenuOption[]): ZMenuOption[]
export function createRouter (options: ZRouterOptions, menus?: ZMenuOption[]): VueRouter
export function createAdminRouter (options: ZRouterOptions, menus?: ZMenuOption[]): VueRouter

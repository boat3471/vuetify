/* eslint-disable max-len */
import { VuetifyThemeVariant } from '../services/theme'

export type ColorInt = number
export type XYZ = [number, number, number]
export type LAB = [number, number, number]
export type HSV = { h: number, s: number, v: number }
export type HSVA = HSV & { a: number }
export type RGB = { r: number, g: number, b: number }
export type RGBA = RGB & { a: number }
export type HSL = { h: number, s: number, l: number }
export type HSLA = HSL & { a: number }
export type Hex = string
export type Hexa = string
export type ColorValue = string | number | {}

export function isCssColor (color?: string | false): boolean

export function colorToInt (color: ColorValue): ColorInt

export function classToHex (color: string, colors: Record<string, Record<string, string>>, currentTheme: Partial<VuetifyThemeVariant>): string

export function intToHex (color: ColorInt): string

export function colorToHex (color: ColorValue): string

export function HSVAtoRGBA (hsva: HSVA): RGBA

export function RGBAtoHSVA (rgba: RGBA): HSVA

export function HSVAtoHSLA (hsva: HSVA): HSLA

export function HSLAtoHSVA (hsl: HSLA): HSVA

export function RGBAtoCSS (rgba: RGBA): string

export function RGBtoCSS (rgba: RGBA): string

export function RGBAtoHex (rgba: RGBA): Hex

export function HexToRGBA (hex: Hex): RGBA

export function HexToHSVA (hex: Hex): HSVA

export function HSVAtoHex (hsva: HSVA): Hex

export function parseHex (hex: string): Hex

export function parseGradient (gradient: string, colors: Record<string, Record<string, string>>, currentTheme: Partial<VuetifyThemeVariant>): string

export function RGBtoInt (rgba: RGBA): ColorInt

/**
 * Returns the contrast ratio (1-21) between two colors.
 *
 * @param c1 First color
 * @param c2 Second color
 */
export function contrastRatio (c1: RGBA, c2: RGBA): number

import type { Conditions as TConditions } from './conditions'
import type { Utility } from './css-utility'
import type { Dict, RequiredBy } from './helper'
import type { Keyframes } from './panda-csstype'
import type { Pattern } from './pattern'
import type { Recipe } from './recipe'
import type { DotPath, TDotPath } from './shared'

export type SemanticTokens<Tokens extends TDotPath = Dict, Conditions = Dict, Breakpoints = Dict> = {
  [K in keyof Tokens]?: {
    [token: string]: {
      [P in keyof Conditions | keyof Breakpoints | '_' | 'base']?: DotPath<Tokens>
    }
  }
}

export type Config<
  Conditions extends TConditions = TConditions,
  Breakpoints extends Dict = Dict,
  Tokens extends Dict = Dict,
> = {
  preflight?: boolean
  minify?: boolean
  cwd?: string
  hash?: boolean
  clean?: boolean
  outdir?: string
  prefix?: string
  include?: string[]
  exclude?: string[]
  watch?: boolean
  conditions?: TConditions
  breakpoints?: Breakpoints
  keyframes?: Keyframes
  tokens?: Tokens
  semanticTokens?: SemanticTokens<Tokens, Conditions, Breakpoints>
  utilities?: Utility<Tokens>[]
  recipes?: Recipe[]
  patterns?: Pattern[]
}

export type TConfig = Config<TConditions, Dict, Dict>

export function defineConfig<Conditions extends TConditions, Breakpoints extends Dict, Tokens extends Dict>(
  config: Partial<Config<Conditions, Breakpoints, Tokens>>,
): Partial<Config<Conditions, Breakpoints, Tokens>> {
  return config
}

export type UserConfig = RequiredBy<Config, 'outdir' | 'cwd' | 'include'>

import type { Router } from 'next/dist/client/router'
import type { MittEmitter } from 'next/dist/shared/lib/mitt'

declare global {
  type ChunkData =
    | string
    | {
        path: string
        included: (string | number)[]
        excluded: (string | number)[]
      }
  function __turbopack_require__(name: any): any
  function __turbopack_load__(path: ChunkData): any
  function __webpack_require__(name: any): any
  var __webpack_public_path__: string | undefined
  var __DEV_MIDDLEWARE_MATCHERS: any[]

  var __next_require__: (id: string) => any
  var __next_chunk_load__: (id: string) => Promise
  var __next_f: (
    | [isBootStrap: 0]
    | [isNotBootstrap: 1, responsePartial: string]
  )[]
  var next: {
    version: string
    appDir?: boolean
    router?: Router
    emitter?: MittEmitter<string>
  }

  function __turbopack_load_page_chunks__(
    page: string,
    paths: string[]
  ): unknown

  var AsyncLocalStorage = class AsyncLocalStorage<T> {
    getStore(): T | undefined
    run<R, TArgs extends any[]>(
      store: T,
      callback: (...args: TArgs) => R,
      ...args: TArgs
    ): R
  }
}

export {}

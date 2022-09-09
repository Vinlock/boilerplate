import type { FunctionComponent, ReactNode } from 'react'

declare global {
  type FC<P = Record<string, unknown>> = FunctionComponent<P>

  type FunctionalComponentWithChildren<P = Record<string, unknown>> = FunctionComponent<P & { children: ReactNode | undefined }>

  type FCC<P = Record<string, unknown>> = FunctionalComponentWithChildren<P>
}

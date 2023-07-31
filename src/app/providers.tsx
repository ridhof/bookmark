'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import * as React from 'react'

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}

const theme = extendTheme({ colors })

export function Providers({
    children
  }: {
    children: React.ReactNode
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        { children }
      </ChakraProvider>
    </CacheProvider>
  )
}
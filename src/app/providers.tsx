'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'
import * as React from 'react'

const colors = {
  honeydew: {
    900: '#94ff47',
    800: '#a0ff5c',
    700: '#acff70',
    600: '#b8ff85',
    500: '#c3ff99',
    400: '#cfffad',
    300: '#dbffc2',
    200: '#e7ffd6',
    100: '#f1ffe7',
  },
  space_cadet: {
    900: '#2a3351',
    800: '#313b5e',
    700: '#37446c',
    600: '#3e4c79',
    500: '#404e7c',
    400: '#4c5d94',
    300: '#5366a2',
    200: '#5d70ac',
    100: '#6b7cb3',
  },
  ylnmn_blue: {
    900: '#251f47',
    800: '#2c2555',
    700: '#342c63',
    600: '#3b3271',
    500: '#433880',
    400: '#4a3e8e',
    300: '#52449c',
    200: '#594baa',
    100: '#6355b4',
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
        <Box
          backgroundColor="honeydew.100"
          maxWidth="100vw"
          minHeight="100vh"
        >
          { children }
        </Box>
      </ChakraProvider>
    </CacheProvider>
  )
}
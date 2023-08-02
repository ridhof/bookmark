'use client'

import { HeroDescription, HeroTitle } from './containers'
import { Flex, Show } from '@chakra-ui/react'

export default function LandingPage() {
  return (
    <Flex
      direction="row"
      width="100%"
      minHeight="100vh"
      backgroundColor="space_cadet.400"
    >
      <Show above="lg">
        <HeroDescription />
      </Show>
      <HeroTitle />
    </Flex>
  )
}

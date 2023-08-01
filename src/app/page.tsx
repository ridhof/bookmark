'use client'

import { DescriptionSection, HeroSection } from './components'
import { Flex, Show } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
      direction="row"
      width="100%"
      minHeight="100vh"
      backgroundColor="space_cadet.400"
    >
      <Show above="lg">
        <DescriptionSection />
      </Show>
      <HeroSection />
    </Flex>
  )
}

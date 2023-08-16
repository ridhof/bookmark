'use client'

import { Center, Flex, Spacer } from '@chakra-ui/react'

export default function Waitlist() {
    return (
        <Flex
            direction="row"
            width="100%"
            minHeight="100vh"
            backgroundColor="space_cadet.400"
        >
            <Spacer />
            <Center
                width={{ "base": "100%", "lg": "50%" }}
                backgroundColor="white"
            >
                <p>Waitlist!</p>
            </Center>
            <Spacer />
        </Flex>
    )
}
import { Box, Icon, Text } from '@chakra-ui/react'
import React from 'react'

export function IconTextRow({
    text,
    icon,
}: {
    text: string,
    icon: typeof Icon,
}) {
    return (
        <Box>
            <Text fontSize="2xl">
                <Icon as={icon} marginRight={4} /> { text }
            </Text>
        </Box>
    )
}
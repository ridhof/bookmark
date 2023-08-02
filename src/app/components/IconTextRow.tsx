import { Box, Icon, Text } from '@chakra-ui/react'
import React from 'react'

export function IconTextRow({
    key,
    text,
    icon,
}: {
    key: string,
    text: string,
    icon: typeof Icon,
}) {
    const id = 'icontextrow';
    return (
        <Box key={`${id}-box-${key}`}>
            <Text key={`${id}-text-${key}`} fontSize="2xl">
                <Icon key={`${id}-icon-${key}`} as={icon} marginRight={4} /> { text }
            </Text>
        </Box>
    )
}
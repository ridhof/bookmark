import { CheckIcon, LinkIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Center, Stack, Text } from '@chakra-ui/react'

export function DescriptionSection() {
    return (
        <Box
            width="100%"
            backgroundColor="space_cadet.400"
            color="white"
        >
            <Center>
                <Stack
                    spacing="48px"
                    width="75%"
                    marginTop="220px"
                >
                    <Box>
                        <Text fontSize="2xl">
                            <CheckIcon marginRight={4} /> Save your bookmarks anywhere.
                        </Text>
                    </Box>
                    <Box>
                        <Text fontSize="2xl">
                            <StarIcon marginRight={4} /> Give many categories to your bookmarks.
                        </Text>
                    </Box>
                    <Box>
                        <Text fontSize="2xl">
                            <LinkIcon marginRight={4} /> Share your bookmarks to someone or to public.
                        </Text>
                    </Box>
                </Stack>
            </Center>
        </Box>
    )
}
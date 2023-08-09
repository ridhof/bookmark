import { HeroButtonOutline, HeroButtonSolid } from '../components'
import { Box, Center, Image, Stack, Text } from '@chakra-ui/react'

export function HeroTitle() {
    return (
        <Box
            width="100%"
            backgroundColor="white"
        >
            <Center>
                <Stack
                    spacing="92px"
                    width="75%"
                    marginTop="140px"
                >
                    <Box>
                        <Image 
                            src="/bookmark.svg"
                            alt="bookmark.svg"
                            boxSize="70px"
                        />
                        <Text fontSize="3xl" fontWeight="semibold">
                            Manage and share your bookmarks without hassle now
                        </Text>
                    </Box>

                    <Stack spacing="20px">
                        <Text fontSize="xl" fontWeight="semibold">
                            Join Bookmark today.
                        </Text>

                        <HeroButtonSolid
                            text="Sign Up"
                            colorVariant="ylnmn_blue"
                        />
                        <HeroButtonOutline
                            text="Log in"
                            colorVariant="ylnmn_blue"
                        />
                        
                    </Stack>
                </Stack>
            </Center>
        </Box>
    )
}
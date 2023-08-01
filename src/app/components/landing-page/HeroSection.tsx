import { Box, Button, Center, Image, Stack, Text } from '@chakra-ui/react'

export function HeroSection() {
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

                        <Button
                            rounded="lg"
                            backgroundColor="space_cadet.400"
                            color="white"
                            outlineColor="space_cadet.400"
                            _hover={{
                                color: "white",
                                backgroundColor: "space_cadet.200",
                                outlineColor: "space_cadet.200",
                            }}
                        >
                            Sign Up
                        </Button>

                        <Button
                            rounded="lg"
                            backgroundColor="white"
                            color="space_cadet.400"
                            outlineColor="space_cadeet.400"
                            _hover={{
                                backgroundColor: "space_cadet.100",
                                color: "white",
                                outlineColor: "space_cadet.100",
                            }}
                        >
                            Log in
                        </Button>
                    </Stack>
                </Stack>
            </Center>
        </Box>
    )
}
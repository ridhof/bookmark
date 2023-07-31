'use client'

import { CheckIcon, LinkIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, Image, Stack, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
      direction="row"
      width="100%"
      minHeight="100vh"
      backgroundColor="space_cadet.400"
    >
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
                <CheckIcon marginRight={4} /> Save your bookmarks.
              </Text>
            </Box>
            <Box>
              <Text fontSize="2xl">
                <StarIcon marginRight={4} /> Categorize your bookmarks.
              </Text>
            </Box>
            <Box>
              <Text fontSize="2xl">
                <LinkIcon marginRight={4} /> Share your bookmarks.
              </Text>
            </Box>
          </Stack>
        </Center>
      </Box>
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
                outlineColor="space_cadet.400"
                _hover={{
                  backgroundColor: "space_cadet.200",
                  color: "white",
                  outlineColor: "space_cadet.200",
                }}
              >
                Log in
              </Button>
            </Stack>
          </Stack>
        </Center>
      </Box>
    </Flex>
  )
}

import { IconTextRow } from '../components'

import { CheckIcon, LinkIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Center, Stack } from '@chakra-ui/react'

const descriptions = [
    {
        icon: CheckIcon,
        text: "Save your bookmarks anywhere."
    },
    {
        icon: StarIcon,
        text: "Categorize your bookmarks with many labels."
    },
    {
        icon: LinkIcon,
        text: "Collaborate with someone and share it to public."
    }
];

export function HeroDescription() {
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
                    {
                        descriptions.map(({ icon, text }) => 
                            (
                                <IconTextRow
                                    icon={icon}
                                    text={text}
                                />
                            )
                        )
                    }
                </Stack>
            </Center>
        </Box>
    )
}
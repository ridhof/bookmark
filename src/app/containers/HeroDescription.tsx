import { IconTextRow } from '../components'

import { CheckIcon, LinkIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Center, Stack } from '@chakra-ui/react'

const descriptions = [
    {
        key: "save",
        icon: CheckIcon,
        text: "Save your bookmarks anywhere."
    },
    {
        key: "categorize",
        icon: StarIcon,
        text: "Categorize your bookmarks with many labels."
    },
    {
        key: "collaborate",
        icon: LinkIcon,
        text: "Collaborate with someone and share it to public."
    }
];

export function HeroDescription() {
    return (
        <Box
            width="100%"
            bgGradient="linear(to-r, space_cadet.500, ylnmn_blue.600)"
            color="white"
        >
            <Center>
                <Stack
                    spacing="48px"
                    width="75%"
                    marginTop="220px"
                >
                    {
                        descriptions.map(({ key, icon, text }) => 
                            (
                                <IconTextRow
                                    key={key}
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
import NextLink from 'next/link'
import {
    Box,
    Button,
    Center,
    Flex,
    Icon,
    Link,
} from '@chakra-ui/react'
import { BiBell, BiBox, BiHomeCircle } from 'react-icons/bi'

export function BottomNav() {
    const id = 'bottomnav';

    const menus = [
        { key: "home", icon: BiHomeCircle },
        { key: "collections", icon: BiBox },
        { key: "notifications", icon: BiBell },
    ];

    return (
        <Box key={`${id}-box-container`}>
            <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
            >
                <Center>
                    <Flex
                        width={{ "base": "100%", "lg": "50%" }}
                        borderTopWidth="1px"
                        borderTopColor="gray.100"
                    >
                        {
                            menus.map(({ key, icon }) => (
                                <Link
                                    key={`${id}-link-${key}`}
                                    as={NextLink}
                                    href="/"
                                    width="100%"
                                >
                                    <Button
                                        key={`${id}-button-${key}`}
                                        width="100%"
                                        backgroundColor="transparent"
                                        variant="unstyled"
                                        py="6px"
                                    >
                                        <Icon
                                            key={`${id}-icon-${key}`}
                                            as={icon}
                                            boxSize={7}
                                        />
                                    </Button>
                                </Link>
                            ))
                        }
                    </Flex>
                </Center>
            </Box>
        </Box>
    )
}
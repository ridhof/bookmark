'use client'

import { BottomNav } from '../components'
import {
    Box,
    Show,
    TabIndicator,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Textarea,
} from '@chakra-ui/react'

export default function Hero() {
    return (
        <Box
            bgGradient="linear(to-r, space_cadet.500, ylnmn_blue.600, space_cadet.500)"
            width="100vw"
            minHeight="100vh"
        >
            <Box
                width={{ "base": "100%", "lg": "50%" }}
                mx="auto"
                minHeight="100vh"
                backgroundColor="white"
            >
                <Tabs
                    size="lg"
                    align="center"
                    variant="unstyled"
                    isFitted
                >
                    <TabList>
                        <Tab
                            fontSize="md"
                            _selected={{ fontWeight: "semibold" }}
                        >
                            Following
                        </Tab>
                        <Tab
                            fontSize="md"
                            _selected={{ fontWeight: "semibold" }}
                        >
                            Shared
                        </Tab>
                    </TabList>

                    <TabIndicator
                        mt="-1.5px"
                        height="2px"
                        bg="ylnmn_blue.500"
                        borderRadius="full"
                    />

                    <Show above="lg">
                        <Textarea
                            placeholder="Something new?"
                            resize="none"
                            borderRadius="0px" 
                            focusBorderColor="gray.300"
                            borderColor="gray.300"
                            mt="0.5px"
                        />
                    </Show>

                    <TabPanels>
                        <TabPanel>
                            <p>For me? wwwa</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Followed?</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <BottomNav />
            </Box>
        </Box>
    )
}
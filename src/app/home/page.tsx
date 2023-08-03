'use client'

import {
    Box,
    Grid,
    GridItem,
    Icon,
    Show,
    TabIndicator,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Textarea,
} from '@chakra-ui/react'
import { BiBell, BiBox, BiHomeCircle } from 'react-icons/bi'

export default function Hero() {
    return (
        <Box
            backgroundColor="white"
            width="100vw"
            minHeight="100vh"
        >
            <Grid
                templateColumns={{ "base": "repeat(1,1fr)", "lg": "repeat(3,1fr)" }}
                minHeight="100vh"   
            >
                <Show above="lg">
                    <GridItem
                        backgroundColor="space_cadet.200"
                    />
                </Show>
                
                <GridItem>
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

                    <Tabs
                        size="lg"
                        align="center"
                        variant="unstyled"
                        isFitted
                    >
                        <TabPanels>
                            <TabPanel>
                                <p>For me? wwwaxdxsxaaaaalalalaloololo</p>
                            </TabPanel>
                            <TabPanel>
                                <p>Followeddd?</p>
                            </TabPanel>
                            <TabPanel>
                                <p>Notificationnn</p>
                            </TabPanel>
                        </TabPanels>

                        <TabList
                            // bgColor="tomato"
                            position="absolute"
                            bottom={0}
                            left={0}
                            right={0}
                            borderTopWidth="1px"
                            borderTopColor="gray.100"
                        >
                            <Tab>
                                <Icon as={BiHomeCircle} boxSize={7} />
                            </Tab>

                            <Tab>
                                <Icon as={BiBox} boxSize={7} />
                            </Tab>

                            <Tab>
                                <Icon as={BiBell} boxSize={7} />
                            </Tab>
                        </TabList>

                        <TabIndicator
                            mt="-1.5px"
                            height="2px"
                            bg="transparent"
                            borderRadius="full"
                        />
                    </Tabs>
                </GridItem>

                <Show above="lg">
                    <GridItem
                        backgroundColor="space_cadet.400"
                    />
                </Show>
            </Grid>
        </Box>
    )
}
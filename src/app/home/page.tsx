'use client'

import {
    Grid,
    GridItem,
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
        <Grid
            templateColumns="repeat(3,1fr)"
            backgroundColor="white"
            width="100vw"
            minHeight="100vh"
        >
            <GridItem
                backgroundColor="space_cadet.200"
            />
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
                            For you
                        </Tab>
                        <Tab
                            fontSize="md"
                            _selected={{ fontWeight: "semibold" }}
                        >
                            Following
                        </Tab>
                    </TabList>

                    <TabIndicator
                        mt="-1.5px"
                        height="2px"
                        bg="ylnmn_blue.500"
                        borderRadius="full"
                    />

                    <Textarea
                        placeholder="Something new?"
                        resize="none"
                        borderRadius="0px" 
                        focusBorderColor="gray.300"
                        borderColor="gray.300"
                        mt="0.5px"
                    />

                    <TabPanels>
                        <TabPanel>
                            <p>For me?</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Followed?</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </GridItem>
            <GridItem
                backgroundColor="space_cadet.400"
            />
        </Grid>
    )
}
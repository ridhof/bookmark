'use client'

import { AppPageLayout } from '../containers'
import {
    Show,
    TabIndicator,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Textarea,
} from '@chakra-ui/react'

export default function Home() {
    return (
        <AppPageLayout>
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
        </AppPageLayout>
    )
}
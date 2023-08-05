'use client'

import { BottomNav, UpperNav } from '../components'
import { AppPageLayout } from '../containers'
import { Card, CardBody, Stack, StackDivider, Text } from '@chakra-ui/react'

export default function Notifications() {
    return (
        <AppPageLayout>
            <UpperNav title="Notifications" />
            <Card>
               <CardBody>
                    <Stack divider={<StackDivider />}>
                        <Text>Adam invited you to Cinema Collection</Text>
                        <Text>Bill has set Baseball Collection to public</Text>
                        <Text>Clinton has added a new bookmark to Basketball News</Text>
                    </Stack>
                </CardBody> 
            </Card>
            <BottomNav />
        </AppPageLayout>
    )
}
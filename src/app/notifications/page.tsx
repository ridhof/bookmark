'use client'

import { BottomNav, UpperNav } from '../components'
import { AppPageLayout } from '../containers'
import { Card, CardBody, Flex, Icon, Stack, StackDivider, Text } from '@chakra-ui/react'
import { BiBookAdd, BiBookmarkAltPlus, BiGroup, BiUserVoice, BiWorld } from 'react-icons/bi'

export default function Notifications() {
    const notifications = [
        {
            key: '1',
            username: 'Adam',
            actionOne: 'added a new bookmark in',
            collectionName: 'Aeroplane Collection',
            actionTwo: null,
            icon: BiBookAdd,
        },
        {
            key: '2',
            username: 'Bob',
            actionOne: 'added a new bookmark in',
            collectionName: 'Building Reference Collection',
            actionTwo: null,
            icon: BiBookmarkAltPlus,
        },
        {
            key: '3',
            username: 'Christine',
            actionOne: 'invited you to',
            collectionName: 'Cinema Collection',
            actionTwo: null,
            icon: BiGroup,
        },
        {
            key: '4',
            username: 'Dale',
            actionOne: 'followed you',
            collectionName: null,
            actionTwo: null,
            icon: BiUserVoice,
        },
        {
            key: '5',
            username: 'Edo',
            actionOne: 'has set',
            collectionName: 'Cinema Collection',
            actionTwo: 'to public',
            icon: BiWorld,
        },
    ];
    return (
        <AppPageLayout>
            <UpperNav title="Notifications" />
            <Card variant="unstyled" borderRadius={0}>
                <CardBody>
                    <Stack divider={<StackDivider />} pt={1} maxHeight="100vh">
                        {
                            notifications.map(({
                                key,
                                username,
                                actionOne,
                                collectionName,
                                actionTwo,
                                icon,
                            }) => (
                                <Flex key={`notif-wrap-${key}`} p={3} columnGap={1}>
                                    <Icon
                                        key={`notif-icon-${key}`}
                                        as={icon}
                                        boxSize={6}
                                        width={10}
                                    />
                                    <Text key={`notif-text-${key}`}>
                                        <b>{username}</b> {actionOne} <b>{collectionName}</b> {actionTwo}
                                    </Text>
                                </Flex>
                            ))
                        }
                        <Flex />
                    </Stack>
                </CardBody> 
            </Card>
            <BottomNav />
        </AppPageLayout>
    )
}
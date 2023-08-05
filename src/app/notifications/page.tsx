'use client'

import { BottomNav, UpperNav } from '../components'
import { AppPageLayout } from '../containers'

export default function Notifications() {
    return (
        <AppPageLayout>
            <UpperNav title="Notifications" />
            <BottomNav />
        </AppPageLayout>
    )
}
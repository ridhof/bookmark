'use client'

import { BottomNav, UpperNav } from '../components'
import { AppPageLayout } from '../containers'

export default function Collections() {
    return (
        <AppPageLayout>
            <UpperNav title="Collections" />
            <BottomNav />
        </AppPageLayout>
    )
}
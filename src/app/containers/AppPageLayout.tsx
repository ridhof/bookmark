import { Box } from '@chakra-ui/react'

export function AppPageLayout({
    children,
}: {
    children: React.ReactNode,
}) {
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
                { children }
            </Box>
        </Box>
   ) 
}
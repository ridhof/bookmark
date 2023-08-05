import { Box, Heading } from '@chakra-ui/react'

export function UpperNav({
    title,
    isBorder = true,
}: {
    title: string,
    isBorder?: boolean,
}) {
    return (
        <Box
            px={4}
            py={3}
            borderBottomWidth={ isBorder ? "1px" : "0px" }
            borderBottomColor="gray.100"
        >
            <Heading
                as="h1"
                size="md"
            >
                {title}
            </Heading>
        </Box>
    )
}
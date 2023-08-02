import { Button } from '@chakra-ui/react'

export function HeroButtonOutline({
    key,
    text,
    colorVariant,
}: {
    key: string,
    text: string,
    colorVariant: string,
}) {
    const id = 'herobuttonoutline';
    return (
        <Button
            key={`${id}-button-${key}`}
            rounded="lg"
            backgroundColor="white"
            color={`${colorVariant}.400`}
            outlineColor={`${colorVariant}.400`}
            _hover={{
                color: "white",
                backgroundColor: `${colorVariant}.200`,
                outlineColor: `${colorVariant}.200`,
            }}
        >
            { text }
        </Button>
    )
}
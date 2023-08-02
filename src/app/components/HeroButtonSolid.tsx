import { Button } from '@chakra-ui/react'

export function HeroButtonSolid({
    key,
    text,
    colorVariant,
}: {
    key: string,
    text: string,
    colorVariant: string,
}) {
    const id = 'herobuttonsolid';
    return (
        <Button
            key={`${id}-button-${key}`}
            rounded="lg"
            color="white"
            backgroundColor={`${colorVariant}.400`}
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
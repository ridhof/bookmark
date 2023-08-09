import { Button } from '@chakra-ui/react'

export function HeroButtonSolid({
    text,
    colorVariant,
}: {
    text: string,
    colorVariant: string,
}) {
    const id = 'herobuttonsolid';
    return (
        <Button
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
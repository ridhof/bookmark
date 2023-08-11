import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from '@react-email/components';

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

export function Email({
    userFirstname = 'Zero'
}: {
    userFirstname: string
}) {
    return (
        <Html>
            <Head />

            <Preview>
                The sales intelligence platform that helps you uncover qualified leads.
            </Preview>

            <Body style={main}>
                <Container style={container}>
                    <Img
                        src={`${baseUrl}/bookmark.svg`}
                        width="170"
                        height="50"
                        alt="Bookmark"
                        style={logo}
                    />
                    <Text style={paragraph}>Hi {userFirstname},</Text>
                    <Text style={paragraph}>
                        Welcome to Bookmark
                    </Text>
                    <Section style={btnContainer}>
                        <Button pX={12} pY={12} style={button} href={baseUrl}>
                            Get started
                        </Button>
                    </Section>
                    <Text style={paragraph}>
                        Best,
                        <br />
                        fbrns.co
                    </Text>
                    <Hr style={hr} />
                    <Text style={footer}>Indonesia</Text>
                </Container>
            </Body>
        </Html>
    )
}

const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
};

const logo = {
    margin: '0 auto',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
};

const btnContainer = {
    textAlign: 'center' as const,
};

const button = {
    backgroundColor: '#5F51E8',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
};

const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
};
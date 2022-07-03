import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta charSet='utf-8' />
                <link rel='icon' href='/favicon.png' />
                <title>Product Preview Card | Frontend Mentor</title>
            </Head>
            <body className="bg-primary-cream px-4 flex justify-center items-center min-h-screen">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
import localFont from 'next/font/local';
import './globals.css';

const primaryFont = localFont({ src: './fonts/work_sans/normal.ttf' });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <link
                    rel='shortcut icon'
                    href='./favicon.ico'
                    type='image/x-icon'
                />
            </head>
            <body className={primaryFont.className}>{children}</body>
        </html>
    );
}

import React from 'react';
import '../styles/index.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta content='width=device-width, initial-scale=1' name='viewport' />
                <meta content='#000000' name='theme-color' />
                <meta content='Xpanse' name='description' />
                <title>xpanse</title>
                <script src='%PUBLIC_URL%/inject.js'></script>
            </head>

            <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <div id='root'>{children}</div>
            </body>
        </html>
    );
}

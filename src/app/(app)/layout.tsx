import './global.css';

export const metadata = {
    title: 'Simple Mickey',
    description:
        'A personal website for Mickey, a software engineer who tries to make things and live a simple life.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body>{children}</body>
        </html>
    );
}

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
        </ThemeProvider>
    );
}

export { Providers };

import '../styles/global.css';
import type { AppProps } from 'next/app';
import { Providers } from '@/modules/app/Providers';
import { Header } from '@/modules/layout/Header';
import { Footer } from '@/modules/layout/Footer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Providers>
            <div className="flex min-h-screen flex-col">
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>
        </Providers>
    );
}

export default MyApp;

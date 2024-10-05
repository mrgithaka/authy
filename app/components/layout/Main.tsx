import Footer from './Footer';
import { MainStyles } from '@styles/styles';

export default function Main({ children }: MainProps) {
    return (
        <main className={MainStyles.main}>
            {children}
            <Footer />
        </main>
    );
}

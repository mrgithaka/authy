import { Metadata } from 'next';
import Header from './components/layout/Header';
import Main from './components/layout/Main';

export const metadata: Metadata = {
    title: 'Authy',
    description:
        'Authy is a small project designed to explore Next.js authentication and authorization.',
};

export default function Authy() {
    return (
        <div>
            <Header />
            <Main />
        </div>
    );
}

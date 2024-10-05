import { Metadata } from 'next';
import {
    Header,
    Main,
    Brand,
    Navigation,
    NavigationItem,
} from '@components/components';

export const metadata: Metadata = {
    title: 'Authy',
    description:
        'Authy is a small project designed to explore Next.js authentication and authorization.',
};

export default function Authy() {
    return (
        <div>
            <Header>
                <Brand />
                <Navigation>
                    <NavigationItem />
                </Navigation>
            </Header>
            <Main />
        </div>
    );
}

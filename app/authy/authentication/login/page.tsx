import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Authy | Login',
    description: 'Access your Authy account securely.',
};

import {
    Header,
    Brand,
    Navigation,
    NavigationItem,
    Main,
    Authentication,
} from '@components/components';

export default function Login() {
    return (
        <div>
            <Header>
                <Brand />
                <Navigation>
                    <NavigationItem
                        name='Login'
                        active
                        link='/authy/authentication/login'
                    />
                    <NavigationItem
                        name='Register'
                        link='/authy/authentication/register'
                    />
                    <NavigationItem
                        name='Recover'
                        link='/authy/authentication/recover'
                    />
                </Navigation>
            </Header>
            <Main>
                <Authentication>
                    <></>
                </Authentication>
            </Main>
        </div>
    );
}

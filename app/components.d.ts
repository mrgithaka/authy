import { ReactNode } from 'react';

declare global {
    interface HeaderProps {
        children: ReactNode;
    }
    interface NavigationProps {
        children: ReactNode;
    }
    interface NavigationItemProps {
        link: string;
        name: string;
        active?: boolean;
        style?: string;
    }
    interface MainProps {
        children: ReactNode;
    }
    interface AuthenticationProps {
        children: ReactNode;
    }
    interface FormProps {
        children: ReactNode;
    }
}
export {};

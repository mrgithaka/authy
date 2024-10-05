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
    }
}
export {};

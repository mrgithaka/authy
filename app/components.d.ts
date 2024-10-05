import { ReactNode } from 'react';

declare global {
    interface HeaderProps {
        children: ReactNode;
    }
    interface NavigationProps {
        children: ReactNode;
    }
}
export {};

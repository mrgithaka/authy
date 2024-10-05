'use client';
import { useState } from 'react';
import { NavigationStyles } from '@styles/styles';
import Image from 'next/image';

export default function Navigation({ children }: NavigationProps) {
    const [menu, setMenu] = useState(false);
    function toggleMenu() {
        return setMenu(!menu);
    }
    return (
        <nav className={NavigationStyles.navigation}>
            <div className={NavigationStyles.navigation_large}>{children}</div>
            <div
                className={NavigationStyles.navigation_small}
                onClick={toggleMenu}
            >
                <div className={NavigationStyles.navigation_small_buttons}>
                    {menu ? (
                        <Image
                            src={'./icons/close.svg'}
                            alt='Menu Icon'
                            width={40}
                            height={40}
                        />
                    ) : (
                        <Image
                            src={'./icons/menu.svg'}
                            alt='Menu Icon'
                            width={40}
                            height={40}
                        />
                    )}
                </div>
                <div className={NavigationStyles.navigation_small_menu}>
                    {children}
                </div>
            </div>
        </nav>
    );
}

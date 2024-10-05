import { NavigationStyles } from '@styles/styles';

export default function Navigation({ children }: NavigationProps) {
    return (
        <nav className={NavigationStyles.navigation}>
            <div className={NavigationStyles.navigation_large}>{children}</div>
            <div className={NavigationStyles.navigation_small}>
                <div
                    className={NavigationStyles.navigation_small_buttons}
                ></div>
                <div className={NavigationStyles.navigation_small_menu}>
                    {children}
                </div>
            </div>
        </nav>
    );
}

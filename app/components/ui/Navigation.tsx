import { NavigationStyles } from '@styles/styles';

export default function Navigation({ children }: NavigationProps) {
    return <nav className={NavigationStyles.navigation}>{children}</nav>;
}

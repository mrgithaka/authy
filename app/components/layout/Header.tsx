import { HeaderStyles } from '@styles/styles';

export default function Header({ children }: HeaderProps) {
    return <header className={HeaderStyles.header}>{children}</header>;
}

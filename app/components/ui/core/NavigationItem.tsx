import Link from 'next/link';
import { NavigationItemStyles } from '@styles/styles';

export default function NavigationItem({
    link,
    name,
    active,
    style,
}: NavigationItemProps) {
    return (
        <div>
            <Link
                className={
                    active
                        ? NavigationItemStyles.navigation_item_active
                        : `${NavigationItemStyles.navigation_item} ${style}`
                }
                href={link}
            >
                {name}
            </Link>
        </div>
    );
}

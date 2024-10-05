import Link from 'next/link';

export default function NavigationItem({ link, name }: NavigationItemProps) {
    return (
        <div>
            <Link href={link}>{name}</Link>
        </div>
    );
}

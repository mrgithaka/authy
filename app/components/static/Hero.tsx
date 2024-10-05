import Image from 'next/image';
import { NavigationItem } from '@components/components';

export default function Hero() {
    return (
        <section>
            <Image
                src={'./logo'}
                alt='Authy Logo'
                width={50}
                height={50}
            />
            <h1>Authy</h1>
            <h2>Next.js Authentication</h2>
            <div>
                <NavigationItem
                    name='Documentation'
                    link=''
                />
                <NavigationItem
                    name='Repository'
                    link=''
                />
            </div>
        </section>
    );
}

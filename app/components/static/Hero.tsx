import Image from 'next/image';
import { NavigationItem } from '@components/components';
import { HeroStyles } from '@styles/styles';

export default function Hero() {
    return (
        <section id={HeroStyles.hero}>
            <Image
                src={'./logo.svg'}
                alt='Authy Logo'
                width={50}
                height={50}
            />
            <h1>Authy</h1>
            <h2>Next.js Authentication</h2>
            <div className={HeroStyles.hero_buttons}>
                <NavigationItem
                    name='Docs'
                    link=''
                />
                <NavigationItem
                    name='Repository'
                    link=''
                    style={HeroStyles.hero_button_dark}
                />
            </div>
        </section>
    );
}

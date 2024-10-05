import Image from 'next/image';
import { BrandStyles } from '@styles/styles';

export default function Brand() {
    return (
        <div className={BrandStyles.brand}>
            <Image
                src={'./logo.svg'}
                alt='Authy Logo'
                width={35}
                height={35}
            />
            <p>Authy</p>
        </div>
    );
}

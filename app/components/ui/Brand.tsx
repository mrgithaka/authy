import Image from 'next/image';

export default function Brand() {
    return (
        <div>
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

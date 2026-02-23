import Link from 'next/link';
import { Logo } from '../Logo';

export function Header() {
    return (
        <header className="flex h-22 items-center justify-around">
            <Logo />
            <div className='flex gap-6 text-neutral-500 font-medium'>
                <Link href="/" className='hover:border-b-3 border-teal-primary'>Home</Link>
                <Link href="/indications">Indicações</Link>
                <Link href="/about">Sobre nós</Link>
                <Link href="/projects">Projetos</Link>
                <Link href="/experiences">Experiencias</Link>
                <Link href="/contact">Contato</Link>
            </div>
        </header>
    );
}

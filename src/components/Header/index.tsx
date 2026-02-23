import Link from 'next/link';
import { Logo } from '../Logo';

export function Header() {
    return (
        <header className="flex h-22 items-center border-2 border-red-500">
            <Logo />
        </header>
    );
}

import { ReactNode } from 'react';

interface SectionContainerProps {
    children: ReactNode;
}

export function SectionContainer({ children }: SectionContainerProps) {
    return <section className="mx-auto mt-20 max-w-7xl">{children}</section>;
}

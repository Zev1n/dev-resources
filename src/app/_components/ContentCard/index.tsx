import { IconBox } from '@/components/IconBox';
import { LinkSimpleHorizontalIcon } from '@phosphor-icons/react';

export function ContentCard() {
    return (
        <div className="font-family-manrope h-40 w-72 rounded-lg border border-neutral-200">
            <IconBox
                icon={LinkSimpleHorizontalIcon}
                bgColor="bg-teal-50"
                iconColor="text-teal-primary"
                size={20}
            />
            <h2 className="text-xl font-semibold">Curadoria de Links</h2>
            <p className="text-base font-normal">
                Indicações de sites, ferramentas e recursos selecionados.
            </p>
        </div>
    );
}

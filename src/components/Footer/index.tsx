'use client';

import { GithubLogoIcon } from '@phosphor-icons/react/dist/icons/GithubLogo';
import { GlobeIcon } from '@phosphor-icons/react/dist/icons/Globe';
import { InstagramLogoIcon } from '@phosphor-icons/react/dist/icons/InstagramLogo';
import { LinkedinLogoIcon } from '@phosphor-icons/react/dist/icons/LinkedinLogo';
import { IconBox } from '../IconBox';
import { Logo } from '../Logo';

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background text-foreground">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 border-b border-border p-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Sobre */}
                <div className="max-w-sm">
                    <Logo size="small" />
                    <p className="mt-2 text-sm text-muted-foreground">
                        Portfólio pessoal de Henrique Azevedo — projetos, experiências e
                        contatos na área de tecnologia.
                    </p>
                </div>

                {/* Navegação */}
                <div>
                    <h3 className="mb-2 font-semibold text-muted-foreground">Navegação</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="/" className="text-muted-foreground hover:text-foreground">
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Sobre mim
                            </a>
                        </li>
                        <li>
                            <a
                                href="/projects"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Projetos
                            </a>
                        </li>
                        <li>
                            <a
                                href="/experiences"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Experiências
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Redes */}
                <div>
                    <h3 className="mb-2 font-semibold text-muted-foreground">Redes Sociais</h3>
                    <ul className="flex flex-wrap gap-2">
                        <li>
                            <IconBox
                                icon={GithubLogoIcon}
                                bgColor="bg-card hover:bg-white/10"
                                iconColor="text-blue-primary"
                                size={20}
                                href="https://github.com/Zev1n"
                            />
                        </li>
                        <li>
                            <IconBox
                                icon={LinkedinLogoIcon}
                                bgColor="bg-card hover:bg-white/10"
                                iconColor="text-blue-primary"
                                size={20}
                                href="https://www.linkedin.com/in/henrique-azevedo-flores-278611235/"
                            />
                        </li>
                        <li>
                            <IconBox
                                icon={InstagramLogoIcon}
                                bgColor="bg-card hover:bg-white/10"
                                iconColor="text-blue-primary"
                                size={20}
                                href="https://www.instagram.com/henrique_azevedo031/"
                            />
                        </li>
                        <li>
                            <IconBox
                                icon={GlobeIcon}
                                bgColor="bg-card hover:bg-white/10"
                                iconColor="text-blue-primary"
                                size={20}
                                href="https://www.instagram.com/henrique_azevedo031/"
                            />
                        </li>
                    </ul>

                    <p className="mt-3 text-xs text-muted-foreground">
                    </p>
                </div>

                {/* Contato rápido */}
                <div>
                    <h3 className="mb-2 font-semibold text-muted-foreground">Contato</h3>
                    <p className="text-sm text-muted-foreground">
                        Email: <span className="text-foreground">henriqueflores2003@gmail.com</span>
                    </p>
                </div>
            </div>

            <div className="mx-auto my-3 flex max-w-7xl flex-col gap-4 sm:flex-row sm:justify-between sm:gap-0">
                <div className="p-4 text-sm text-muted-foreground">
                    &copy; {year} Henrique Azevedo. Todos os direitos reservados.
                </div>
                <div className="p-4 text-sm text-muted-foreground">Feito por Henrique Azevedo.</div>
            </div>
        </footer>
    );
}
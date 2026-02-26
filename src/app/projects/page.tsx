import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';
import { ProjectCard } from './_components/ProjectCard';
import { SectionContainer } from '@/components/SectionContainer';

const projects = [
    {
        id: 1,
        title: 'DevResources',
        description: 'Plataforma web colaborativa de curadoria digital e portfólio de projetos.',
        imageUrl:
            'https://private-user-images.githubusercontent.com/96635074/519937059-208932f4-4060-49f7-9bb7-f4d3247f0d78.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzIwMjI5MTcsIm5iZiI6MTc3MjAyMjYxNywicGF0aCI6Ii85NjYzNTA3NC81MTk5MzcwNTktMjA4OTMyZjQtNDA2MC00OWY3LTliYjctZjRkMzI0N2YwZDc4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAyMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMjI1VDEyMzAxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTlmYzBlYmQwM2I2M2I0YWFlNDQwZmQ5NTBmNWVkN2Q5Mzc1ODA5YjEyMTZjMjJiZjg5NDdhZTk1NDVhY2I0N2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.haJiMxOaJmF3e_wr_wEWgJE4YCZIyEF_rb9JsWXeobg',
        repositoryUrl: 'https://github.com',
        demoUrl: 'https://devresources.com',
    },
    {
        id: 2,
        title: 'Studio Ghibli API',
        description:
            'Site desenvolvido para o workshop de React para ensinar o uso de API com o framework',
        imageUrl:
            'https://private-user-images.githubusercontent.com/96635074/519937059-208932f4-4060-49f7-9bb7-f4d3247f0d78.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzIwMjI5MTcsIm5iZiI6MTc3MjAyMjYxNywicGF0aCI6Ii85NjYzNTA3NC81MTk5MzcwNTktMjA4OTMyZjQtNDA2MC00OWY3LTliYjctZjRkMzI0N2YwZDc4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAyMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMjI1VDEyMzAxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTlmYzBlYmQwM2I2M2I0YWFlNDQwZmQ5NTBmNWVkN2Q5Mzc1ODA5YjEyMTZjMjJiZjg5NDdhZTk1NDVhY2I0N2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.haJiMxOaJmF3e_wr_wEWgJE4YCZIyEF_rb9JsWXeobg',
        repositoryUrl: 'https://github.com',
        demoUrl: 'https://studioghibli.com',
    },
    {
        id: 3,
        title: 'Caft API',
        description:
            'Site desenvolvido para aplicar os conhecimentos sobre API e design usando a API do Minecraft',
        imageUrl:
            'https://private-user-images.githubusercontent.com/96635074/519937059-208932f4-4060-49f7-9bb7-f4d3247f0d78.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzIwMjI5MTcsIm5iZiI6MTc3MjAyMjYxNywicGF0aCI6Ii85NjYzNTA3NC81MTk5MzcwNTktMjA4OTMyZjQtNDA2MC00OWY3LTliYjctZjRkMzI0N2YwZDc4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAyMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMjI1VDEyMzAxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTlmYzBlYmQwM2I2M2I0YWFlNDQwZmQ5NTBmNWVkN2Q5Mzc1ODA5YjEyMTZjMjJiZjg5NDdhZTk1NDVhY2I0N2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.haJiMxOaJmF3e_wr_wEWgJE4YCZIyEF_rb9JsWXeobg',
        repositoryUrl: 'https://github.com',
        demoUrl: 'https://caftapi.com',
    },
];

export default function Projects() {
    return (
        <SectionContainer>
            <div className="text-center">
                <Title text="Projetos" />
                <Subtitle text="Conheça outros de nossos projetos desenvolvidos." />
            </div>
            <div className="mx-auto mt-8 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        repositoryUrl={project.repositoryUrl}
                        demoUrl={project.demoUrl}
                    />
                ))}
            </div>
        </SectionContainer>
    );
}

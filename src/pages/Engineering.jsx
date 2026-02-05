
import React from 'react';
import { siteData } from '../data/db';
import ProjectCard from '../components/ProjectCard';

const Engineering = () => {
    const { engineering } = siteData;

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 1.5rem' }}>
            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{engineering.title}</h1>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <blockquote style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-secondary)',
                        borderLeft: '4px solid var(--color-accent)',
                        paddingLeft: '1.5rem',
                        fontStyle: 'italic',
                        margin: '0 auto'
                    }}>
                        {engineering.philosophy}
                    </blockquote>
                </div>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '2rem'
            }}>
                {engineering.projects.map((project, idx) => (
                    <ProjectCard key={project.id || idx} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Engineering;

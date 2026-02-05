
import React from 'react';
import { siteData } from '../data/db';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

import { parseMarkdown } from '../utils/textFormatter';

const Research = () => {
    const { research, home } = siteData;

    const renderContent = (content) => {
        if (!content) return null;
        return content.split('\n').filter(line => line.trim() !== '').map((line, index) => {
            if (line.startsWith('- ')) return <li key={index} style={{ marginBottom: '0.5rem', marginLeft: '1.5rem' }}>{parseMarkdown(line.replace('- ', ''))}</li>;
            return <p key={index} style={{ marginBottom: '1rem' }}>{parseMarkdown(line)}</p>;
        });
    };

    return (
        <div className="animate-fade-in">
            <header className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{research.title}</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>
                    {research.overview}
                </p>
            </header>

            {/* Lab Focus Areas */}
            <section className="container" style={{ padding: '0 1.5rem 6rem' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Lab Focus</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
                    {home.focusAreas.map((area, idx) => (
                        <motion.div
                            key={idx}
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ overflow: 'hidden' }}
                        >
                            <div style={{ height: '240px', overflow: 'hidden' }}>
                                <img src={area.image} alt={area.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{area.title}</h3>
                                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{area.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <div className="container" style={{ padding: '0 1.5rem 6rem' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>All Projects</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {research.projects.map((project, idx) => (
                        <ProjectCard key={project.id || idx} project={project} />
                    ))}
                </div>
            </div>

            {/* Recent Progress */}
            <section style={{ background: 'var(--color-bg-secondary)', padding: '6rem 0', marginBottom: '6rem' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>{home.recentProgress.title}</h2>

                    <div className="card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem' }}>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--color-text-accent)' }}>
                            {home.recentProgress.highlight}
                        </h3>
                        <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
                            {renderContent(home.recentProgress.content)}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Research;


import React from 'react';
import { siteData } from '../data/db';
import { motion } from 'framer-motion';

const Home = () => {
    const { home, about } = siteData;

    // Helper to parse simple markdown bold
    const parseMarkdownCraters = (text) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index}>{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    const renderContent = (content) => {
        if (!content) return null;
        return content.split('\n').filter(line => line.trim() !== '').map((line, index) => {
            if (line.startsWith('- ')) return <li key={index} style={{ marginBottom: '0.5rem', marginLeft: '1.5rem' }}>{parseMarkdownCraters(line.replace('- ', ''))}</li>;
            return <p key={index} style={{ marginBottom: '1rem' }}>{parseMarkdownCraters(line)}</p>;
        });
    };

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section style={{
                padding: '8rem 0',
                textAlign: 'center',
                background: 'linear-gradient(to bottom, var(--color-bg-secondary), var(--color-bg-primary))',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Abstract geometric background elements if desired, for now keep clean */}
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: '1.2' }}
                    >
                        {home.hero.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ fontSize: '1.5rem', color: 'var(--color-text-secondary)', maxWidth: '800px', margin: '0 auto 2rem', fontWeight: '500' }}
                    >
                        {home.hero.subtitle}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ maxWidth: '800px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}
                    >
                        {home.hero.description}
                    </motion.p>
                </div>
            </section>



            {/* Professor Section */}
            <section className="container" style={{ padding: '6rem 1.5rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(300px, 1fr) 2fr',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <motion.div
                        className="card"
                        style={{ padding: '2rem', textAlign: 'center' }}
                        whileHover={{ y: -5 }}
                    >
                        <img
                            src={about.professor.avatar}
                            alt={about.professor.name}
                            style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem' }}
                        />
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{about.professor.name}</h2>
                        <p style={{ color: 'var(--color-text-accent)', fontWeight: '500' }}>{about.professor.title}</p>
                    </motion.div>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h2 style={{ fontSize: '2rem' }}>Supervisor</h2>
                            {about.professor.website && (
                                <a
                                    href={about.professor.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                                >
                                    View Profile
                                </a>
                            )}
                        </div>
                        <div style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
                            {renderContent(about.professor.bio)}
                        </div>
                    </div>
                </div>
            </section>

            {/* Recruitment */}
            <section className="bg-secondary" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div className="card" style={{ padding: '3rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{about.recruitment.title}</h2>
                        <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}>
                            {about.recruitment.desc}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                            {about.recruitment.skills.map((skill, idx) => (
                                <span key={idx} className="tag" style={{ border: '1px solid var(--color-border)', background: 'white', padding: '0.5rem 1rem' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                            <a href={about.recruitment.contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                GitHub
                            </a>
                            <a href={`mailto:${about.recruitment.contact.email}`} className="btn btn-outline">
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

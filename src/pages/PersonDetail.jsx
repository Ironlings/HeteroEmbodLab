
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteData } from '../data/db';
import { motion } from 'framer-motion';

import { parseMarkdown } from '../utils/textFormatter';

const PersonDetail = () => {
    const { id } = useParams();

    const person = siteData.people.find(p => p.id === id);

    if (!person) {
        return (
            <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
                <h1>Person Not Found</h1>
                <Link to="/people" className="btn btn-primary" style={{ marginTop: '1rem' }}>Return to Team</Link>
            </div>
        );
    }

    const renderContent = (content) => {
        if (!content) return null;
        return content.split('\n').map((line, index) => {
            if (line.startsWith('## ')) return <h2 key={index} style={{ marginTop: '2rem', marginBottom: '1rem' }}>{parseMarkdown(line.replace('## ', ''))}</h2>;
            if (line.startsWith('### ')) return <h3 key={index} style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>{parseMarkdown(line.replace('### ', ''))}</h3>;
            if (line.startsWith('* ') || line.startsWith('- ')) return <li key={index} style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}>{parseMarkdown(line.replace(/^[\*\-]\s/, ''))}</li>;
            if (line.trim() === '') return <br key={index} />;
            return <p key={index} style={{ marginBottom: '1rem', lineHeight: '1.7' }}>{parseMarkdown(line)}</p>;
        });
    };

    return (
        <div className="animate-fade-in">
            {/* Hero Header */}
            <div style={{ background: 'var(--color-bg-secondary)', padding: '4rem 0' }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>

                    {/* Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}
                    >
                        {person.avatar ? (
                            <img src={person.avatar} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <div style={{ width: '100%', height: '100%', background: 'var(--color-bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: 'var(--color-text-secondary)' }}>
                                {person.name.charAt(0)}
                            </div>
                        )}
                    </motion.div>

                    {/* Info */}
                    <div style={{ flex: 1 }}>
                        <Link to="/people" style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>&larr; Back to Team</Link>
                        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{person.name}</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-accent)', fontWeight: '500', marginBottom: '1rem' }}>{person.role}</p>

                        {person.bio && (
                            <p style={{ maxWidth: '600px', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                {person.bio}
                            </p>
                        )}

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {person.links && person.links.map((link, i) => (
                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
                {renderContent(person.content)}
            </div>
        </div>
    );
};

export default PersonDetail;

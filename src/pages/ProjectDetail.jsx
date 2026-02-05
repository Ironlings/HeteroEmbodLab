
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteData } from '../data/db';
import { motion } from 'framer-motion';

import { parseMarkdown } from '../utils/textFormatter';

const ProjectDetail = () => {
    const { id } = useParams();

    // Find project in research or engineering
    let project = siteData.research.projects.find(p => p.id === id);
    let type = "Research";

    if (!project) {
        project = siteData.engineering.projects.find(p => p.id === id);
        type = "Engineering";
    }

    if (!project) {
        return (
            <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
                <h1>Project Not Found</h1>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>Return Home</Link>
            </div>
        );
    }

    const renderContent = (content) => {
        if (!content) return null;
        return content.split('\n').map((line, index) => {
            if (line.startsWith('## ')) return <h2 key={index} style={{ marginTop: '2rem', marginBottom: '1rem' }}>{parseMarkdown(line.replace('## ', ''))}</h2>;
            if (line.startsWith('### ')) return <h3 key={index} style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>{parseMarkdown(line.replace('### ', ''))}</h3>;
            if (line.startsWith('- ')) return <li key={index} style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}>{parseMarkdown(line.replace('- ', ''))}</li>;
            if (line.startsWith('> ')) return <blockquote key={index} style={{ borderLeft: '4px solid var(--color-accent)', paddingLeft: '1rem', fontStyle: 'italic', margin: '1rem 0', color: 'var(--color-text-secondary)' }}>{parseMarkdown(line.replace('> ', ''))}</blockquote>;
            if (line.trim() === '---') return <hr key={index} style={{ margin: '2rem 0', borderColor: 'var(--color-border)' }} />;
            if (line.trim() === '') return <br key={index} />;
            return <p key={index} style={{ marginBottom: '1rem', lineHeight: '1.7' }}>{parseMarkdown(line)}</p>;
        });
    };

    return (
        <div className="animate-fade-in">
            {/* Hero Header */}
            <div style={{ background: 'var(--color-bg-secondary)', padding: '4rem 0' }}>
                <div className="container">
                    <Link to={`/${type.toLowerCase()}`} style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>&larr; Back to {type}</Link>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{project.title}</h1>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                        {project.tags && project.tags.map((tag, idx) => (
                            <span key={idx} className="tag" style={{ background: 'white', border: '1px solid var(--color-border)' }}>{tag}</span>
                        ))}
                    </div>

                    {project.owner && (
                        <div style={{ display: 'flex', items: 'center', gap: '1rem' }}>
                            <img src={project.owner.avatar} alt={project.owner.name} style={{ width: 48, height: 48, borderRadius: '50%' }} />
                            <div>
                                <div style={{ fontWeight: '600' }}>{project.owner.name}</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>Project Lead</div>
                            </div>
                        </div>
                    )}

                    {/* Handle multiple owners if any (engineering structure) */}
                    {project.owners && (
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            {project.owners.map((owner, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    {owner.avatar ? (
                                        <img src={owner.avatar} alt={owner.name} style={{ width: 48, height: 48, borderRadius: '50%' }} />
                                    ) : (
                                        <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            {owner.name.charAt(0)}
                                        </div>
                                    )}
                                    <div>
                                        <div style={{ fontWeight: '600' }}>{owner.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="container" style={{ padding: '4rem 1.5rem', display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) 1fr', gap: '4rem' }}>

                {/* Main Content */}
                <div>
                    {project.content ? (
                        <div style={{ fontSize: '1.1rem' }}>
                            {renderContent(project.content)}
                        </div>
                    ) : (
                        <p>{project.description}</p>
                    )}
                </div>

                {/* Sidebar / Image */}
                <div>
                    {project.image && (
                        <motion.img
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            src={project.image}
                            alt={project.title}
                            style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
                        />
                    )}
                </div>

            </div>
        </div>
    );
};

export default ProjectDetail;

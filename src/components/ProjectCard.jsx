
import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const location = useLocation();
    const basePath = location.pathname === '/' ? '/research' : location.pathname; // Default to research if on home (though usually listed on specific pages)

    // Determine correct base path if component reused elsewhere
    const getBasePath = () => {
        // If we are in /engineering, go to /engineering/:id
        if (location.pathname.includes('engineering')) return '/engineering';
        // If we are in /research, go to /research/:id
        if (location.pathname.includes('research')) return '/research';
        // Fallback: check project type or ID structure?
        // For now, simpler: pass a prop or infer?
        // Actually, since engineering and research are separate data structures, we might not need to infer too hard if the parent passes context.
        // But simpler is to assume /research/id or /engineering/id based on where it's rendered.
        // Let's rely on the current route.
        return location.pathname;
    };

    const linkPath = `${getBasePath()}/${project.id}`;

    return (
        <Link to={linkPath} style={{ display: 'block', height: '100%' }}>
            <motion.div
                className="card project-card"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                {project.image && (
                    <div style={{ height: '200px', overflow: 'hidden', borderBottom: '1px solid var(--color-border)' }}>
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                )}

                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                        {project.title}
                    </h3>

                    {/* Owners Section */}
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '1rem', flexWrap: 'wrap' }}>
                        {(project.owners || (project.owner ? [project.owner] : [])).map((owner, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                {owner.avatar ? (
                                    <img src={owner.avatar} alt={owner.name} style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover' }} />
                                ) : (
                                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--color-bg-tertiary)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px', color: 'var(--color-text-primary)' }}>
                                        {owner.name.charAt(0)}
                                    </div>
                                )}
                                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{owner.name}</span>
                            </div>
                        ))}
                    </div>

                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem', fontSize: '0.95rem', flex: 1 }}>
                        {project.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {project.tags && project.tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default ProjectCard;

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

    // Helper function to extract video ID from YouTube URL
    const getYouTubeEmbedUrl = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        const videoId = (match && match[2].length === 11) ? match[2] : null;
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    };

    // Helper function to extract video ID from Vimeo URL
    const getVimeoEmbedUrl = (url) => {
        const regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
        const match = url.match(regExp);
        const videoId = match ? match[3] : null;
        return videoId ? `https://player.vimeo.com/video/${videoId}` : null;
    };

    const renderContent = (content) => {
        if (!content) return null;
        return content.split('\n').map((line, index) => {
            // Video embedding support
            if (line.startsWith('[video]')) {
                const videoUrl = line.replace('[video]', '').trim();
                let embedUrl = null;
                
                // Check for YouTube
                if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
                    embedUrl = getYouTubeEmbedUrl(videoUrl);
                } 
                // Check for Vimeo
                else if (videoUrl.includes('vimeo.com')) {
                    embedUrl = getVimeoEmbedUrl(videoUrl);
                }
                // Generic iframe support
                else if (videoUrl.startsWith('http')) {
                    embedUrl = videoUrl;
                }

                if (embedUrl) {
                    return (
                        <div key={index} style={{ margin: '2rem 0' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{ 
                                    position: 'relative',
                                    paddingBottom: '56.25%', // 16:9 Aspect Ratio
                                    height: 0,
                                    overflow: 'hidden',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: 'var(--shadow-lg)',
                                    maxWidth: '100%'
                                }}
                            >
                                <iframe
                                    src={embedUrl}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: 0
                                    }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={`Video ${index}`}
                                />
                            </motion.div>
                        </div>
                    );
                }
                return null;
            }

            // Existing content rendering
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
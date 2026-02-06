
import React from 'react';
import { siteData } from '../data/db';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const People = () => {
    const { people } = siteData;

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 1.5rem' }}>
            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Team</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>
                    Meet the brilliant minds behind our research.
                </p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2.5rem'
            }}>
                {people.map((person, idx) => (
                    <Link to={`/team/${person.id}`} key={idx} style={{ display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none' }}>
                        <motion.div
                            className="card"
                            whileHover={{ y: -8 }}
                            style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}
                        >
                            <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                {person.avatar ? (
                                    <img src={person.avatar} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', background: 'var(--color-bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)', fontSize: '1.5rem' }}>
                                        {person.name.charAt(0)}
                                    </div>
                                )}
                            </div>

                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{person.name}</h3>
                            <p style={{ color: 'var(--color-text-accent)', fontWeight: '500', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                {person.role}
                            </p>

                            {/* Show short bio excerpt if available */}
                            {person.bio ? (
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1rem', flex: 1 }}>
                                    {person.bio.length > 80 ? person.bio.substring(0, 80) + '...' : person.bio}
                                </p>
                            ) : (
                                <div style={{ flex: 1 }}></div>
                            )}

                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default People;

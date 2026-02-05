
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container nav-content">
                <NavLink to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src="/assets/images/logo.png" alt="HeteroEmbod Lab Logo" style={{ height: '40px', width: 'auto' }} />
                    HeteroEmbod Lab
                </NavLink>

                <div className="nav-links">
                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        About
                    </NavLink>
                    <NavLink to="/research" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        Research
                    </NavLink>
                    <NavLink to="/engineering" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        Engineering
                    </NavLink>
                    <NavLink to="/people" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        People
                    </NavLink>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;

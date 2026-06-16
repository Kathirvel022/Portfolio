import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsGithub, BsCodeSlash, BsActivity, BsStarFill, BsBoxArrowUpRight } from 'react-icons/bs';
import { FaCodeBranch } from 'react-icons/fa';

const GithubStats = () => {
    const [profile, setProfile] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                // Fetch profile data
                const profileRes = await fetch('https://api.github.com/users/Kathirvel022');
                if (!profileRes.ok) throw new Error('Failed to fetch GitHub profile');
                const profileData = await profileRes.json();

                // Fetch repositories
                const reposRes = await fetch('https://api.github.com/users/Kathirvel022/repos?sort=updated&per_page=100');
                if (!reposRes.ok) throw new Error('Failed to fetch GitHub repositories');
                const reposData = await reposRes.json();

                setProfile(profileData);
                setRepos(reposData);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    // Calculate derived stats
    const getTopLanguages = () => {
        if (!repos.length) return "N/A";
        const languages = repos.reduce((acc, repo) => {
            if (repo.language) {
                acc[repo.language] = (acc[repo.language] || 0) + 1;
            }
            return acc;
        }, {});
        
        const topLangs = Object.entries(languages)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(lang => lang[0]);
            
        return topLangs.length > 0 ? topLangs.join(', ') : "N/A";
    };

    const getLatestRepo = () => {
        if (!repos.length) return "N/A";
        // Repos are already sorted by updated due to API query param
        return repos[0].name;
    };

    if (error) {
        return (
            <section id="github-stats" className="py-5 position-relative">
                <div className="container py-5 text-center">
                    <p className="text-danger">Error loading GitHub stats: {error}</p>
                </div>
            </section>
        );
    }

    const stats = profile && repos ? [
        {
            title: "Most Used Languages",
            icon: <BsCodeSlash size={24} className="text-accent" />,
            value: getTopLanguages(),
        },
        {
            title: "Total Repositories",
            icon: <BsGithub size={24} className="text-accent" />,
            value: profile.public_repos,
        },
        {
            title: "Latest Repository",
            icon: <BsActivity size={24} className="text-accent" />,
            value: getLatestRepo(),
        }
    ] : [];

    return (
        <section id="github-stats" className="py-5 position-relative">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-3">GitHub <span className="text-accent">Stats</span></h2>
                    <div className="mx-auto bg-accent" style={{ height: '4px', width: '60px', borderRadius: '2px', background: 'var(--accent-gradient)' }}></div>
                </div>

                <div className="row g-4 justify-content-center">
                    {/* Profile Card */}
                    <div className="col-lg-4">
                        <motion.div 
                            className="card-custom bg-glass h-100 p-4 text-center d-flex flex-column align-items-center justify-content-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -5 }}
                        >
                            {loading ? (
                                <div className="spinner-border text-accent mb-4" role="status" style={{ width: '3rem', height: '3rem' }}>
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-4 rounded-circle overflow-hidden border border-2" style={{ borderColor: 'var(--accent-color)', width: '120px', height: '120px' }}>
                                        <img src={profile?.avatar_url} alt="GitHub Avatar" className="img-fluid" />
                                    </div>
                                    <h4 className="fw-bold text-primary mb-1">@{profile?.login}</h4>
                                    <p className="text-secondary small mb-3" style={{ minHeight: '40px' }}>{profile?.bio || "React Developer & Tech Enthusiast"}</p>
                                    
                                    <div className="d-flex w-100 justify-content-around text-secondary mb-4 border-top border-bottom border-secondary border-opacity-25 py-3">
                                        <div>
                                            <h5 className="fw-bold text-primary mb-1">{profile?.followers}</h5>
                                            <small>Followers</small>
                                        </div>
                                        <div>
                                            <h5 className="fw-bold text-primary mb-1">{profile?.following}</h5>
                                            <small>Following</small>
                                        </div>
                                    </div>

                                    <a href={profile?.html_url} target="_blank" rel="noreferrer" className="btn-outline-custom w-100 mt-auto justify-content-center">
                                        View Profile <BsBoxArrowUpRight className="ms-2" />
                                    </a>
                                </>
                            )}
                        </motion.div>
                    </div>

                    {/* Stats Cards */}
                    <div className="col-lg-8">
                        <div className="row g-4 h-100 align-content-center">
                            {loading ? (
                                [1, 2, 3].map((skeleton) => (
                                    <div className="col-md-6" key={skeleton}>
                                        <div className="card-custom bg-glass h-100 p-4 d-flex align-items-center gap-4 placeholder-glow">
                                            <div className="p-3 rounded-circle placeholder col-3" style={{ background: 'var(--card-bg)', width: '56px', height: '56px' }}></div>
                                            <div className="w-100">
                                                <span className="placeholder col-6 mb-2 d-block bg-secondary rounded"></span>
                                                <span className="placeholder col-4 d-block bg-primary rounded"></span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                stats.map((stat, index) => (
                                    <div className="col-md-6" key={stat.title}>
                                        <motion.div 
                                            className="card-custom bg-glass h-100 p-4 d-flex align-items-center gap-4"
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <div className="p-3 rounded-circle" style={{ background: 'var(--card-bg)' }}>
                                                {stat.icon}
                                            </div>
                                            <div style={{ overflow: 'hidden' }}>
                                                <p className="text-muted mb-1 fw-medium">{stat.title}</p>
                                                <h5 className="fw-bold text-primary mb-0 text-truncate" title={stat.value}>{stat.value}</h5>
                                            </div>
                                        </motion.div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Latest Projects Section */}
                <div className="mt-5 pt-5 border-top border-secondary border-opacity-10">
                    <div className="text-center mb-5">
                        <h3 className="h2 fw-bold mb-3" id="github-latest-projects">Latest <span className="text-accent">Projects</span></h3>
                        <div className="mx-auto bg-accent" style={{ height: '4px', width: '40px', borderRadius: '2px', background: 'var(--accent-gradient)' }}></div>
                    </div>
                    
                    <div className="row g-4 justify-content-center">
                        {loading ? (
                            [1, 2, 3].map((skeleton) => (
                                <div className="col-md-6 col-lg-4" key={skeleton}>
                                    <div className="card-custom bg-glass h-100 p-4 placeholder-glow">
                                        <span className="placeholder col-8 mb-3 d-block bg-primary rounded fs-4"></span>
                                        <span className="placeholder col-4 mb-4 d-block bg-accent rounded"></span>
                                        <span className="placeholder col-12 mb-2 d-block bg-secondary rounded"></span>
                                        <span className="placeholder col-10 mb-4 d-block bg-secondary rounded"></span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            repos.slice(0, 3).map((repo, index) => (
                                <div className="col-md-6 col-lg-4" key={repo.id}>
                                    <motion.div 
                                        className="card-custom bg-glass h-100 p-4 d-flex flex-column"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ y: -10 }}
                                    >
                                        <h4 className="fw-bold text-primary mb-2 text-truncate" title={repo.name}>
                                            {repo.name}
                                        </h4>
                                        <p className="text-accent fw-medium small mb-3">
                                            {repo.language || 'Multiple Languages'}
                                        </p>
                                        
                                        <p className="text-secondary mb-4 flex-grow-1" style={{ fontSize: '0.95rem' }}>
                                            {repo.description || 'No description available for this repository.'}
                                        </p>
                                        
                                        <div className="d-flex align-items-center justify-content-between mb-4 text-muted small">
                                            <div className="d-flex gap-3">
                                                <span className="d-flex align-items-center gap-1">
                                                    <BsStarFill className="text-warning" /> {repo.stargazers_count}
                                                </span>
                                                <span className="d-flex align-items-center gap-1">
                                                    <FaCodeBranch /> {repo.forks_count}
                                                </span>
                                            </div>
                                            <span>{new Date(repo.updated_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                        </div>
                                        
                                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="btn-outline-custom w-100 justify-content-center mt-auto">
                                            View GitHub <BsBoxArrowUpRight className="ms-2" />
                                        </a>
                                    </motion.div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GithubStats;

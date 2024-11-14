import React, { useEffect, useState } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';


function HomePage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/project.json');
                const jsonData = await response.json();
                setData(jsonData.homePage);
            } catch (error) {
                console.error('Error loading content: ', error);
            }
        }
        fetchData();
    }, []);

    if (!data) return <p>Loading...</p>;

    return (
        <div>
            <section className="banner">
                <div className="banner-text">
                    <h1>{data.banner.title}</h1>
                    <p>{data.banner.subtitle}</p>
                </div>
            </section>
            <section id="games" className="game-section">
                <h2>Featured Card Games</h2>
                <div className="games-grid">
                    {data.games.map(game => (
                        <div key={game._id} className="game-card">
                            <img src={game.img_name} alt={game.title} />
                            <h3>
                                <Link to={game.link}>{game.title}</Link>
                                </h3>
                            <p>{game.description}</p>
                            </div>
                    ))}
                </div>
            </section>
            <section id="about" className="about-section">
                <h2>{data.about.title}</h2>
                <p>{data.about.description}</p>
            </section>
            
        </div>
    );
}

export default HomePage;
import React from 'react';
import './bridge.css';


function Bridge () {
    return (
        <div className="bridge">
        <section class="bridge-intro">
            <div class="intro-text">
                <h1>Welcome to Bridge</h1>
                <p>A game of strategy that involves trick-taking, teamwork, and skill.</p>
            </div>
            <div class="intro-image">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GQlZdKM8lT0?si=Rbpxpy41Ey40ZtB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>

        <section id="rules" class="bridge-rules">
            <h2>Rules of Bridge</h2>
            <ul>
                <li>Bridge is played with four players with two teams, sitting opposite each other.</li>
                <li>A standard 52 card deck is used and each player will recieve 14 cards.</li>
                <li>The game consists of a bidding phase to determine the "contract" and a play phase to complete the contract.</li>
                <li>The goal is to win as many tricks as possible to achieve the contract.</li>
                <li>The game is scored based on number of tricks won relative to the bid contract.</li>
            </ul>
        </section>

        <section id="guide" class="bridge-guide">
            <h2>How to Play</h2>
            <div class="guide-steps">
                <div class="step">
                    <h3>Step 1: The Deal</h3>
                    <p>Each player is dealt 13 cards. The dealer rotates clockwise after each hand.</p>
                </div>
                <div class="step">
                    <h3>Step 2: Bidding</h3>
                    <p>Player bid to determine the contratc-how many tricks they aim to win and the tru,p suit, if any.</p>
                </div>
                <div class="step">
                    <h3>Step 3: Playing the hand</h3>
                    <p>Player who wins the bid leads the first trick. Each player plays one card per trick, following suit if possible.</p>
                </div>
                <div class="step">
                    <h3>Step 4: Scoring</h3>
                    <p>Partnerships score points based on the success of the bid contract. Points vary based on number of tricks won and contract type.</p>
                </div>
            </div>
        </section>

        <section id="tips" class="bridge-tips">
            <h2>Tips & Strategies</h2>
            <div class="tips-list">
                <div class="tip">
                    <h3>1. Communicate Through Bidding</h3>
                    <p>Use bidding to convey your hands strength and potential to your partner, it is a major part of Bridge strategy.</p>
                </div>
                <div class="tip">
                    <h3>2. Plan Your Play</h3>
                    <p>As the declarer, map out your trategy before starting to play. Anticipate opponents moves based on their bid.</p>
                </div>
                <div class="tip">
                    <h3>3. Master the Endgame</h3>
                    <p>Pay attention to the final tricks and learn to execute squeezes and endplays to trap your oppenets.</p>
                </div>
            </div>
        </section>

        
        </div>
    );
}

export default Bridge;
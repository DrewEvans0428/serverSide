import React from 'react';
import './spades.css';


function Spades() {
    return (
        <div className="spades">
        
        <section class="spades-intro">
            <div class="intro-text">
                <h1>Welcome To Spades</h1>
                <p>Classic trick-taking game with four players. Master game of spades with detailed rules, guide, and strategies.</p>
            </div>
            <div class="intro-image">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6pVvbbpbrlk?si=YaZf8L3E-EHJ7mfR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>

        <section id="rules" class="spades-rules">
            <h2>Rules of Spades</h2>
            <ul>
                <li>it is a trick-taking card game with four players in teams of two. Goal is to simply win as many tricks as possible based on bid.</li>
                <li>Spades are always trump suit, meaning they beat all other suites.</li>
                <li>Each player must follow suit if they can. If you can't you can play a spade or another card.</li>
                <li>Teams earn points for meeting or exceeding bids, but lose points when they fail to meet the bid</li>
            </ul>
        </section>

        <section id="guide" class="spades-guide">
            <h2>How To Play</h2>
            <div class="guide-steps">
                <div class="step">
                    <h3>Step 1: Bidding</h3>
                    <p>At the start of the round, players bid on number of tricks they think they could possibly win. Total bid determines goal of each round.</p>
                </div>
                <div class="step">
                    <h3>Step 2: Playing Tricks</h3>
                    <p>Player who leads the trick plays a card from hand. Others will follow suit if they can. Highest card in suit wins the trick unless a spade is played which trumps other suits.</p>
                </div>
                <div class="step">
                    <h3>Step 3: Scoring</h3>
                    <p>At the end of round, teams are awarded points based on number of tricks they won. Failing to meet the bid will result in penalties and extra tricks</p>
                </div>
            </div>
        </section>

        <section id="tip" class="spades-tips">
            <h2>Tips & Strategies</h2>
            <div class="tips-list">
                <div class="tip">
                    <h3>1. Underbid when in doubt</h3>
                    <p>If you are unsure how many you will win, play more conservatively.</p>
                </div>
                <div class="tip">
                    <h3>2. Watch The Spades</h3>
                    <p>Keep track of which spades have been played, as you can predict when opponents or partner might play a trump.</p>
                </div>
                <div class="tip">
                    <h3>3. Communicate with Partners</h3>
                    <p>Since spades is a team game, you and your partners need to work together. Pay attention to your partner's bids and play to support each other.</p>
                </div>
            </div>
        </section>

       
        </div>
    );
}

export default Spades;
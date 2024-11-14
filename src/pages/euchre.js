import React from 'react';
import './euchre.css';


function Euchre() {
    return (
        <div className="euchre">
        <section class="euchre-intro">
            <div class="intro-text">
                <h1>Welcome to Euchre</h1>
                <p>A fast paced trick-taking game for four players, played with partners with a changing trump. Involves strategy and teamwork.</p>
            </div>
            <div class="intro-image">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/THsv0HxK6bo?si=v8EwQcLF4EmCB4f6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>

        <section id="rules" class="euchre-rules">
            <h2>Rules of Euchre</h2>
            <ul>
                <li>Euchre is played with four players in two partnerships. A standard 24-card deck is used.</li>
                <li>The goal is to be the first partnership to reach a set number of points, often 10.</li>
                <li>The game revolves around a "trump" suit that changes each round, giving those cards higher power.</li>
                <li>Each player is dealt 5 cards, and the remaining cards form the "kitty", with the top revealed to start the bidding process.</li>
                <li>Teams score points by winning tricks based on the trump suit.</li>
            </ul>
        </section>

        <section id="guide" class="euchre-guide">
            <h2>How to Play</h2>
            <div class="guide-steps">
                <div class="step">
                    <h3>Step 1: Deal the Cards</h3>
                    <p>Each player is dealt 5 cards, and the remaining cards form the the kitty. The top card of the kitty is revealed to intiate bidding.</p>
                </div>
                <div class="step">
                    <h3>Step 2: Bidding</h3>
                    <p>Players take turns deciding whether to accept the top card's suit as trump or to pass. If all players pass, a second round of bidding allows choosing another trump suit.</p>
                </div>
                <div class="step">
                      <h3>Step 3: Play the Hand</h3>
                      <p>The player to the left of the dealer leads the first trick. Players must follow the suite if possible. The highest card of the lead suit or the trump suit wins the trick.</p>
                </div>
                <div class="step">
                    <h3>Step 4: Scoring</h3>
                    <p>If the team that called trump wins 3 or more tricks, they score points. If they fail, the opposing team scores. Points vary based on the number of tricks won and whether a player went "alone".</p>
                </div>
            </div>
        </section>

        <section id="tips" class="euchre-tips">
            <h2>Tips & Strategies</h2>
            <div class="tips-list">
                <div class="tip">
                    <h3>1. Know When to Call Trump</h3>
                    <p>Consider the strength of your hand before calling trump. A strong hand can dominate the round, while a weak hand can lead to failure.</p>
                </div>
                <div class="tip">
                    <h3>2. Masters the left "Left Bower"</h3>
                    <p>In Euchre, the Jack of the trump suite and the Jack of the same color in the opposite suit are the most powerful card-use them strategically</p>
                </div>
                <div class="tip">
                    <h3>3. Go Alone When odds Are Right</h3>
                    <p>If you have a particularly strong hand, consider playing alone to earn extra points for your team.</p>
                </div>
            </div>
        </section>

       
        </div>
    );
}

export default Euchre;
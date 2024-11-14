import React from 'react';
import './blackjack.css';

function Blackjack() {
    return (
        <div className="blackjack">
            <section className="blackjack-intro">
            <div class="intro-text">
                <h1>Welcome to Blackjack</h1>
                <p>A classic casino game of strategy, luck, and whit. Learn how to beat the dealer.</p>
            </div>
            <div class="intro-image">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eyoh-Ku9TCI?si=-W_9AZCnDN3g_ZRm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </section>

            <section id="rules" class="blackjack-rules">
            <h2>Rules of Blackjack</h2>
            <ul>
                <li>The goal is to have a hand value closest to 21, without going over 21.</li>
                <li>Each player is dealt two cards. Cards 2-10 are face value, face cards are worth 10, and Aces can be 1 or 11.</li>
                <li>Players can "hit" to recieve another card or "stand" to keep their hand as it is.</li>
                <li>If your hand exceeds 21 you bust.</li>
                <li>Dealer must hit if hand is below 16 and stand if 17 or above</li>
                <li>If dealer and player end up with the same values, they "push" which is a split</li>
            </ul>
            </section>

            <section id="guide" class="blackjack-guide">
            <h2>How to Play</h2>
            <div class="guide-steps">
            <div class="step">
                <h3>Step 1: Place Your Bet</h3>
                <p>If dealer and player end up with the same values, they "push" which is a split</p>
            </div>
            <div class="step">
                <h3>Step 2: Decide your move</h3>
                <p>Look at your cards and decide if you would like to "hit" or "stand"</p>
            </div>
            <div class="step">
                <h3>Step 3: Dealers Turn</h3>
                <p>Once players have finsihed, dealer will reveal their face-down card and flip it over. if over 17 they will "stand" and if below they will "hit".</p>
            </div>
            <div class="step">
                <h3>Step 4: Determine the winner</h3>
                <p>If your hand is closer to 21 than the dealers you win, if less or you bust, you lose.</p>
            </div>
            </div>
            </section>

            <section id="tips" class="blackjack-tips">
            <h2>Tips & Strategies</h2>
            <div class="tips-list">
                <div class="tip">
                    <h3>1. Know when to hit or stand</h3>
                    <p>If your hand is 12-16 and the dealer has ahigh card, you should hit. If your hand is 17 or higher you should stand.</p>
                </div>
                <div class="tip">
                    <h3>2. Split Aces and Eights</h3>
                    <p>Always split a pair of Aces or a pair of eights. The splits increase the likelihood of winning.</p>
                </div>
                <div class="tip">
                    <h3>3. Avoid Insurance</h3>
                    <p>Insurance bet is a statistically losing bet</p>
                </div>
            </div>
            </section>

        </div>
    );
}

export default Blackjack;
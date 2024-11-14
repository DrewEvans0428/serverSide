import React from 'react';
import './gin-rummy.css';


function GinRummy(){
   return(
   <div className="Gin-Rummy">
        <section class="gin-rummy-intro">
            <div class="intro-text">
                <h1>Welcome to Gin Rummy</h1>
                <p>A varuiant of Rummy that combines luck and strategy. Master the game with quick thinking and clever card play.</p>
            </div>
            <div class="intro-image">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/DPEsY9wYSUg?si=KzpBCPrwfMVUBx-H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>

        <section id="rules" class="gin-rummy-rules">
            <h2>Rules of Gin RUmmy</h2>
            <ul>
                <li>Gin Rummy is played with two players using a 52 card deck.</li>
                <li>Goal is to form sets or runs and minimize points in your hand.</li>
                <li>Players take turns drawing cards from the deck or discard pile and then discarding a card.</li>
                <li>The round ends when a player "knocks" if their unmatched cards total 10 or fewer points, or declares "Gin" if no unmatched cards remain.</li>
                <li>Scores are calculated based on difference in points, with bonuses for kncocking or achieving "Gin."</li>
            </ul>
        </section>

        <section id="guide" class="gin-rummy-guide">
            <h2>How to Play</h2>
            <div class="guide-steps">
                <div class="step">
                    <h3>Step 1: Deal the Cards</h3>
                    <p>Each player is dealt 10 cards. Remianing of deck is placed face-down, with top card flipped over to start the discard pile</p>
                </div>
                <div class="step">
                    <h3>Step 2: Draw and Discard</h3>
                    <p>On each turn, a player draws a card from the draw pile or the discard pile, then discards one card. The goal is to form sets or runs.</p>
                </div>
                <div class="step">
                    <h3>Step 3: Knock or Go for Gin</h3>
                    <p>If you have 10 or fewer points in unmatched cards, you may knock to end the round. If you have unmatched cards, declare "Gin" for extra points.</p>
                </div>
                <div class="step">
                    <h3>Step 4: Scoring the Round</h3>
                    <p>Points are awarded in unmatched cards between two players. Additional bonuses are given for knocking or declaring "Gin."</p>
                </div>
            </div>
        </section>

        <section id="tips" class="gin-rummy-tips">
            <h2>Tips & Strategies</h2>
            <div class="tips-list">
                <div class="tip">
                    <h3>1. Watch the Discard Pile</h3>
                    <p>Watch the cards your opponent picks from the discard pile- it can reveal what their aiming to collect.</p>
                </div>
                <div class="tip">
                    <h3>2. Knock Early if Necessary</h3>
                    <p>If you have low unmatched points early in the game, consider knocking to the end the round before your opponent com,pletes their sets.</p>
                </div>
                <div class="tip">
                    <h3>3. Aim for Gin when Possible</h3>
                    <p>Declaring "Gin" not only secures the round but also gives you a substantial bonus, so to complete your hand when feasible.</p>
                </div>
            </div>
        </section>

        
    </div>
    );
}

export default GinRummy;
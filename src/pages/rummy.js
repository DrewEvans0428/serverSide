import React from 'react';
import './rummy.css';


function Rummy(){
    return (
        <div className="rummy">
        <section class="rummy-intro">
            <div class="intro-text">
                <h1>Welcome to Rummy</h1>
                <p>A classic card game focused on matching sets and sequences. This is a strategic game.</p>
            </div>
            <div class="intro-image">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/M_9aW1ZGgS4?si=2plF6vT5M1fs5J9Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div> 
        </section>

        <section id="rules" class="rummy-rules">
            <h2>Rules of Rummy</h2>
            <ul>
                <li>THe goal is to form sets or sequences of cards.</li>
                <li>Each player is dealt a hand of cards. A turn consists of drawing and discarding a card.</li>
                <li>The game continues until a player can declare "Rummy" by arranging all cards into valid sets.</li>
                <li>Aces can be high or low but not both in the same hand.</li>
                <li>Jokers are often used as wild cards that can replace any card to form sets or sequences.</li>
            </ul>
        </section>

        <section id="guide" class="rummy-guide">
            <h2>How to Play</h2>
            <div class="guide-steps">
                <div class="step">
                    <h3>Step 1: Deal the cards</h3>
                    <p>Each player recieves a hand of cards, typically 10 for two players or 7 for more. The remaining cards form the draw pile.</p>
                </div>
                <div class="step">
                    <h3>Step 2: Take Turns Drawing and Discarding</h3>
                    <p>On each turn, a player draws a card from the draw pile or the discard pile and discards one card.</p>
                </div>
                <div class="step">
                    <h3>Step 3: Form Sets and Sequences</h3>
                    <p>Try to arrange your cards into valid sets or sequnces. A set is 3 or 4 cards of the same rank, while a sequence is 3 or more consecutive cards of the same suit.</p>
                </div>
                <div class="step">
                    <h3>Step 4: Declare "Rummy"</h3>
                    <p>Once you have formed valid sets or sequences with all your cards, declare "Rummy" to end the round. Score the round based on remaining ungrouped cards of other players.</p>
                </div>
            </div>
        </section>

        <section id="tips" class="rummy-tips">
            <h2>Tips & Strategies</h2>
            <div class="tips-list">
                <div class="tip">
                    <h3>1. Discard High Cards Early</h3>
                    <p>Reduce your point total by getting rid of high-value cards like Aces, Kings, and Queens early in the game.</p>
                </div>
                <div class="tip">
                    <h3>2. Use Jokers Wisely</h3>
                    <p>Keep Jokers for sequences or sets that are diffiult to complete, maximizing theur strategic use.</p>
                </div>
                <div class="tip">
                    <h3>3. Watch the Discard Pile</h3>
                    <p>Pay attention to the cards other players pick up or discard-it can provide clues about their strategies.</p>
                </div>
            </div>
        </section>

       
        </div>
    );
}

export default Rummy;
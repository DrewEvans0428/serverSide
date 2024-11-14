import React from "react";
import './solitaire.css';


function Solitaire() {
    return (
        <div className="solitaire">
            <section class="solitaire-intro">
            <div class="intro-text">
                <h1>Welcome to Solitaire</h1>
                <p>The classic solo game that challenges your intelect and patience. Learn how to strategize and improve your problem solving capabilities.</p>
            </div>
            <div class="intro-image">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/oAB5fsN2uA8?si=A19slX3AzkhaImFC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
           
        <section id="rules" class="solitaire-rules">
            <h2>Rules of Solitaire</h2>
            <ul>
                <li>The goal is to move all cards to be the foundation piles, sorted by suit and in ascending order.</li>
                <li>Cards in the tableau can be arranged in order by going down, alternating red and black cards.</li>
                <li>Can move sequences of cards or individual cards between columns, but only a king can go in an empty place.</li>
                <li>You can draw cards from the stockpile, which can either be turned one at a time or three depending on style of play.</li>
            </ul>
        </section>

        <section id="guide" class="solitaire-guide">
            <h2>How to Play Solitaire</h2>
            <div class="guide-steps">
                <div class="step">
                    <h3>Step 1: Set up the game</h3>
                    <p>Game begins with 7 piles, draw a card from the stockpile to reveal additional cards. Keep playing until all piles/columns are done or you cannot make a move</p>
                </div>
                <div class="step">
                    <h3>Step 2: Move The Cards</h3>
                    <p>Look for sequences of cards that can be arranged in different ways. Can also move into foundation pile if they are in sequence.</p>
                </div>
                <div class="step">
                    <h3>Step 3: Use the stockpile</h3>
                    <p>If no moves can be made, draw from stockpile. Keep going until you cannot any more.</p>
                </div>
            </div>
        </section>

        <section id="tips" class="solitaire-tips">
            <h2>Tips and Strategies</h2>
            <div class="tips-list">
                <div class="tip">
                    <h3>1. Expose hidden cards early</h3>
                    <p>When possible prioritize moves that expose hidden cards. This allows more moves to be possible and increases chances of winning.</p>
                </div>
                <div class="tip">
                    <h3>2. Build Foundations Evenly</h3>
                    <p>Try to build all foundations evenly instead of trying to complete just one. Helps keep more cards in play and opens up more options.</p>
                </div>
                <div class="tip">
                    <h3>3. Don't Empty Columns Early</h3>
                    <p>Hold off on moving cards to an empty space unless it is a king then go ahead. Empty spaces are more valuable if you can move large sequences.</p>
                </div>
            </div>
        </section>

       
        </div>
    );
}

export default Solitaire;
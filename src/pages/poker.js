import React from "react";
import './poker.css';


function Poker() {
    return (
        <div className="poker">
            <section className="poker-intro">
            <div class="intro-text">
                <h1>Welcome to The Game of Poker</h1>
                <p>A game of deception and manipulation with a little bit of luck in there as well</p>
            </div>
            <div class="intro-image">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qd5oc9hLrXg?si=guMApcjcrHHlr8RT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </section>

            <section id="rules" class="poker-rules">
            <h2>Rules of Poker</h2>
            <ul>
                <li>Poker is a five-card game where the goal is to have the highest combination. Or you can bluff opponents into folding.</li>
                <li>Players go around and place bets each round. At the end of each round, players can "call" which is to match the bet, "raise" which is to raise the bet, or they can "fold" Which is to not bet and lose the hand.</li>
                <li>After final betting round, players will show their hands. Player with best hand wins the pot.</li>
                <li>The hand rankings use pairs, straights, flushes, and full houses with also the best possible hand "royal flush"</li>
            </ul>
            </section>

            <section id="guide" class="poker-guide">
            <h2>How to Play</h2>
            <div class="guide-steps">
                <div class="step">
                    <h3>Step 1: Know Your Cards</h3>
                    <p>Familiarize yourself with hand combinations and rankings. With at the top a royal flush</p>
                </div>
                <div class="step">
                    <h3>Step 2: Place Bets</h3>
                    <p>The game is ran with bets, play slow and bait people when you have a good hand, play fast and aggresive when you have a bad hand to show intimidation</p>
                </div>
                <div class="step">
                    <h3>Step 3: Know when to Fold</h3>
                    <p>Sometimes you have to fold, if youre unsure of your opponent and your hand isn't strong. It would probably be best to fold so you dont lose more money</p>
                </div>
                <div class="step">
                    <h3>Step 4: Reveal the Cards</h3>
                    <p>Player with the highest ranking hand wins and takes all the money</p>
                </div>
            </div>
            </section>

            <section id="tips" class="poker-tips">
            <h2>Tips & Strategies</h2>
            <div class="tips-list">
                <div class="tip">
                    <h3>1. Play Fewer hands but play aggresive</h3>
                    <p>It's better to assert confidence on the table, be patient wait for good hands. After you get a few good hands, start testing out the bluff and deception. Remember it's a mind game.</p>
                </div>
                <div class="tip">
                    <h3>2. Know When to Bluff</h3>
                    <p>Bluffing is a key part of poker, but you cannot be wreckless. If you do it too much your oppents will recognize</p>
                </div>
                <div class="tip">
                    <h3>3. Pay Attention to Oppents</h3>
                    <p>All people have common traits to them or do things when they are excited or stressed. Read the opponent like a book and crush them.</p>
                </div>
            </div>
        </section>

       
        </div>
    );
}

export default Poker;
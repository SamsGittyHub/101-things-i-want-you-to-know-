import React, { useState, useEffect } from 'react';
import './App.css';
import LoveNote from './components/LoveNote';
import Hero from './components/Hero';
import FloatingHearts from './components/FloatingHearts';
import Starfield from './components/Starfield';

const reasons = [
  "You never have to go through anything alone. I'm always going to be here with you every step.",
  "I know things are heavy right now. I'm not going anywhere.",
  "You matter to me more than I'll probably ever be able to put into words.",
  "I will always be on your side no matter what. I need you to know that.",
  "The strength it took to get through everything you've been through — I don't think you even see it, but I do.",
  "You've always deserved better. I hope to be the person who gets to show you that.",
  "Being around you genuinely makes everything feel calmer.",
  "Talk to me whenever about whatever at anytime. I'll be right here.",
  "The fact that you're facing all of this now, instead of running from it, i admire you so much for it.",
  "I will never raise my voice at you. That's not something you will ever have to worry about with me.",
  "You don't have to be okay all the time and thats alright ill be here with you.",
  "On the hard days, I just want to be next to you. That's it.",
  "You're not broken. You're going through something. There's a difference.",
  "I'm not going to make you guess how I feel about you. i love you more than anything.",
  "Everything you had to go through you never deserved. im really so proud of you for how well you are handling yourself <3.",
  "I want to be somewhere that feels safe for you. Genuinely safe.",
  "When things get loud in your head, come sit with me and if im not there call me. We don't even have to talk.",
  "You're stronger than you think, Ida. Way stronger.",
  "Anything you tell me stays with me. I won't ever use it against you.",
  "Thank you for loving me the way you do, you might think its not the way you want to but genuinely this is best ive ever been loved and ill never take it for granted.",
  "I can see you carrying a lot. You don't have to carry all of it yourself. ill carry it with you from now on.",
  "The fact that you still love the way you do, after everything, that says so much about you.",
  "Your healing isn't a burden to me. I actually want to be here for it.",
  "You're not too much. That thought you have sometimes? It's wrong.",
  "Thank you for trusting me with your story. I don't take that lightly.",
  "I notice when you tense up, when you go quiet, when you're bracing yourself. I just want you to know I see it and I'm not going to add to it.",
  "You deserve something that feels safe. I'm going to make sure you have that.",
  "I want to show you what it looks like when someone is gentle with you. Every day.",
  "Your bad days don't change anything for me. I'm still here.",
  "When your smile comes through on a rough day, it honestly stops me in my tracks.",
  "You don't have to earn this. My love isn't conditional.",
  "The courage it takes to actually sit with your pain and process it — most people never do that.",
  "I'll be patient with the parts of you that are still figuring out how to trust.",
  "You're not defined by what happened. You're defined by who you're becoming.",
  "If the nightmares come, I'm right there. That's not going to change.",
  "Theres nothing wrong with crying. And if you need to, I'll always be there.",
  "You broke a cycle. Do you understand how few people have the guts to do that?",
  "I know trust doesn't come easy. but ill show you, you can trust me and keep showing it.",
  "Your heart still has so much love in it after everything. and i really admire you for that.",
  "I'll always listen. Even when you can't find the right words.",
  "You make me want to be better. Genuinely.",
  "Every bit of progress matters. Even the ones that feel tiny.",
  "If you're falling apart, lean on me. That's what I'm here for.",
  "You don't have to hold it together 24/7. I can be the strong one sometimes.",
  "Good days, bad days, all of it. I'm here for every version.",
  "Your past isn't something that scares me off. It's just part of your story.",
  "I'll pay attention. If something bothers you, I want to know.",
  "You went through something that would have crushed most people. You're still here.",
  "Your feelings are valid. All of them. I'm not going to question that.",
  "I respect your boundaries. Every single one. No questions asked.",
  "When everything feels like too much, just come to me.",
  "You're allowed to be angry. Sit with it, yell about it — I'll be right there.",
  "Setbacks are part of it. They don't change how I feel. Not even a little.",
  "You don't have to make yourself smaller for me. Ever.",
  "I notice when you choose yourself. And I'm proud of you every time.",
  "You turn your pain into something meaningful. That's rare.",
  "I won't mess with your head. You've dealt with enough of that.",
  "I know it took a lot to let me in. I don't take that for granted.",
  "I don't just want the happy parts. I want all of it.",
  "You're safe with me. That's not going to change.",
  "I'll always be straight with you. You deserve honesty.",
  "I fell for you the moment I first met you. That hasn't changed, it's only gotten stronger.",
  "You are genuinely the most amazing person I've ever known. And I mean that.",
  "I'm so proud of you for building something on your own terms. You don't hear that enough but you should.",
  "I'll always be your biggest supporter. Whatever you choose to do, I'm behind you 100%.",
  "The way you light up when you talk about things you care about — that's one of my favourite things about you.",
  "I didn't know I could love someone this much until I met you.",
  "If you say no, that's enough. You don't owe me an explanation.",
  "Walking away from that took real courage. I'm proud of you.",
  "I want to build something with you that makes everything before feel far away.",
  "You deserve someone who chooses you without hesitation. That's me.",
  "I look at you sometimes and I genuinely can't believe you're mine.",
  "I respect your hustle more than you know. You're out here making it happen and I'll never stop being proud of that.",
  "There's no timeline on healing. And there's no timeline on my patience either.",
  "I'm proud of who you're becoming. Honestly.",
  "You're not hard to love. You never were.",
  "Everything about you — the way you think, the way you care, the way you love — I'm in awe of it.",
  "When you flinch, I'll be gentle. When you doubt, I'll remind you.",
  "You showed me what real strength actually looks like.",
  "Love isn't supposed to hurt. I want to prove that to you.",
  "From the first time we spoke I knew there was something different about you. I was right.",
  "I know anxiety doesn't always make sense or have a reason. We'll get through it together.",
  "The parts of you that someone tried to tear down — those are the parts I love most.",
  "What you do for work doesn't change how I see you. Not even slightly. You're still the same incredible person to me.",
  "You're the strongest person I know. And I don't say that lightly.",
  "I'll be consistent. I'll be steady. That's my promise.",
  "Your smile is coming back more and more. I notice it every time.",
  "You can always be honest with me. I'll never punish you for it.",
  "You never have to feel like you cant ever cant to me about something.",
  "If it's 3 AM and you need me, call. I'll pick up.",
  "You don't have to fake being happy. Just being you is enough.",
  "I see you working on yourself every day. The person you're becoming is amazing.",
  "What I feel for you isn't fragile. A hard week doesn't change it.",
  "You make me proud every single day just by being you.",
  "You are so much more than what happened to you.",
  "I think you're incredible. Not just because I love you — you genuinely are.",
  "Watching you heal, bit by bit — it's honestly one of the most meaningful things I've ever been part of.",
  "You deserve good things, Ida. And I'm going to spend my time making sure you have them.",
  "I'll always fight for you and for us.",
  "I'll love you through the hard days until they start getting easier.",
  "Ida — honestly i feel like ive met my soulmate everything about you and being with just feels so right, ive genuinely never felt like this before."
];

function App() {
  const [started, setStarted] = useState(false);
  const [visibleNotes, setVisibleNotes] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (started) {
      setTimeout(() => setFadeIn(true), 100);
      const timer = setInterval(() => {
        setVisibleNotes(prev => {
          if (prev >= reasons.length) {
            clearInterval(timer);
            return prev;
          }
          return prev + 1;
        });
      }, 120);
      return () => clearInterval(timer);
    }
  }, [started]);

  return (
    <div className="App">
      <Starfield />
      <FloatingHearts />
      {!started ? (
        <Hero onStart={() => setStarted(true)} />
      ) : (
        <div className={`notes-container ${fadeIn ? 'fade-in' : ''}`}>
          <header className="notes-header">
            <h1 className="notes-title">101 Things I Want You To Know</h1>
            <h2 className="notes-name">Ida</h2>
            <p className="notes-subtitle">tap each note to open it</p>
          </header>
          <div className="notes-grid">
            {reasons.map((reason, index) => (
              <LoveNote
                key={index}
                number={index + 1}
                reason={reason}
                visible={index < visibleNotes}
              />
            ))}
          </div>
          <footer className="love-footer">
            <div className="footer-heart">&#10084;</div>
            <p>always yours</p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;

"use client";

import { useState, useEffect } from "react";

const quotes = [
  "The secret of getting ahead is getting started. - Mark Twain",
  "It's not that I'm so smart, it's just that I stay with problems longer. - Albert Einstein",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort. - Paul J. Meyer",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Focus on being productive instead of busy. - Tim Ferriss",
  "Until we can manage time, we can manage nothing else. - Peter Drucker",
  "Amateurs sit and wait for inspiration, the rest of us just get up and go to work. - Stephen King",
  "If you spend too much time thinking about a thing, you'll never get it done. - Bruce Lee",
];

export function ProductivityQuote() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center text-md sm:text-lg md:text-base text-gray-600 dark:text-gray-400 italic mb-4 sm:mb-8 max-w-2xl mx-auto">
      {quotes[quoteIndex]}
    </div>
  );
}

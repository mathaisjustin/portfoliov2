'use client';

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// English leads so every visitor recognizes the first couple of beats,
// then Hindi (a personal touch), then the rest of the world on shuffle.
const OPENING = ["Hello", "Hi", "नमस्ते", "नमस्कार"];

const REST = [
  // Spanish
  "Hola", "Qué tal",
  // French
  "Bonjour", "Salut",
  // German
  "Hallo", "Servus",
  // Italian
  "Ciao", "Salve",
  // Portuguese
  "Olá", "Oi",
  // Japanese
  "こんにちは", "やあ",
  // Korean
  "안녕하세요", "안녕",
  // Chinese
  "你好", "嗨",
  // Russian
  "Привет", "Здравствуйте",
  // Arabic
  "مرحباً", "أهلاً",
];

const INTERVAL_MS = 2200;

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function HelloRotator() {
  // Fixed opening (English, then Hindi) followed by the rest of the
  // languages in random order; the whole sequence then loops from the top,
  // so every cycle starts familiar before ranging further afield.
  const [order, setOrder] = useState([...OPENING, ...REST]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Shuffle only after mount so the server-rendered and first client
    // render both show the same deterministic "Hello" — avoids a
    // hydration mismatch from randomizing during SSR.
    setOrder([...OPENING, ...shuffle(REST)]);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % order.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [order]);

  return (
    <span className="inline-grid">
      <AnimatePresence mode="wait">
        <motion.span
          key={`${order[index]}-${index}`}
          style={{ gridArea: "1 / 1" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {order[index]},
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

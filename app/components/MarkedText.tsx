'use client';

import { useEffect, useState } from 'react';

const colors = [
  '#ff8c19', // original orange
  '#4CAF50', // green
  '#2196F3', // blue
  '#9C27B0', // purple
  '#E91E63', // pink
  '#00BCD4', // cyan
];

export default function MarkedText({
  children,
}: {
  children: React.ReactNode;
}) {
  const [color, setColor] = useState(colors[0]);

  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  }, []);

  return <mark style={{ color }}>{children}</mark>;
}

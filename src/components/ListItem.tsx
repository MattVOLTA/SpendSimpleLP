import React from 'react';
import { Check } from 'lucide-react';

interface ListItemProps {
  text: string;
}

export function ListItem({ text }: ListItemProps) {
  return (
    <li className="flex items-center gap-2">
      <Check className="w-5 h-5 text-green-500" />
      <span>{text}</span>
    </li>
  );
}
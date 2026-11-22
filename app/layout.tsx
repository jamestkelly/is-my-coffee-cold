import type { ReactNode } from 'react';
import './style.css';

export const metadata = { title: 'Is my coffee cold?', description: 'Estimate when your coffee will be too cold for your taste.' };

export default function Layout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}

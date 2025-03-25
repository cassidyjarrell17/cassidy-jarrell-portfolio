// app/layout.tsx
import Header from '../components/Header';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}

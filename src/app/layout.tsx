import { Inter } from 'next/font/google';
import Image from 'next/image';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Davey Struijk',
  description: '',
};

function Header() {
  return (
    <div>
      <Image
        className="rounded-full"
        src="images/profile.jpg"
        width={256}
        height={256}
        alt="Profile Picture"
      />
      <p>TODO: Finish me</p>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}

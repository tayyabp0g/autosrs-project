import '../src/app/globals.css';

export const metadata = {
  title: 'AutoSRS.ai',
  description: 'Generate IEEE 830 SRS documents',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤖</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  );
}

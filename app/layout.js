import '../src/app/globals.css';

export const metadata = {
  title: 'AutoSRS.ai',
  description: 'Generate IEEE 830 SRS documents',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

/* eslint-disable @next/next/no-head-element */
import Navigation from 'src/components/Molecules/Navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>V_Dictionary</title>
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}

 
import {Providers} from 'store/query'
import StyleProvider from '../StyleProvider'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}> 
      <body suppressHydrationWarning={true}  >
      <Providers>{children}</Providers>      
      </body>
    </html>
  );
}

import { CartProvider } from './[locale]/context/CartContext';
import { AuthProvider } from './providers';
import Breadcrumbs from './components/share/breadcrumb/breadcrumb';
import './globals.css';

export default function RootLayout({ 
  children
}: { 
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <AuthProvider>
        <Breadcrumbs />
        {children}
      </AuthProvider>
    </CartProvider>
  );
}

'use client'
import { usePathname } from '@/i18n/navigation';
// import Header from './header';
import Navbar from './navbar';

export default function ConditionalHeader() {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  if (isAuthPage) return null;
  return <Navbar />;
  // return <Header />;
}
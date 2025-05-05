import { Metadata } from 'next';

import { siteConfig } from '@/config/site'; // adjust path as needed

export const metadata: Metadata = {
  title: {
    default: 'Login',
    template: `%s - ${siteConfig.name}`,
  },
  description: 'Log in to access your account.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
        {children}
      </div>
    </main>
  );
}

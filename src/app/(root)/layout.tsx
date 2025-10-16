import Header from '@/components/Header';
import React, { PropsWithChildren } from 'react';

const layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="min-h-screen text-gray-400">
      <Header />
      <div className="container py-10">{children}</div>
    </main>
  );
};

export default layout;

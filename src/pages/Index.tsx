import React from 'react';
import { LoginForm } from '@/components/auth/LoginForm'; // Import the new LoginForm

function Index() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Render the LoginForm component */}
      <LoginForm />
    </div>
  );
}

export default Index;

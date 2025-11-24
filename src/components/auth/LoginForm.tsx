import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShineButton } from '@/components/ui/shine-button';
import { TypingText } from '@/components/ui/typing-text';
import { GlowingBackground } from '@/components/ui/glowing-background';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // Implement actual authentication logic here
    alert('Login functionality not implemented yet. Check console for values.');
  };

  return (
    <GlowingBackground className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 space-y-6 bg-background/80 backdrop-blur-sm shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-foreground">
          <TypingText text="Welcome Back!" className="text-center" />
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email or Username</Label>
            <Input
              id="email"
              type="text"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <ShineButton type="submit" className="w-full">
            Login
          </ShineButton>
        </form>
      </Card>
    </GlowingBackground>
  );
}

import React, { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setError('Feedback message is required.');
      return;
    }
    setError('');

    // Create email content
    const subject = `Feedback from ${name || 'Anonymous'}`;
    const body = `Name: ${name || 'Anonymous'}\nEmail: ${email || 'Not provided'}\n\nMessage:\n${message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:mutambisit1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    setSubmitted(true);
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Your name (optional)"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Your email (optional)"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Textarea
        placeholder="Your feedback (required)"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <Button type="submit" disabled={submitted}>
        {submitted ? 'Thank you for your feedback!' : 'Submit Feedback'}
      </Button>
    </form>
  );
};

export default FeedbackForm; 
import React from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import FeedbackForm from '@/components/FeedbackForm';

const Feedback = () => (
  <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
    <Header title="Feedback" showBack={true} />
    <main className="flex-1 container px-4 py-6 pb-24">
      <div className="max-w-xl mx-auto p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">We value your feedback!</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Let us know your thoughts, suggestions, or issues. Your feedback helps us improve ChineseBuddie.
        </p>
        <FeedbackForm />
      </div>
    </main>
    <BottomNavigation />
  </div>
);

export default Feedback; 
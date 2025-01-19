'use client';

import { useEffect, useState } from 'react';

export default function VisitCounter() {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Initial fetch
        const response = await fetch('/api/visit-count');
        if (!response.ok) throw new Error('Failed to fetch count');
        const data = await response.json();
        setCount(data.count);

        // Increment count
        const incrementResponse = await fetch('/api/visit-count', { method: 'POST' });
        if (!incrementResponse.ok) throw new Error('Failed to increment count');
        const incrementData = await incrementResponse.json();
        setCount(incrementData.count);
      } catch (err) {
        console.error('Visit counter error:', err);
        setError(err instanceof Error ? err.message : 'Failed to update counter');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="text-xs text-red-400 absolute bottom-2 right-2">
        Error: {error}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-xs text-white/50 absolute bottom-2 right-2">
        Loading...
      </div>
    );
  }

  return (
    <div className="text-xs text-white/50 absolute bottom-2 right-2">
      {count.toLocaleString()} visits
    </div>
  );
} 
'use client';
import { useSearchParams } from 'next/navigation';

export default function NotFoundClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div className="text-center mt-5">
      <h1>404 - Page Not Found</h1>
      {query ? <p>You searched for: {query}</p> : <p>No search query found.</p>}
    </div>
  );
}

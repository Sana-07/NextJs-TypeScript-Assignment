// app/client/page.tsx
import { Suspense } from 'react';
import ClientComponent from '../../components/ClientPageContent';

export default function ClientPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ClientComponent />
    </Suspense>
  );
}

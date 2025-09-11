"use client";

import { Suspense } from "react";
import SearchResults from "./SearchResults";

export default function SearchResultsWrapper() {
  return (
    <Suspense fallback={<p>⏳ Loading search...</p>}>
      <SearchResults />
    </Suspense>
  );
}

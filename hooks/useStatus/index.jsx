import { useState } from 'react';

export function useStatus() {
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return { statusMessage, setStatusMessage, isLoading, setIsLoading };
}
import { useState } from 'react';

export default function useAuthModel() {
  const [user, setUser] = useState(0);
  return { user, setUser };
}

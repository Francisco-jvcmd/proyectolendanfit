import { useState } from 'react';
import { UserData } from '@/types';

const defaultUserData: UserData = {
  age: 25,
  weight: 70,
  height: 170,
  stepsLevel: 'medium',
  healthStatus: 'average',
  mainObjective: 'improve-resistance'
};

export function useUserData() {
  const [userData, setUserData] = useState<UserData>(defaultUserData);

  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const resetUserData = () => {
    setUserData(defaultUserData);
  };

  return {
    userData,
    updateUserData,
    resetUserData,
    setUserData
  };
}

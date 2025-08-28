import React, { createContext, useContext, useState } from 'react';

interface AudioContextType {
  play: boolean;
  setPlay: (play: boolean) => void;
  pause: () => void;
  notPause: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [play, setPlay] = useState(false);

  const pause = () => setPlay(false);
  const notPause = () => setPlay(true);

  return (
    <AudioContext.Provider value={{ play, setPlay, pause, notPause }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

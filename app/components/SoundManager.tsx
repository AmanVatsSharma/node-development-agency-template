"use client";

/**
 * SoundManager - Handles ambient tech sounds for immersive experience
 * Features:
 * - Ambient electrical hum
 * - Data transfer whooshes
 * - Toggle control
 * - Auto-fade in
 */

import { useEffect, useRef, useState } from 'react';

export default function SoundManager() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  
  useEffect(() => {
    // Create Web Audio API context for ambient sound
    if (typeof window !== 'undefined') {
      console.log("🔊 [SoundManager] Initializing audio system...");
      
      // Wait for user interaction to start audio (browser requirement)
      const startAudio = () => {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
          
          // Create oscillator for ambient hum
          oscillatorRef.current = audioContextRef.current.createOscillator();
          gainNodeRef.current = audioContextRef.current.createGain();
          
          // Low frequency hum (60 Hz - electrical frequency)
          oscillatorRef.current.type = 'sine';
          oscillatorRef.current.frequency.setValueAtTime(60, audioContextRef.current.currentTime);
          
          // Start very quiet
          gainNodeRef.current.gain.setValueAtTime(0, audioContextRef.current.currentTime);
          
          // Connect nodes
          oscillatorRef.current.connect(gainNodeRef.current);
          gainNodeRef.current.connect(audioContextRef.current.destination);
          
          // Start oscillator
          oscillatorRef.current.start();
          
          // Fade in over 2 seconds to target volume (0.05 = 5% volume)
          gainNodeRef.current.gain.linearRampToValueAtTime(
            0.05, 
            audioContextRef.current.currentTime + 2
          );
          
          setIsPlaying(true);
          console.log("✅ [SoundManager] Ambient sound started");
          
          // Remove listener after first interaction
          document.removeEventListener('click', startAudio);
          document.removeEventListener('touchstart', startAudio);
          document.removeEventListener('keydown', startAudio);
        }
      };
      
      // Listen for any user interaction to start audio
      document.addEventListener('click', startAudio, { once: true });
      document.addEventListener('touchstart', startAudio, { once: true });
      document.addEventListener('keydown', startAudio, { once: true });
      
      // Show notification that audio is available
      const notification = document.createElement('div');
      notification.innerHTML = `
        <div style="position: fixed; bottom: 20px; right: 20px; background: rgba(0,0,0,0.8); 
             color: #00ff41; padding: 12px 20px; border-radius: 8px; border: 1px solid #00ff41; 
             font-size: 12px; z-index: 10000; animation: fadeIn 0.5s ease-in;">
          🔊 Click anywhere to enable immersive sound
        </div>
      `;
      document.body.appendChild(notification);
      
      // Remove notification after 5 seconds
      setTimeout(() => {
        notification.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
      }, 5000);
    }
    
    return () => {
      // Cleanup
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);
  
  const toggleMute = () => {
    if (gainNodeRef.current && audioContextRef.current) {
      if (isMuted) {
        // Unmute - fade in
        gainNodeRef.current.gain.linearRampToValueAtTime(
          0.05, 
          audioContextRef.current.currentTime + 0.5
        );
        console.log("🔊 [SoundManager] Audio unmuted");
      } else {
        // Mute - fade out
        gainNodeRef.current.gain.linearRampToValueAtTime(
          0, 
          audioContextRef.current.currentTime + 0.5
        );
        console.log("🔇 [SoundManager] Audio muted");
      }
      setIsMuted(!isMuted);
    }
  };
  
  return (
    <>
      {/* Sound toggle button */}
      {isPlaying && (
        <button
          onClick={toggleMute}
          className="fixed bottom-8 right-8 z-50 p-3 bg-black/70 backdrop-blur-sm border border-[#00ff41]/50 rounded-full hover:scale-110 transition-transform duration-300 group"
          aria-label={isMuted ? "Unmute ambient sound" : "Mute ambient sound"}
        >
          {isMuted ? (
            <svg className="w-6 h-6 text-[#00ff41]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-[#00ff41]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
          <span className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-black/90 text-[#00ff41] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {isMuted ? "Unmute" : "Mute"} ambient sound
          </span>
        </button>
      )}
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(10px); }
        }
      `}</style>
    </>
  );
}


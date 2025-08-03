import { Volume2, VolumeX } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";

interface AudioControlsProps {
  text: string;
  volume: number;
  onVolumeChange: (volume: number[]) => void;
  isVisible?: boolean;
}

export const AudioControls = ({ 
  text, 
  volume, 
  onVolumeChange, 
  isVisible = true 
}: AudioControlsProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Configurar volume da síntese de voz
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel(); // Cancelar qualquer fala anterior
    }
  }, [volume]);

  // Auto-reproduzir quando o texto mudar
  useEffect(() => {
    if (text && text.trim() && 'speechSynthesis' in window) {
      speechSynthesis.cancel(); // Cancelar fala anterior
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = volume / 100;
      
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      
      speechSynthesis.speak(utterance);
      console.log("Reproduzindo áudio automaticamente:", text.substring(0, 50) + "...");
    }
  }, [text, volume]);

  if (!isVisible) return null;

  return (
    <div className="flex items-center gap-4 p-4 bg-black/50 backdrop-blur-sm rounded-lg pointer-events-auto">
      {/* Status do áudio */}
      <div className="flex items-center gap-2">
        <span className="text-white/80 text-sm">
          {isPlaying ? "Reproduzindo..." : "Áudio pronto"}
        </span>
      </div>

      {/* Controle de volume */}
      <div className="flex items-center gap-2 min-w-[100px]">
        {volume === 0 ? (
          <VolumeX className="w-4 h-4 text-white/60" />
        ) : (
          <Volume2 className="w-4 h-4 text-white/60" />
        )}
        <Slider
          value={[volume]}
          onValueChange={onVolumeChange}
          max={100}
          step={1}
          className="flex-1"
        />
        <span className="text-xs text-white/60 w-8 text-right">
          {volume}%
        </span>
      </div>
    </div>
  );
};
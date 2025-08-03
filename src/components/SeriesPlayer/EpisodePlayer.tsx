import { useState, useEffect, useRef, useCallback } from "react";
import { Movie } from "@/types/movie";
import { PlayerControls } from "@/components/MoviePlayer/PlayerControls";
import { AudioControls } from "@/components/MoviePlayer/AudioControls";
import { useMoviePlayer } from "@/components/MoviePlayer/useMoviePlayer";

interface EpisodePlayerProps {
  episode: Movie;
  onNextEpisode?: () => void;
  onPrevEpisode?: () => void;
  hasNextEpisode?: boolean;
  hasPrevEpisode?: boolean;
}

export const EpisodePlayer = ({ 
  episode, 
  onNextEpisode, 
  onPrevEpisode,
  hasNextEpisode = false,
  hasPrevEpisode = false
}: EpisodePlayerProps) => {
  const {
    currentSceneIndex,
    isPlaying,
    progress,
    volume,
    currentTime,
    totalDuration,
    isLoading,
    currentScene,
    handlePlay,
    handlePause,
    handleVolumeChange,
    handleSceneSelect,
    handleNextScene,
    handlePrevScene
  } = useMoviePlayer(episode);

  const [showSceneNavigation, setShowSceneNavigation] = useState(false);
  const isFirstScene = currentSceneIndex === 0;
  const isLastScene = currentSceneIndex === episode.scenes.length - 1;

  // Auto-avançar para próximo episódio quando terminar
  useEffect(() => {
    if (isLastScene && progress >= 99 && hasNextEpisode && onNextEpisode) {
      const timer = setTimeout(() => {
        onNextEpisode();
      }, 2000); // Aguarda 2 segundos após o fim
      
      return () => clearTimeout(timer);
    }
  }, [isLastScene, progress, hasNextEpisode, onNextEpisode]);

  const currentSceneData = episode.scenes[currentSceneIndex];

  return (
    <div className="relative h-full w-full bg-black">
      {/* Player Principal */}
      <div className="relative h-full w-full">
        {currentScene && (
          <img
            src={currentScene.imageUrl}
            alt={`Cena ${currentSceneIndex + 1}`}
            className="w-full h-full object-cover"
          />
        )}

        {/* Overlay para controles */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30">
          
          {/* Informações do Episódio */}
          <div className="absolute top-4 left-4 right-4">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
              <h1 className="text-white text-xl font-bold mb-1">
                {episode.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-white/80">
                <span>T{episode.seasonNumber} EP{episode.episodeNumber}</span>
                <span>•</span>
                <span>{episode.duration}</span>
                <span>•</span>
                <span>{episode.genre}</span>
              </div>
            </div>
          </div>

          {/* Mini Navegação de Cenas */}
          {showSceneNavigation && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="bg-black/70 backdrop-blur-sm rounded-lg p-2 max-h-96 overflow-y-auto">
                <div className="space-y-1">
                  {episode.scenes.map((scene, index) => (
                    <button
                      key={scene.id}
                      onClick={() => handleSceneSelect(index)}
                      className={`flex items-center gap-2 p-2 rounded text-sm transition-colors w-full text-left ${
                        index === currentSceneIndex 
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-white hover:bg-white/20'
                      }`}
                    >
                      <span className="text-xs">#{index + 1}</span>
                      <span className="truncate">{scene.text.substring(0, 30)}...</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Controles Principais */}
          <PlayerControls
            isPlaying={isPlaying}
            progress={progress}
            volume={volume}
            currentSceneIndex={currentSceneIndex}
            totalScenes={episode.scenes.length}
            currentTime={currentTime}
            totalDuration={totalDuration}
            onPlay={handlePlay}
            onPause={handlePause}
            onPrevScene={handlePrevScene}
            onNextScene={handleNextScene}
            onVolumeChange={handleVolumeChange}
            isFirstScene={isFirstScene}
            isLastScene={isLastScene}
            isLoading={isLoading}
          />

          {/* Controles de Episódio */}
          <div className="absolute bottom-20 right-4">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setShowSceneNavigation(!showSceneNavigation)}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm transition-colors"
              >
                Cenas ({currentSceneIndex + 1}/{episode.scenes.length})
              </button>
              
              {hasPrevEpisode && (
                <button
                  onClick={onPrevEpisode}
                  className="bg-primary/80 hover:bg-primary backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm transition-colors"
                >
                  Episódio Anterior
                </button>
              )}
              
              {hasNextEpisode && (
                <button
                  onClick={onNextEpisode}
                  className="bg-primary/80 hover:bg-primary backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm transition-colors"
                >
                  Próximo Episódio
                </button>
              )}
            </div>
          </div>

          {/* Texto da Cena */}
          {currentScene && (
            <div className="absolute bottom-32 left-4 right-4">
              <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 max-w-2xl">
                <p className="text-white text-lg leading-relaxed">
                  {currentScene.text}
                </p>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Controles de Áudio */}
      <div className="absolute bottom-4 left-4">
        <AudioControls 
          text={currentScene?.text || ""}
          volume={volume}
          onVolumeChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};
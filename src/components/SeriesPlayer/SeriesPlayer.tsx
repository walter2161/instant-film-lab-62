import { useState, useCallback } from "react";
import { Series, Movie } from "@/types/movie";
import { SeasonNavigation } from "./SeasonNavigation";
import { EpisodePlayer } from "./EpisodePlayer";

interface SeriesPlayerProps {
  series: Series;
  initialSeason?: number;
  initialEpisode?: number;
}

export const SeriesPlayer = ({ 
  series, 
  initialSeason = 1, 
  initialEpisode = 1 
}: SeriesPlayerProps) => {
  const [currentSeason, setCurrentSeason] = useState(initialSeason);
  const [currentEpisode, setCurrentEpisode] = useState(initialEpisode);
  const [selectedEpisode, setSelectedEpisode] = useState<Movie | null>(null);

  // Encontrar episódio atual
  const getCurrentEpisode = useCallback(() => {
    if (selectedEpisode) return selectedEpisode;
    
    return series.episodes.find(ep => 
      (ep.seasonNumber || 1) === currentSeason && 
      (ep.episodeNumber || 1) === currentEpisode
    ) || series.episodes[0];
  }, [series.episodes, currentSeason, currentEpisode, selectedEpisode]);

  const currentEpisodeData = getCurrentEpisode();

  // Navegação entre episódios
  const handleEpisodeSelect = useCallback((seasonNumber: number, episodeNumber: number, episode: Movie) => {
    setCurrentSeason(seasonNumber);
    setCurrentEpisode(episodeNumber);
    setSelectedEpisode(episode);
  }, []);

  const handleNextEpisode = useCallback(() => {
    const currentSeasonEpisodes = series.episodes
      .filter(ep => (ep.seasonNumber || 1) === currentSeason)
      .sort((a, b) => (a.episodeNumber || 1) - (b.episodeNumber || 1));
    
    const currentIndex = currentSeasonEpisodes.findIndex(ep => ep.id === currentEpisodeData.id);
    
    if (currentIndex < currentSeasonEpisodes.length - 1) {
      // Próximo episódio da mesma temporada
      const nextEpisode = currentSeasonEpisodes[currentIndex + 1];
      handleEpisodeSelect(
        currentSeason, 
        nextEpisode.episodeNumber || currentIndex + 2, 
        nextEpisode
      );
    } else {
      // Primeira episódio da próxima temporada
      const nextSeasonEpisodes = series.episodes
        .filter(ep => (ep.seasonNumber || 1) === currentSeason + 1)
        .sort((a, b) => (a.episodeNumber || 1) - (b.episodeNumber || 1));
      
      if (nextSeasonEpisodes.length > 0) {
        const firstEpisodeNextSeason = nextSeasonEpisodes[0];
        handleEpisodeSelect(
          currentSeason + 1, 
          firstEpisodeNextSeason.episodeNumber || 1, 
          firstEpisodeNextSeason
        );
      }
    }
  }, [series.episodes, currentSeason, currentEpisodeData, handleEpisodeSelect]);

  const handlePrevEpisode = useCallback(() => {
    const currentSeasonEpisodes = series.episodes
      .filter(ep => (ep.seasonNumber || 1) === currentSeason)
      .sort((a, b) => (a.episodeNumber || 1) - (b.episodeNumber || 1));
    
    const currentIndex = currentSeasonEpisodes.findIndex(ep => ep.id === currentEpisodeData.id);
    
    if (currentIndex > 0) {
      // Episódio anterior da mesma temporada
      const prevEpisode = currentSeasonEpisodes[currentIndex - 1];
      handleEpisodeSelect(
        currentSeason, 
        prevEpisode.episodeNumber || currentIndex, 
        prevEpisode
      );
    } else {
      // Último episódio da temporada anterior
      const prevSeasonEpisodes = series.episodes
        .filter(ep => (ep.seasonNumber || 1) === currentSeason - 1)
        .sort((a, b) => (a.episodeNumber || 1) - (b.episodeNumber || 1));
      
      if (prevSeasonEpisodes.length > 0) {
        const lastEpisodePrevSeason = prevSeasonEpisodes[prevSeasonEpisodes.length - 1];
        handleEpisodeSelect(
          currentSeason - 1, 
          lastEpisodePrevSeason.episodeNumber || prevSeasonEpisodes.length, 
          lastEpisodePrevSeason
        );
      }
    }
  }, [series.episodes, currentSeason, currentEpisodeData, handleEpisodeSelect]);

  // Verificar se há episódios anterior/próximo
  const hasNextEpisode = (() => {
    const currentSeasonEpisodes = series.episodes
      .filter(ep => (ep.seasonNumber || 1) === currentSeason);
    const currentIndex = currentSeasonEpisodes.findIndex(ep => ep.id === currentEpisodeData.id);
    
    return currentIndex < currentSeasonEpisodes.length - 1 || 
           series.episodes.some(ep => (ep.seasonNumber || 1) > currentSeason);
  })();

  const hasPrevEpisode = (() => {
    const currentSeasonEpisodes = series.episodes
      .filter(ep => (ep.seasonNumber || 1) === currentSeason);
    const currentIndex = currentSeasonEpisodes.findIndex(ep => ep.id === currentEpisodeData.id);
    
    return currentIndex > 0 || 
           series.episodes.some(ep => (ep.seasonNumber || 1) < currentSeason);
  })();

  if (!currentEpisodeData) {
    return (
      <div className="h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Episódio não encontrado</p>
      </div>
    );
  }

  return (
    <div className="h-screen flex bg-background">
      {/* Navegação Lateral */}
      <SeasonNavigation
        series={series}
        currentSeason={currentSeason}
        currentEpisode={currentEpisode}
        onEpisodeSelect={handleEpisodeSelect}
      />

      {/* Player Principal */}
      <div className="flex-1">
        <EpisodePlayer
          episode={currentEpisodeData}
          onNextEpisode={hasNextEpisode ? handleNextEpisode : undefined}
          onPrevEpisode={hasPrevEpisode ? handlePrevEpisode : undefined}
          hasNextEpisode={hasNextEpisode}
          hasPrevEpisode={hasPrevEpisode}
        />
      </div>
    </div>
  );
};
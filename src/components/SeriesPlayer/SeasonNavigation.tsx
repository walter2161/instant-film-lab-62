import { useState, useCallback } from "react";
import { Series, Movie } from "@/types/movie";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Clock, Users } from "lucide-react";

interface SeasonNavigationProps {
  series: Series;
  currentSeason: number;
  currentEpisode: number;
  onEpisodeSelect: (seasonNumber: number, episodeNumber: number, episode: Movie) => void;
}

export const SeasonNavigation = ({ 
  series, 
  currentSeason, 
  currentEpisode, 
  onEpisodeSelect 
}: SeasonNavigationProps) => {
  const [selectedSeason, setSelectedSeason] = useState(currentSeason);

  // Agrupar episódios por temporada
  const episodesBySeason = series.episodes.reduce((acc, episode) => {
    const season = episode.seasonNumber || 1;
    if (!acc[season]) acc[season] = [];
    acc[season].push(episode);
    return acc;
  }, {} as Record<number, Movie[]>);

  const seasons = Object.keys(episodesBySeason).map(Number).sort();
  const currentSeasonEpisodes = episodesBySeason[selectedSeason] || [];

  const handleSeasonChange = useCallback((season: number) => {
    setSelectedSeason(season);
    // Automaticamente selecionar o primeiro episódio da temporada
    const firstEpisode = episodesBySeason[season]?.[0];
    if (firstEpisode) {
      onEpisodeSelect(season, 1, firstEpisode);
    }
  }, [episodesBySeason, onEpisodeSelect]);

  const handleEpisodeSelect = useCallback((episode: Movie) => {
    onEpisodeSelect(
      episode.seasonNumber || 1, 
      episode.episodeNumber || 1, 
      episode
    );
  }, [onEpisodeSelect]);

  return (
    <div className="w-80 bg-background border-r border-border h-full overflow-y-auto">
      {/* Cabeçalho da Série */}
      <div className="p-4 border-b border-border">
        <h2 className="font-bold text-lg mb-2">{series.title}</h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="w-4 h-4" />
          <span>{series.totalSeasons} temporadas</span>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary">{series.genre}</Badge>
          <Badge variant="outline">{series.style}</Badge>
        </div>
      </div>

      {/* Navegação de Temporadas */}
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold mb-3">Temporadas</h3>
        <div className="grid grid-cols-3 gap-2">
          {seasons.map((season) => (
            <Button
              key={season}
              variant={selectedSeason === season ? "default" : "outline"}
              size="sm"
              onClick={() => handleSeasonChange(season)}
              className="h-8"
            >
              T{season}
            </Button>
          ))}
        </div>
      </div>

      {/* Lista de Episódios */}
      <div className="p-4">
        <h3 className="font-semibold mb-3">
          Temporada {selectedSeason} - Episódios
        </h3>
        <div className="space-y-2">
          {currentSeasonEpisodes.map((episode, index) => {
            const isCurrentEpisode = 
              selectedSeason === currentSeason && 
              (episode.episodeNumber || index + 1) === currentEpisode;
            
            return (
              <Card 
                key={episode.id}
                className={`cursor-pointer transition-colors hover:bg-muted/50 ${
                  isCurrentEpisode ? 'bg-primary/10 border-primary' : ''
                }`}
                onClick={() => handleEpisodeSelect(episode)}
              >
                <CardContent className="p-3">
                  <div className="flex items-start gap-3">
                    <div className="relative flex-shrink-0">
                      <img
                        src={episode.thumbnail}
                        alt={episode.title}
                        className="w-16 h-9 object-cover rounded"
                      />
                      {isCurrentEpisode && (
                        <div className="absolute inset-0 bg-primary/20 rounded flex items-center justify-center">
                          <Play className="w-4 h-4 text-primary" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-muted-foreground">
                          EP {episode.episodeNumber || index + 1}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>30s</span>
                        </div>
                      </div>
                      
                      <h4 className="font-medium text-sm line-clamp-1 mb-1">
                        {episode.title}
                      </h4>
                      
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {episode.synopsis}
                      </p>
                      
                      {episode.characters && episode.characters.length > 0 && (
                        <div className="flex items-center gap-1 mt-2">
                          <Users className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {episode.characters.length} personagens
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
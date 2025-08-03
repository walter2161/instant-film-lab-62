import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MoviePlayer } from "@/components/MoviePlayer/MoviePlayer";
import { SeriesPlayer } from "@/components/SeriesPlayer/SeriesPlayer";
import { MovieService } from "@/services/movieService";
import { Movie, Series } from "@/types/movie";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Film, Info, Tv } from "lucide-react";
import { FEATURED_MOVIES, FEATURED_SERIES } from "@/data/featuredContent";

export const Player = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [series, setSeries] = useState<Series | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movieId) {
      loadMovie(movieId);
    }
  }, [movieId]);

  const loadMovie = (id: string) => {
    // Primeiro verifica nos filmes salvos
    const savedMovies = MovieService.getSavedMovies();
    let foundMovie = savedMovies.find(m => m.id === id);
    
    // Se não encontrou nos salvos, verifica nos filmes em destaque
    if (!foundMovie) {
      foundMovie = FEATURED_MOVIES.find(m => m.id === id);
    }
    
    // Se ainda não encontrou, verifica nos episódios de séries
    if (!foundMovie) {
      for (const seriesItem of FEATURED_SERIES) {
        foundMovie = seriesItem.episodes.find(ep => ep.id === id);
        if (foundMovie) {
          // Se encontrou um episódio, carrega a série completa
          setSeries(seriesItem);
          setMovie(foundMovie);
          setLoading(false);
          return;
        }
      }
    }

    // Se ainda não encontrou, verifica se é uma série diretamente
    if (!foundMovie) {
      const foundSeries = FEATURED_SERIES.find(s => s.id === id);
      if (foundSeries) {
        setSeries(foundSeries);
        setMovie(foundSeries.episodes[0]); // Primeiro episódio
        setLoading(false);
        return;
      }
    }
    
    setMovie(foundMovie || null);
    setSeries(null);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Carregando filme...</p>
        </div>
      </div>
    );
  }

  if (!movie && !series) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            {series ? <Tv className="w-16 h-16 text-muted-foreground" /> : <Film className="w-16 h-16 text-muted-foreground" />}
          </div>
          <h1 className="text-2xl font-bold mb-2">Conteúdo não encontrado</h1>
          <p className="text-muted-foreground mb-6">
            O {series ? 'episódio' : 'filme'} que você está procurando não existe ou foi removido.
          </p>
          <Link to="/">
            <Button variant="cinema" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Início
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link to="/my-movies">
          <Button variant="glass" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </Link>
      </div>

      {/* Content Info Popup */}
      <div className="fixed top-4 right-4 z-50">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="glass" size="sm" className="gap-2">
              <Info className="w-4 h-4" />
              Info
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                {series ? series.title : movie?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Sinopse</h4>
                <p className="text-sm text-muted-foreground">
                  {series ? series.synopsis : movie?.synopsis}
                </p>
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                  {series ? series.genre : movie?.genre}
                </span>
                <span className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  {series ? series.style : movie?.style}
                </span>
                {series && (
                  <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                    {series.totalSeasons} temporadas
                  </span>
                )}
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Informações Técnicas</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  {series ? (
                    <>
                      <p><strong>Episódios:</strong> {series.episodes.length}</p>
                      <p><strong>Temporadas:</strong> {series.totalSeasons}</p>
                    </>
                  ) : (
                    <>
                      <p><strong>Cenas:</strong> {movie?.scenes.length}</p>
                      <p><strong>Duração:</strong> {movie?.duration}</p>
                    </>
                  )}
                  <p><strong>Aspect Ratio:</strong> {series ? series.aspectRatio : movie?.aspectRatio}</p>
                  <p><strong>Criado em:</strong> {new Date(series ? series.createdAt : movie?.createdAt || '').toLocaleDateString('pt-BR')}</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Player */}
      {series ? (
        <SeriesPlayer 
          series={series} 
          initialSeason={movie?.seasonNumber || 1}
          initialEpisode={movie?.episodeNumber || 1}
        />
      ) : movie ? (
        <MoviePlayer movie={movie} />
      ) : null}
    </div>
  );
};
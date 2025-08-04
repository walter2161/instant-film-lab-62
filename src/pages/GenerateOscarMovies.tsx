import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OscarMovieGenerator } from "@/services/oscarMovieGenerator";
import { Movie } from "@/types/movie";
import { toast } from "sonner";

export default function GenerateOscarMovies() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentMovie, setCurrentMovie] = useState('');
  const [generatedMovies, setGeneratedMovies] = useState<Movie[]>([]);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setProgress(0);
    setGeneratedMovies([]);
    
    try {
      toast.info("Iniciando geração de 20 filmes baseados em ganhadores do Oscar...");
      
      const movies = await OscarMovieGenerator.generateOscarBasedMovies();
      
      setGeneratedMovies(movies);
      setProgress(100);
      toast.success(`${movies.length} filmes gerados com sucesso!`);
      
      // Salvar no localStorage para uso posterior
      localStorage.setItem('oscar_movies_generated', JSON.stringify(movies));
      
    } catch (error) {
      console.error('Erro ao gerar filmes:', error);
      toast.error("Erro ao gerar filmes. Tente novamente.");
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadMoviesJson = () => {
    if (generatedMovies.length === 0) return;
    
    const dataStr = JSON.stringify(generatedMovies, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'oscar_movies.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Gerador de Filmes Baseados em Ganhadores do Oscar
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Clique abaixo para gerar 20 filmes completos baseados em ganhadores do Oscar, 
                todos com cartazes 9:16 e narrativas adaptadas para o contexto brasileiro.
              </p>
              
              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating}
                size="lg"
                className="w-full max-w-md"
              >
                {isGenerating ? "Gerando..." : "Gerar 20 Filmes do Oscar"}
              </Button>
            </div>

            {isGenerating && (
              <div className="space-y-4">
                <Progress value={progress} className="w-full" />
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    {currentMovie || "Preparando geração..."}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Este processo pode levar alguns minutos...
                  </p>
                </div>
              </div>
            )}

            {generatedMovies.length > 0 && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">
                    Filmes Gerados ({generatedMovies.length})
                  </h3>
                  <Button onClick={downloadMoviesJson} variant="outline">
                    Download JSON
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                  {generatedMovies.map((movie, index) => (
                    <Card key={movie.id} className="text-sm">
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">{movie.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                          {movie.genre} • {movie.style}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-3">
                          {movie.synopsis}
                        </p>
                        <div className="mt-2 text-xs text-muted-foreground">
                          {movie.scenes.length} cenas geradas
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
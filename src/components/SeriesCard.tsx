import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Tv } from "lucide-react";
import { Series } from "@/types/movie";
import { Link } from "react-router-dom";

interface SeriesCardProps {
  series: Series;
}

export const SeriesCard = ({ series }: SeriesCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 bg-gradient-card hover:shadow-intense transition-all duration-300 hover:-translate-y-2">
      <div className="relative aspect-[9/16] overflow-hidden">
        <img 
          src={series.thumbnail} 
          alt={series.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link to={`/player/${series.episodes[0].id}`}>
            <Button variant="glass" size="lg" className="gap-2 shadow-intense">
              <Play className="w-5 h-5" />
              Assistir S1E1
            </Button>
          </Link>
        </div>
        
        {/* Series Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="gap-1 bg-accent/90 text-accent-foreground">
            <Tv className="w-3 h-3" />
            Série
          </Badge>
        </div>
        
        {/* Episodes Count */}
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-black/50 text-white border-white/20">
            {series.episodes.length} EP
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
          {series.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {series.synopsis}
        </p>
        
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline" className="text-xs">
            {series.genre}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {series.style}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
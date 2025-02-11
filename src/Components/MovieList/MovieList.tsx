
import React from 'react';
import { MovieItem } from '../MovieItem/MovieItem';
import { IMovie } from '../../types/movie.type';

interface IMovieListProps {
  movies: IMovie[];
  onToggleWatched: (index: number) => void;
  onLike: (index: number, value: 'like' | 'dislike') => void;
  onDelete: (index: number) => void;
}

export const MovieList: React.FC<IMovieListProps> = ({
  movies,
  onToggleWatched,
  onLike,
  onDelete,
}) => {
  return (
    <ul className="movie-list">
      {movies.map((movie, index) => (
        <MovieItem
          key={`${movie.name}-${index}`}
          movie={movie}
          onToggleWatched={() => onToggleWatched(index)}
          onLike={(value) => onLike(index, value)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
};
// Замените содержимое файла: src/App.tsx
import React, { useState } from 'react';
import { MovieForm } from './Components/MovieForm/MovieForm';
import { MovieList } from './Components/MovieList/MovieList';
import { IMovie } from './types/movie.type';
import './App.css';

const App: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const handleAddMovie = (movieName: string): void => {
    setMovies([...movies, { name: movieName, watched: false, like: null }]);
  };

  const handleToggleWatched = (index: number): void => {
    setMovies(movies.map((movie, i) => {
      if (i === index) {
        return { ...movie, watched: !movie.watched, like: null };
      }
      return movie;
    }));
  };

  const handleLike = (index: number, value: 'like' | 'dislike'): void => {
    setMovies(movies.map((movie, i) => {
      if (i === index) {
        return { ...movie, like: value };
      }
      return movie;
    }));
  };

  const handleDelete = (index: number): void => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Movie Watchlist</h1>
      <MovieForm onAddMovie={handleAddMovie} />
      <MovieList
        movies={movies}
        onToggleWatched={handleToggleWatched}
        onLike={handleLike}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
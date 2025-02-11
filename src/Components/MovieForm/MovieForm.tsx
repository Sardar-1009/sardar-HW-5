
import React, { FormEvent } from 'react';

interface IMovieFormProps {
  onAddMovie: (movieName: string) => void;
}

export const MovieForm: React.FC<IMovieFormProps> = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = React.useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMovie.trim()) {
      onAddMovie(newMovie.trim());
      setNewMovie('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <input
        type="text"
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
        placeholder="Enter movie title"
        className="movie-input"
      />
      <button type="submit" className="add-button">Add</button>
    </form>
  );
};
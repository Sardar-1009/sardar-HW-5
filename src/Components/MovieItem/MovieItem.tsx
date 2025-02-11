
import React from 'react';
import { IMovie } from '../../types/movie.type';

interface IMovieItemProps {
  movie: IMovie;
  onToggleWatched: () => void;
  onLike: (value: 'like' | 'dislike') => void;
  onDelete: () => void;
}

export const MovieItem: React.FC<IMovieItemProps> = ({
  movie,
  onToggleWatched,
  onLike,
  onDelete,
}) => {
  return (
    <li className="movie-item">
      <div className="movie-content">
        <input
          type="checkbox"
          checked={movie.watched}
          onChange={onToggleWatched}
          className="watch-checkbox"
        />
        <span className="movie-name">{movie.name}</span>
      </div>
      
      {movie.watched && (
        <div className="movie-actions">
          <button
            className={`like-button ${movie.like === 'like' ? 'active' : ''}`}
            onClick={() => onLike('like')}
          >
            👍
          </button>
          <button
            className={`dislike-button ${movie.like === 'dislike' ? 'active' : ''}`}
            onClick={() => onLike('dislike')}
          >
            👎
          </button>
        </div>
      )}
      
      <button onClick={onDelete} className="delete-button">
        ✖
      </button>
    </li>
  );
};
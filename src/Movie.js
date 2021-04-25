import React from 'react'
import PropTypes from 'prop-types'

export default function Movie({id,year,title,summary,poster,genres}) {
  return (
    <div className='movies__movie'>
      <img src={poster} alt={title} title={title}/>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary"></p>
        <ul className="movie__genres">{genres.map((genre, index)=>(
        <li key={index}>{genre}</li>
        ))}</ul>
      </div>
    </div>
  )
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
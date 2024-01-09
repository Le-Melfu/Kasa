import React from 'react';
import './card.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="card">
            <Link to={`/logements/${props.id}`}>
                <img src={props.cover} alt={props.title}></img>
                <p className="card__title">{props.title}</p>
            </Link>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
    id: PropTypes.string.isRequired,
};

export default Card;

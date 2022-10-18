import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './agenda-date.scss';

export const AgendaDate = ({ date, title, description, bottomLine, isOrange = false }) => (
  <div className={clsx('agenda_date_container', { ['bg_orange']: isOrange })}>
    <div className="date">{date}</div>
    <div className="agenda_date_content">
      <h3 className="title_agenda_date">{title}</h3>
      <p className="description">{description}</p>
      <p className={clsx('highlightedText', 'bottom_line')}>{bottomLine}</p>
    </div>
  </div>
);

AgendaDate.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  bottomLine: PropTypes.string,
  isOrange: PropTypes.bool
};

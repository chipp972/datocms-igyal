import React from 'react';
import PropTypes from 'prop-types';
import './agenda-date.scss';

export const AgendaDate = ({ date, title, description, backgroundColor }) => (
  <div style={{ backgroundColor: backgroundColor.hex }} className="agenda_date_container">
    <div className="date">{date}</div>
    <div className="agenda_date_content">
      <h3 className="title_agenda_date">{title}</h3>
      <div className="richText" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </div>
);

AgendaDate.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  backgroundColor: PropTypes.shape({
    hex: PropTypes.string
  })
};

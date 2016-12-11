import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ticketItem.css';

const dateConfig = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
};

class TicketItem extends Component {
  static propTypes = {
    ticket: PropTypes.shape({
      id: PropTypes.string,
      company: PropTypes.string,
      points: PropTypes.number,
      duration: PropTypes.number,
      segment: PropTypes.array
    })
  }
  render() {
    let { ticket } = this.props;
    let departureTime = new Date(ticket.segment[0].departureTime)
                        .toLocaleDateString('en-US', dateConfig);
    let arrivalTime = new Date(ticket.segment[0].arrivalTime)
                        .toLocaleDateString('en-US', dateConfig);
    let stops;
    if (ticket.segment.length - 1 === 1) {
      stops = '1 stop';
    } else if (ticket.segment.length - 1 > 1) {
      stops = `${ticket.segment.length - 1} stops`;
    }

    return (
      <div styleName="ticket">
        <span styleName="ticket-company">{ticket.company}</span>
        <span styleName="ticket-location">
          <strong>{ticket.segment[0].origin}</strong>
          {' '}
          <small>{departureTime}</small>
        </span>
        <span styleName="ticket-separator">&#8680;</span>
        <span styleName="ticket-location">
          <strong>{ticket.segment[ticket.segment.length - 1].destination}</strong>
          {' '}
          <small>{arrivalTime}</small>
        </span>
        <span styleName="ticket-connection">{stops}</span>
        <span styleName="ticket-points">{ticket.points} points</span>
      </div>
    );
  }
}

export default CSSModules(TicketItem, styles);

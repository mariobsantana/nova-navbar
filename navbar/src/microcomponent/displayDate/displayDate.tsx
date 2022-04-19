import * as React from 'react';
import moment from 'moment';
import './displayDate.css'

export default function DisplayDate({ startDate = moment(), endDate = moment() }) {

    const weekHeaderDate =
      `${startDate.format('MMM')}` === `${endDate.format('MMM')}`
        ? `${startDate.format('MMM YYYY')}`
        : `${startDate.format('MMM')} - ${endDate.format('MMM YYYY')}`;

    return (
      <div data-testid="displayDate" className="display-date">{weekHeaderDate}</div>
    )
}

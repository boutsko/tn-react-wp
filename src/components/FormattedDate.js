import React from 'react';
import moment from 'moment';

const FormattedDate = (props) => (
  React.DOM.span(null, moment(props.children).format('DD/MM/YYYY'))
);

export default FormattedDate;

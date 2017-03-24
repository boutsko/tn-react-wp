import React from 'react';
import moment from 'moment';

const FormattedDate = (props) => (
  React.DOM.div(null, moment(props.children).format('DD/MM/YYYY'))
);

export default FormattedDate;

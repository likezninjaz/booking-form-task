import React from 'react';
import _ from 'lodash';

import {
  iconStar
} from '../Icons'

interface IRating {
  count: number
}

export const Rating = ({
  count
}: IRating) =>
  <span>
    {_.times(count, (index) => 
      <span key={index}>{iconStar}</span>
    )}
  </span>
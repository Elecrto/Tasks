//@flow
import React from 'react';

const Edit = (props) => {
  const {width = 17, height = 19, color = '#31343A'} = props;
  return (
    <svg width={`${width}`} height={`${height}`} viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.85116 3.9368L13.5711 6.84261L6.21409 16.2576L2.49605 13.3516L9.85116 3.9368Z" stroke={color} strokeLinejoin="round"/>
      <path d="M13.692 6.70372L15.1405 4.79793C15.529 4.28664 15.4386 3.55017 14.9379 3.1481V3.1481L13.2674 1.80672C12.6219 1.28833 11.691 1.40263 11.188 2.06204L9.94627 3.69589"
            stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.31326 13.4982L1.92248 17.3939V17.3939C1.89438 17.675 2.17516 17.8894 2.44469 17.7888L6.11153 16.4225"
            stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

export { Edit };
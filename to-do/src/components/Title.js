import React from 'react';

export const Title = ({todoCount}) => {
  return (
    <div>
       <div>
          <h1>THINGS TO DO ({todoCount})</h1>
       </div>
    </div>
  );
}
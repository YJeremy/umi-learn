import React from 'react';
import styles from './ename.less';

export default ({match}) => {
    console.log(match);
    const {ename} = match.params;
    let a = ename
    if(ename === `123`){
        a = 'I..m 123'
    }

  return (
    <div>
      <h1>Page herodetail/ename </h1>
      {`${a}`}
    </div>
  );
}

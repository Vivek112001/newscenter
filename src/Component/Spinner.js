import React from 'react';
import Fadinglines from './Fadinglines.gif';
export default function Spinner() {
  return (
    <>
      <div className="text-center">
        <img src={Fadinglines} alt="Fadinglines" />
      </div>
    </>
  );
}
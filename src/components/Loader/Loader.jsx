import React, { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';

export const Loader = ({ timeout = 3000 }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout]);

  return (
    <>
      {loading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
          }}
        >
          <BallTriangle
            height={80}
            width={80}
            radius={5}
            color="#fff"
            ariaLabel="ball-triangle-loading"
          />
        </div>
      )}
    </>
  );
};

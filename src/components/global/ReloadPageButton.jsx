import React from 'react';
import Button from 'react-bootstrap/Button';

const ReloadPageButton = () => {
  const reloadPage = () => window.location.reload();

  return (
    <Button variant="secondary" size="lg" onClick={() => reloadPage()}>
      Reload Page
    </Button>
  );
};

export default ReloadPageButton;

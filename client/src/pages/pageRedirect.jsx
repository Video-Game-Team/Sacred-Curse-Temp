import React, { useEffect, useState } from 'react';

const pageRedirect = () => {
  const [loginRedirect, setLoginRedirect] = useState(false);
  return { loginRedirect, setLoginRedirect };
};

export default pageRedirect;

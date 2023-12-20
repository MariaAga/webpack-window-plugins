import React, { useState, useEffect } from 'react';


export const WindowLoad = () => {
  window.components = window.components || {};
  window.components = {
    ...window.components,
    comp1: { component: <div>core component 1</div> },
  };
  const [components, setComponents] = useState(Object.values(window.components) || []);
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setComponents(Object.values(window.components));
    });
    observer.observe(window.document, { attributes: true, childList: true, subtree: true });
    return () => observer.disconnect(); // Clean up on unmount
  }, []);

  if (!components?.length) {
    return <div>no components</div>;
  }
  return components.map(({ component }) => component);
};

import React from 'react'
import Button from './Button';
// import add to components from core

export const createWindowConponents = () => {
  window.components =  window.components || {};
  window.components = {... window.components , pluginButton2: {component: <Button />}};
}
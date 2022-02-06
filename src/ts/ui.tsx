
import React      from 'react';
import { render } from 'react-dom';





const UI = ({ name }: { name?: string }) =>

  <div>Hello, { name ?? 'world' }!</div>;





const re_render = ({ name }: { name?: string }) =>

  render(
    <UI name={ name } />,
    document.getElementById('root')
  )





export { UI, re_render };

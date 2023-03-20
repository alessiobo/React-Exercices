//Rewrite the Welcome component to be a function component.

import React from "react";

export function Welcome( {name = 'World'} ) {
  return (
    <div>
      <h1>Hello, {name} ! </h1>
    </div>
  )
}
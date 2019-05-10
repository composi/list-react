import React from 'react'

export function Title({ greeting }) {
  return (
    <nav>
      <h1 className="header--main">React &amp; {greeting}</h1>
    </nav>
  )
}

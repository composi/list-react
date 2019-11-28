import React from 'react'

/**
 * @param {{greeting: string}} props
 */
export function Title({greeting}) {
  return (
    <header>
      <nav>
        <h1 className="header--main">React &amp; {greeting}</h1>
      </nav>
    </header>
  )
}

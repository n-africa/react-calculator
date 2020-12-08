import React, { useState } from 'react'

export function Calculator() {
  const [display, setDisplay] = useState(0)

  function clickAcButton(event) {
    console.log('clear clicked')

    setDisplay(0)
  }

  function clickNumber(number) {
    console.log(`clicked on ${number}`)
    setDisplay(number)
  }
  return (
    <main>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="button fn" onClick={clickAcButton}>
            AC
          </button>
          <button className="button fn">&plusmn;</button>
          <button className="button fn">%</button>
          <button className="button op">&divide;</button>
          <button className="button" onClick={() => clickNumber(7)}>
            7
          </button>
          <button className="button" onClick={() => clickNumber(8)}>
            8
          </button>
          <button className="button" onClick={() => clickNumber(9)}>
            9
          </button>
          <button className="button op">&times;</button>
          <button className="button" onClick={() => clickNumber(4)}>
            4
          </button>
          <button className="button" onClick={() => clickNumber(5)}>
            5
          </button>
          <button className="button" onClick={() => clickNumber(6)}>
            6
          </button>
          <button className="button op">&minus;</button>
          <button className="button" onClick={() => clickNumber(1)}>
            1
          </button>
          <button className="button" onClick={() => clickNumber(2)}>
            2
          </button>
          <button className="button" onClick={() => clickNumber(3)}>
            3
          </button>
          <button className="button op">+</button>
          <button className="button x2" onClick={() => clickNumber(0)}>
            0
          </button>
          <button className="button">.</button>
          <button className="button op">=</button>
        </div>
      </div>
    </main>
  )
}

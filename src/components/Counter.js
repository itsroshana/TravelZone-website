import { useEffect, useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = 500
    if (start === end) return

    let totalMilSecDur = 2000
    let incrementTime = totalMilSecDur / end

    let timer = setInterval(() => {
      start += 5
      setCount(start)
      if (start >= end) clearInterval(timer)
    }, incrementTime)
  }, [])

  return (
    <div className="counter">
      <h2>{count}+ Happy Clients</h2>
    </div>
  )
}

export default Counter
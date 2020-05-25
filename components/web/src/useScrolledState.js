import { useEffect, useState } from 'react'
import throttle from 'lodash.throttle'

function useScrolledState(
  pixelThreshold = 6,
  debounceMillis = 200
) {
  const [ scrolled, updateScrolled ] = useState(
    window.pageYOffset > pixelThreshold
  )

  useEffect(() => {
    const handleScroll = throttle(
      (e) => {
        updateScrolled(
          window.pageYOffset > pixelThreshold
        )
      },
      debounceMillis,
      {
        leading: true,
        trailing: true,
      }
    )
    window.addEventListener('scroll', handleScroll, true)
    return function cleanupScrollListener() {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return scrolled;
}

export default useScrolledState
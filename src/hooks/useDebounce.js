
import { useState, useEffect } from "react"

function useDebounce(value, delay = 500) {

const [debouncedValue, setDebouncedValue] - useState(value)

useEffect(() => {



}


return () => {

  }, [value, delay]);


  return debouncedValue

}

export default useDebounce
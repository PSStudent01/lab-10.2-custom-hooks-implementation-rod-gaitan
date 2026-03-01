
import { useState, useEffect } from "react"

function useDebounce(value, delay = 500) {

const [debouncedValue, setDebouncedValue] - useState(value)

useEffect(() => {

    setTimeout( () => {

        setDebouncedValue(value);
    }


    )

}


return () => {



  }, [value, delay]);







  return debouncedValue

}

export default useDebounce
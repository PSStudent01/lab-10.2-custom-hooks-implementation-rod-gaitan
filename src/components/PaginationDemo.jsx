import React, { useSate } from React; 

function usePagination(totalItems, itemsPerPage, initialPage)

   const [currentPage, setcurrentPage] = useState(0);
  
   // total pages
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    //console.log(totalPages)

    const currentPage < totalPages && currentPage > 1
    
    const startIndex =

    const endIndex =

    const itemsOnCurrentPage =




export default usePagination;
import React, { useSate } from React; 

// takes input for 3 needed parameters
function usePagination(totalItems, itemsPerPage, initialPage) {

    //tracks/remembers the page you're on
   const [currentPage, setcurrentPage] = useState(0);
  
   //calculates total pages
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    //console.log(totalPages)

    //calculates what page item you'd start at in the current page
    const startIndex = (currentPage - 1) * itemsPerPage; //assuming: 25 items total;  10 items per page; 2.5 total pages; 
                                                        // if current page is 2, then you would start at page item 10:  (2 - 1) * 10 = 10 as your 'startIndex'
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems); // so now 'startIndex' = 10; itemsPerPage = 10:  (10 + 10) = 20 as your 'endIndex'/end item
=
    //calculates how many Items Are on Current Page
    const itemsOnCurrentPage = endIndex - startIndex 

}


export default usePagination;
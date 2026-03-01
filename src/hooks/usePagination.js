import { useState } from 'react';

// takes input for 3 needed parameters
function usePagination(totalItems, itemsPerPage = 10, initialPage = 1) {

    //tracks/remembers the page you're on
    //const [currentPage, setCurrentPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(initialPage);

    //calculates total pages
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    //console.log(totalPages)

    // to jump to a specific page number.
    const setPage = (pageNumber) => {
        setCurrentPage(pageNumber);  
    };

    // calculates what page is next
    const nextPage = () => {        // when called upon takes user to teh very next page
        setPage(currentPage + 1);
    };

    // calculates what page is previous
    const prevPage = () => {        // when called upon takes user to the very previous page
        setPage(currentPage - 1);
    };

    //calculates what page item you'd start at in the current page
    const startIndex = (currentPage - 1) * itemsPerPage; //assuming: 25 items total;  10 items per page; 2.5 total pages; 
    // if current page is 2, then you would start at page item 10:  (2 - 1) * 10 = 10 as your 'startIndex'
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems); // so now 'startIndex' = 10; itemsPerPage = 10:  (10 + 10) = 20 as your 'endIndex'/end item

    //calculates how many page items are on current page
    const itemsOnCurrentPage = endIndex - startIndex

    //prevents user from going past the 1st or last page
    const canNextPage = currentPage < totalPages;
    const canPrevPage = currentPage > 1;

    return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
}

}


export default usePagination;
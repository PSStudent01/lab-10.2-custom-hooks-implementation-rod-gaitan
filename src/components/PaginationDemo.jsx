import usePagination from '../hooks/usePagination';

function PaginationDemo() {

    const autoMakeModel = [
        "Toyota Camry",
        "Honda Accord",
        "Ford F-150",
        "Chevrolet Silverado",
        "Tesla Model 3",
        "BMW 3 Series",
        "Mercedes-Benz C-Class",
        "Audi A4",
        "Volkswagen Jetta",
        "Nissan Altima",
        "Mazda CX-5",
        "Subaru Outback",
        "Hyundai Elantra",
        "Kia Forte",
        "Jeep Wrangler",
        "Ram 1500",
        "GMC Sierra",
        "Toyota RAV4",
        "Honda CR-V",
        "Ford Mustang",
        "Chevrolet Corvette",
        "Dodge Challenger",
        "Porsche 911",
        "Lexus RX",
        "Acura TLX",
        "Infiniti Q50",
        "Cadillac Escalade",
        "Lincoln Navigator",
        "Buick Enclave",
        "Chrysler 300",
        "Toyota Tacoma",
        "Honda Civic",
        "Mazda3",
        "Subaru Forester",
        "Volkswagen Golf",
        "Audi Q5",
        "BMW X5",
        "Mercedes-Benz E-Class",
        "Tesla Model Y",
        "Tesla Model S",
        "Ford Explorer",
        "Chevrolet Tahoe",
        "Nissan Rogue",
        "Toyota Highlander",
        "Honda Pilot",
        "Mazda CX-9",
        "Hyundai Tucson",
        "Kia Sorento",
        "Jeep Grand Cherokee",
        "Ford Escape",
        "Chevrolet Equinox",
        "GMC Yukon",
        "Dodge Durango",
        "Toyota Corolla",
        "Honda Fit",
        "Mazda MX-5 Miata",
        "Subaru WRX",
        "Volkswagen Tiguan",
        "Audi A6",
        "BMW 5 Series",
        "Mercedes-Benz S-Class",
        "Lexus ES",
        "Acura MDX",
        "Infiniti QX60",
        "Cadillac CT5",
        "Lincoln Aviator",
        "Buick Envision",
        "Chrysler Pacifica",
        "Toyota Tundra",
        "Honda Ridgeline",
        "Nissan Frontier",
        "Chevrolet Colorado",
        "Ford Ranger",
        "GMC Canyon",
        "Mazda CX-30",
        "Hyundai Kona",
        "Kia Sportage",
        "Jeep Cherokee",
        "Subaru Crosstrek",
        "Volkswagen Atlas",
        "Audi Q7",
        "BMW X3",
        "Mercedes-Benz GLE",
        "Tesla Model X",
        "Lexus NX",
        "Acura RDX",
        "Infiniti QX50",
        "Cadillac XT5",
        "Lincoln Corsair",
        "Buick Encore",
        "Toyota Prius",
        "Honda Insight",
        "Hyundai Ioniq",
        "Kia Niro",
        "Nissan Leaf",
        "Chevrolet Bolt",
        "Ford Bronco",
        "Jeep Gladiator",
        "Porsche Cayenne",
        "Range Rover Sport"
    ]

    const {
        currentPage,
        totalPages,
        startIndex,
        endIndex,
        nextPage,
        prevPage,
        canNextPage,
        canPrevPage,
    } = usePagination(autoMakeModel.length, 10, 1);

    const currentItems = autoMakeModel.slice(startIndex, endIndex);

    return (
        <div>
            <h3>Automobile Pagination</h3>

            <ul>
                {currentItems.map((auto) => (
                    <li key={auto}>{auto}</li>
                ))}
            </ul>

            <div>
                <button onClick={prevPage} disabled={!canPrevPage}>Previous</button>
                <button onClick={nextPage} disabled={!canNextPage}>Next</button>
            </div>

            <p>Page {currentPage} of {totalPages}</p>
        </div>
    )

}

export default PaginationDemo;
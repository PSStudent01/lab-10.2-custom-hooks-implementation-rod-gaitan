import { useState } from 'react';

import useDebounce from '../hooks/useDebounce';

function DebounceSearchDemo() {

    const [searchTerm, setSearchTerm] = useState('')

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <h3>Debounce Search Demo</h3>
            <div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Type to search..."
                />
            </div>

            <div style={{ marginTop: '20px' }}>
                <p>Search Term: {searchTerm}</p>
                <p>Debounced value (500ms delay): {debouncedSearchTerm}</p>
            </div>

            {debouncedSearchTerm && (
                <div>
                    🔍      Searching for: "{debouncedSearchTerm}"
                </div>
            )}
        </div>
    )
}

export default DebounceSearchDemo;
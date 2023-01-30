import { useCallback } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';


const SearchBar = ({ handleChange, search, handleFetch }) => {
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        handleFetch(search);
    }, [handleFetch]);
    return (
        <form
            onSubmit={handleSubmit}
            className="h-14 w-full sm:w-1/2 relative">
            <button>
                <AiOutlineSearch className="absolute text-4xl top-2.5 right-4" />
            </button>
            <input
                onChange={handleChange}
                value={search}
                className="rounded px-5 text-4xl h-14 w-full bg-teal-50 shadow-xl focus:outline-teal-900 text-teal-900"
                type="text"
                placeholder="Search Bar.."
            />
        </form>
    );
};

export default SearchBar;
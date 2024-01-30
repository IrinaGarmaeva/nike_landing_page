import { useState } from "react";
import { GoSearch } from "react-icons/go";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery("");
  };

  return (
    <div className="border border-coral-red dark:border-slate-gray border-1 rounded-full max-md:border-none">
      <form
        className="flex flex-row items-center box-border p-1.5 max-md:p-0"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <button className="ml-2 flex items-center transition-all duration-700 ease-linear dark:text-coral-red hover:text-coral-red" type="submit">
          <GoSearch size={17} />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="mx-2 outline-0 text-motserrat text-slate-gray leading-normal text-lg max-md:hidden bg-transparent dark:text-white-400"
          name="search"
          value={searchQuery}
          onChange={handleChange}
          required
        />
      </form>
    </div>
  );
};

export default SearchForm;

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
    <div className="border border-coral-red border-1 rounded-full">
      <form
        className="flex flex-row items-center box-border p-1.5"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <button className="ml-2 flex items-center" type="submit">
          <GoSearch size={17} />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="mx-2 outline-0 text-motserrat text-slate-gray leading-normal text-lg"
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
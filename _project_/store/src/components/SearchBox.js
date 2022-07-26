import React from "react";

function SearchBox() {
  return (
    <div className="search-box">
      <form>
        <label>
          Find an item:
          <input
            value={0}
            type="text"
            placeholder="What are you searching for?"
            onChange={0}
          />
        </label>
        <button
          type="submit"
          // disabled=()
          onClick={0}
        >
          Go!
        </button>
      </form>
    </div>
  );
}

export default SearchBox
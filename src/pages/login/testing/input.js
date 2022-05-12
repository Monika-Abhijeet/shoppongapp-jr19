import { useState } from "react";
function Input({ showDiv }) {
  const [searchword, setSearchword] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Search ..."
        data-testid="searchbar"
        onChange={(e) => setSearchword(e.target.value)}
      />
      <h1 data-testid="displaySearch">{searchword}</h1>
      {showDiv && (
        <div data-testid="sensitiveData">This is a sensitive text</div>
      )}
    </div>
  );
}
export default Input;

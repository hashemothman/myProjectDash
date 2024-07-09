import { CiSearch } from "react-icons/ci";
import './Search.css'

const Search = () => {
  return (
    <div className="ho-search">
        <input type="text" name="search" id=""  placeholder="ابحث"/>
        <button className="ho-search-icon">
            <CiSearch  />
        </button>
        

    </div>
  )
}

export default Search
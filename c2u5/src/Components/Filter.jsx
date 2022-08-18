import React,{useEffect,useState} from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGenreParams = searchParams.getAll("category");
  const [category, setCategory] = useState(initialGenreParams || []);
 
  const handleChange = (e) => {
    const option = e.target.value;
    
    let newCategory = [...category];
    if (category.includes(option)) {
    
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      
      newCategory.push(option);
    }
    setCategory(newCategory);
  };
  useEffect(() => {
  
    if (category ) {
      setSearchParams({ category: category });
    }
  }, [category, setSearchParams]);
// console.log(category)
// console.log(searchParams.getAll("category"))
  return (
    <div>
      <h3>Filters</h3>

      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Analog"  defaultChecked={category.includes("Analog")} onChange={handleChange} />
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital" defaultChecked={category.includes("Digital")} onChange={handleChange}   />
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph" defaultChecked={category.includes("Chronograph")} onChange={handleChange} />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;

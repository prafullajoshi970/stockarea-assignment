import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterData } from "./redux/Action";
import { data } from "./Data";

const Home = () => {
  const [id, setId] = useState("");
  const [city, setCity] = useState(""); 
  const [cluster, setCluster] = useState(""); 
  const [spaceAvailable, setSpaceAvailable] = useState(""); 


  const filterData = useSelector((state) => state.filterData);
  console.log(id);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Selected City:", city);
    console.log("Selected Cluster:", cluster);
    console.log("Selected Space Available:", spaceAvailable);

   
    const updateCity = data.filter((currentElem) => {
      return (
        currentElem.city === city ||
        currentElem.cluster === cluster ||
        currentElem.space_available.toString() === spaceAvailable
      );
    });

   
    dispatch(updateFilterData(updateCity));
  };

  useEffect(() => {
    
    if (!city && !cluster && !spaceAvailable) {
      dispatch(updateFilterData(data)); 
    }
  }, [city, cluster, spaceAvailable, dispatch]);

  return (
    <div className="home">
      <nav className="NavBar">
        <div className="Heading">
          <h1>Warehouse</h1>
        </div>
        <div className="">
          <form onSubmit={handleSubmit}>
            <select
              name="city"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Chennai">Chennai</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Indore">Indore</option>
              <option value="Guwahati">Guwahati</option>
            </select>
            <select
              name="cluster"
              id="Cluster"
              value={cluster}
              onChange={(e) => setCluster(e.target.value)}
            >
              <option value="">Select Cluster</option>
              <option value="cluster-a-1">cluster-a-1</option>
              <option value="cluster-a-2">cluster-a-2</option>
              <option value="cluster-a-21">cluster-a-21</option>
              <option value="cluster-a-32">cluster-a-32</option>
              <option value="cluster-v-2">cluster-v-2</option>
            </select>
            <select
              name="space_available"
              id="space"
              value={spaceAvailable}
              onChange={(e) => setSpaceAvailable(e.target.value)}
            >
              <option value="">Select Space Available</option>
              <option value="1">1</option>
              <option value="4">4</option>
              <option value="12">12</option>
              
            </select>
            <a href=" ">View All</a>
          </form>
        </div>
      </nav>
      <div>
        {filterData.length > 0 && (
          <cardss>
            {filterData.map((ele, idx) => {
              return (
                <div className="card" key={idx}>
                  <div className="cardHead">
                    <h3>{ele.name}</h3>
                    <h5 className="head3">{ele.city}</h5>
                  </div>
                  <h5 className="head5">{ele.space_available}</h5>
                  <h5 className="head5">{ele.type}</h5>
                  <Link
                    className="btn1"
                    to={`/Detail/${ele.id}`}
                    onClick={() => {
                      setId(idx + 1);
                    }}
                  >
                    Details
                  </Link>
                </div>
              );
            })}
          </cardss>
        )}
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from './Data';
import './Details.css';

const Detail = () => {
  const [cardData, setCardData] = useState(data);
  const [filteredCard, setFilteredCard] = useState(null);
  const { id } = useParams();
  console.log(setCardData)

  useEffect(() => {
    const updatedData = cardData.find((item) => item.id === parseInt(id));
    setFilteredCard(updatedData);
  }, [id, cardData]);

  const [formData, setFormData] = useState({
    name: '',
    city: '',
    space_available: '',
    is_live: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredCard(formData);
  };

  return (
    <div className='detail'>
       <h1>Detail Page</h1>
      <div className="maindetails">
        {filteredCard ? (
          <div id="card">
            <div className="head">
              <h2> {filteredCard.name} </h2>
              <h4 className="head3">{filteredCard.city}</h4>
            </div>

            <p className='head'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt eum
              pariatur nihil cumque laudantium in maxime est, illo eveniet corporis
              nesciunt modi reprehenderit laboriosam nisi sapiente repellendus?
            </p>
            <div className='head'>
              <h4>{filteredCard.space_available}</h4>
              <h4>{filteredCard.type}</h4>
              <h4>{filteredCard.is_live}</h4>
            </div>
            <div className='styledetail'>🔴🟠🟡🟢🔵</div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}

        <div>
          <h1 color='white'>Edit card</h1>
          <form className="formdetails" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            ></input>
            <label>City</label>
            <input
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              required
            ></input>
            <label>Space Available</label>
            <input
              name="space_available"
              value={formData.space_available}
              type="text"
              onChange={handleChange}
              required
            ></input>
            <label>Live Status</label>
            <input
              name="is_live"
              type="text"
              value={formData.is_live}
              onChange={handleChange}
              required
            ></input>
            <button className="btn1" type="submit">
              Change
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Detail;

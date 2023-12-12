
const Check = () => {

  return (
    <div className="container-md text-light check">
      <div className="d-flex flex-wrap">
        <div className="col-12 col-md-6 col-lg-3">
          <h6 className="text-dark fw-semibold">CHECK IN</h6>
          <div className="d-flex justify-content-between ">
            <input 
                type="date" 
                id="checkIn" 
                className="pick-date-input"  
              />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <h6 className="text-dark fw-semibold">CHECK OUT</h6>
          <div className="d-flex justify-content-between ">
            <input
              type="date"
              id="checkOut"
              className="pick-date-input"
              placeholder="01/01/2001"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <h6 className="text-dark fw-semibold">ROOM</h6>
          <select name="" id="">
            <option value="a">Standard Room Size</option>
            <option value="b">Standard Room Size</option>
            <option value="c">Standard Room Size</option>
            <option value="d">Standard Room Size</option>
          </select>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <button className="hvr-btn w-max">CHECK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Check;
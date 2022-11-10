import React, { useState } from "react";

const AddServices = () => {
  const [service, setService] = useState({});
  // Add service event handler
  const handelAddService = (event) => {
    event.preventDefault();
      console.log(service);
      

    fetch("http://localhost:5000/services/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service)
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handelInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newService = { ...service };
    newService[field] = value;
      setService(newService);
      event.target.reset()
  };
  return (
    <div className='min-h-screen'>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Feel Free To Add A Service</h1>
            <p className='py-6'>
              I always Appreciate to suggest me start providing new services
            </p>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Service Name</span>
                </label>
                <input
                  onBlur={handelInputBlur}
                  type='text'
                  name='title'
                  placeholder='Service Name'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Service ID</span>
                </label>
                <input
                  onBlur={handelInputBlur}
                  type='text'
                  name='service_Id'
                  placeholder='service id eg- 01'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Image for Service</span>
                </label>
                <input
                  onBlur={handelInputBlur}
                  type='text'
                  name='image'
                  placeholder='image link'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Details Here</span>
                </label>
                <textarea
                  onBlur={handelInputBlur}
                  type='text'
                  name='description'
                  placeholder='service-detail'
                  className='input input-bordered h-24'
                  required
                />
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Offerable Price</span>
                </label>
                <input
                  onBlur={handelInputBlur}
                  type='text'
                  name='price'
                  placeholder='Price Suggested'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control mt-6'>
                <button
                  onClick={handelAddService}
                  type='Submit'
                  className='btn btn-primary'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;

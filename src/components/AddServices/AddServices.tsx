import React, { useState, ChangeEvent, FormEvent } from "react";

interface Service {
  title?: string;
  service_Id?: string;
  image?: string;
  description?: string;
  price?: string;
}

const AddServices: React.FC = () => {
  const [service, setService] = useState<Service>({});

  // Add service event handler
  const handleAddService = (event: FormEvent) => {
    event.preventDefault();
    console.log(service);

    fetch("https://web-logic-by-sarwar-server-side.vercel.app/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleInputBlur = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setService((prevService) => ({ ...prevService, [name]: value }));
  };

  return (
    <div className='min-h-screen'>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Feel Free To Add A Service</h1>
            <p className='py-6'>
              I always appreciate suggestions for new services.
            </p>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form className='card-body' onSubmit={handleAddService}>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Service Name</span>
                </label>
                <input
                  onBlur={handleInputBlur}
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
                  onBlur={handleInputBlur}
                  type='text'
                  name='service_Id'
                  placeholder='Service ID (e.g., 01)'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Image for Service</span>
                </label>
                <input
                  onBlur={handleInputBlur}
                  type='text'
                  name='image'
                  placeholder='Image URL'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Details Here</span>
                </label>
                <textarea
                  onBlur={handleInputBlur}
                  name='description'
                  placeholder='Service Details'
                  className='input input-bordered h-24'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Offerable Price</span>
                </label>
                <input
                  onBlur={handleInputBlur}
                  type='text'
                  name='price'
                  placeholder='Suggested Price'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control mt-6'>
                <button type='submit' className='btn btn-primary'>
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

import React from 'react';

const Blogs: React.FC = () => {
  return (
    <div>
      {/* Blog--1 */}
      <h2 className='text-3xl font-semibold'>
        Difference between SQL and NoSQL
      </h2>
      <section className='bg-gray-800 text-gray-100 m-20'>
        <div className='container flex flex-col-reverse mx-auto lg:flex-row'>
          <div className='flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-violet-400 text-gray-900'>
            <div className='flex space-x-2 sm:space-x-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='flex-shrink-0 w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                ></path>
              </svg>
              <div className='space-y-2'>
                <p className='text-lg font-medium leading-snug'>
                  Difference between SQL and NoSQL
                </p>
                <p className='leading-snug'>
                  SQL has been around for over 40 years, so it is recognizable,
                  documented, and widely-used. Safe and versatile, it’s
                  particularly well suited for complex queries. However, SQL
                  restricts the user to working within a predefined tabular
                  schema, and more care must be taken to organize and understand
                  the data before it is used.
                </p>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 xl:w-3/5 bg-gray-800'>
            <div className='flex items-center justify-center p-4 md:p-8 lg:p-12'>
              <img
                src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191104165821/SQL-Vs-NoSQL1.png'
                alt=''
                className='rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog--2 */}
      <h2 className='text-3xl font-semibold'>
        {" "}
        What is JWT, and how does it work?
      </h2>
      <section className='bg-gray-800 text-gray-100 m-20'>
        <div className='container flex flex-col-reverse mx-auto lg:flex-row'>
          <div className='flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-violet-400 text-gray-900'>
            <div className='flex space-x-2 sm:space-x-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='flex-shrink-0 w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.3 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                ></path>
              </svg>
              <div className='space-y-2'>
                <p className='text-lg font-medium leading-snug'>
                  What is JWT, and how does it work?
                </p>
                <p className='leading-snug'>
                  JSON Web Token (JWT) is an open standard (RFC 7519) that
                  defines a compact and self-contained way for securely
                  transmitting information between parties as a JSON object.
                  This information can be verified and trusted because it is
                  digitally signed.
                </p>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 xl:w-3/5 bg-gray-800'>
            <div className='flex items-center justify-center p-4 md:p-8 lg:p-12'>
              <img
                src='https://melontech.com/Media/Default/Blog%20Images/authentification.png'
                alt=''
                className='rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog--3 */}
      <h2 className='text-3xl font-semibold'>
        {" "}
        What is the difference between javascript and NodeJS?
      </h2>
      <section className='bg-gray-800 text-gray-100 m-20'>
        <div className='container flex flex-col-reverse mx-auto lg:flex-row'>
          <div className='flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-violet-400 text-gray-900'>
            <div className='flex space-x-2 sm:space-x-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='flex-shrink-0 w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                ></path>
              </svg>
              <div className='space-y-2'>
                <p className='text-lg font-medium leading-snug'>
                  What is the difference between javascript and NodeJS?
                </p>
                <p className='leading-snug'>
                  JavaScript is a high-level programming language mainly used for
                  web development, while Node.js is a JavaScript runtime built on
                  Chrome's V8 JavaScript engine that allows for server-side
                  scripting and running JavaScript code outside of the browser.
                </p>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 xl:w-3/5 bg-gray-800'>
            <div className='flex items-center justify-center p-4 md:p-8 lg:p-12'>
              <img
                src='https://www.turing.com/blog/wp-content/uploads/2023/02/Nodejs-vs-Javascript.jpg'
                alt=''
                className='rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;

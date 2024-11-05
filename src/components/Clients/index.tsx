const Clients = () => {
  return (
    <div>
      <div className='text my-8'>
        <h2 className='text-3xl font-black'>Happy Clients</h2>
      </div>
      <div className='clients grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-10 gap-4'>
        <div className='client w-30'>
          <img
            className='w-36'
            src='https://www.clipartmax.com/png/middle/288-2889200_microsoft-logo-microsoft-logo-icon-logo-database-microsoft-logo-transparent.png'
            alt=''
          />
        </div>
        <div className='client w-30'>
          <img
            className='w-36'
            src='https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1'
            alt=''
          />
        </div>
        <div className='client w-30'>
          <img
            className='w-36'
            src='https://www.citypng.com/public/uploads/preview/-11596400062gnenanbkbq.png'
            alt=''
          />
        </div>

        <div className='client w-30'>
          <img
            className='w-36'
            src='https://i.pinimg.com/736x/3e/f4/ac/3ef4ac8fd8e4459ab2c03ac01cda518a.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;

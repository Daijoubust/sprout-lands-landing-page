// import React from 'react'
// import stillDev from '../assets/stilldev.gif'

// const StillDevelop = () => {

//     return (
//         <div className='h-auto w-screen pb-20 p-6'>
//             <div name='container' className='max-w-screen-lg mx-auto inline-block
//             items-center justify-center h-full px-4 md:flex-row w-screen'>
//                 <div className='border-specialBorder border-[10px] rounded-2xl duration-200 scale-100 w-96 md:w-full bg-specialBg text-black font-signature mr-32'>
//                     <div className=' m-8'>
//                         <h1 className='text-2xl sm:text-3xl font-bold '>Premium version license (paying at least <b className='font-poppin'>$3.99</b>) :</h1>
//                         <p className=' text-lg py-4 font-poppin'>This asset pack can be used in any commercial or non-commercial project, you may modify the assets as you wish.  This asset pack can't be resold or redistributed even if modified.</p>
//                         <br/>
//                         <h1 className='text-2xl sm:text-3xl font-bold '>Free version license :</h1>
//                         <p className=' text-lg py-4 font-poppin'>This asset pack can be used in any non-commercial project, you may modify the asset as you wish. This asset pack can't be used in any commercial project, resold/redistributed, even if modified

//                         Please Credit : Cup Nooble or use 
//                         <a className=' underline underline-offset-5 text-neutral-500 font-bold hover:' href="https://cupnooble.itch.io/">(this link)</a>
//                         </p>
//                         <br/>
//                         <h2 className='text-xl sm:text-2xl font-semibold '>&gt; Premium Pack : </h2>
//                         <p className=' text-lg py-4 font-poppin'>Includes Everything from the free basic pack plus much more ( Early version available )</p>
//                     </div>
//                 </div>
//             </div>
//             <div name='container' className='h-auto w-screen'>
//                 <img src={stillDev} alt="stillDev" className=' bg-specialBg border-specialBorder border-8 rounded-2xl hover:scale-[0.8] duration-200 scale-75'/>
//             </div>

//         </div>
//     )
// }

// export default StillDevelop

import React from 'react';
import stillDev from '../assets/stilldev.gif';

const StillDevelop = () => {
  return (
    <div className="w-screen-lg h-auto px-4 py-16">
      <div
        name="container"
        className="max-w-screen-lg mx-auto justify-center flex flex-col items-center lg:h-screen lg:w-screen lg:px-4 lg:grid lg:grid-cols-2 lg:gap-4"
      >
        <div className="border-specialBorder border-8 rounded-2xl w-full bg-specialBg text-black font-signature ">
          <div className="mx-8 my-4">
            <h1 className="text-2xl sm:text-3xl font-bold ">
              Premium version license (paying at least{' '}
              <b className="font-poppin">$3.99</b>) :
            </h1>
            <p className="text-lg py-4 font-poppin">
              This asset pack can be used in any commercial or non-commercial
              project, you may modify the assets as you wish. This asset pack
              can't be resold or redistributed even if modified.
            </p>
            <br />
            <h1 className="text-2xl sm:text-3xl font-bold ">
              Free version license :
            </h1>
            <p className="text-lg py-4 font-poppin">
              This asset pack can be used in any non-commercial project, you may
              modify the asset as you wish. This asset pack can't be used in any
              commercial project, resold/redistributed or offered for free.
            </p>
          </div>
        </div>
        <div className="border-specialBorder border-8 rounded-2xl hover:scale-[0.7] duration-200 scale-[0.65] bg-yellowPastel border-1">
          <img
            src={stillDev}
            alt="Still developing"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default StillDevelop;


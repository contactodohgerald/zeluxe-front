import { useNavigate } from 'react-router-dom';
import { Head } from '@/components/seo';
import { useUser } from '@/lib/auth';
import { paths } from '@/config/paths';
import { useEffect, useState } from 'react';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Link } from 'react-router-dom';
import { Select } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { apartments, bookingLinks, cityLinks, icons } from '@/utils/constants';

export const LandingRoute = () => {
  const navigate = useNavigate();
  const user = useUser();
  // const { id } = useParams<{ id: string }>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    user.data
      ? navigate(paths.app.dashboard.getHref())
      : navigate(paths.home.getHref());
  }, [user.data]);

  return (
    <>
      <Head description="Welcome to Zeluxe Listings Home Page" />
      <Header />
      <main>
        <div className="hero-area bg-1 overly text-center">
          <div className="container mx-auto">
            <div className="row">
              <div className="col-md-12 relative">
                <div className="content-block mx-2 md:mx-0">
                  <h1 className="text-[35px] font-bold">
                    Find Your Perfect Stay.
                  </h1>
                  <p className="mx-3 mb-4 text-center text-[20px] md:mx-0">
                    Join the countless individuals who choose to stay and
                    experience <br />
                    the convenience and comfort of our apartments worldwide.
                  </p>
                  {/* <div className="flex justify-center py-24 mt-4 space-x-4"> */}
                  <div className="short-popular-category-list text-center">
                    <ul className="inline-flex space-x-4 pl-0">
                      {bookingLinks.map((icon, idx) => {
                        console.log(
                          'icons',
                          icons[icon as keyof typeof icons] as IconProp,
                        );
                        return (
                          <Link
                            key={idx}
                            to="#"
                            className="flex items-center space-x-1 border border-[#404040] px-2.5 py-[4px] text-[12px] font-[200] text-[#c1c1c1] hover:underline"
                          >
                            <FontAwesomeIcon
                              //  icon={icons[icon as keyof typeof icons] as IconProp}
                              icon={'fa fa-credit-card' as IconProp}
                            />
                            <span>{icon}</span>
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="advance-search mx-8 md:mx-0">
                  <div className="container mx-auto">
                    <form className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {['What are you looking for', 'Category', 'Location'].map(
                        (placeholder, idx) => (
                          <input
                            key={idx}
                            type={idx === 1 ? 'select' : 'text'}
                            placeholder={placeholder}
                            className="h-[calc(1.5rem + 0.75rem + 2px)] my-[0.5rem] block w-full rounded-[0.25rem] border border-[#ced4da] bg-white bg-clip-padding px-3 py-[0.375rem] text-[1rem] font-[400] leading-[1.5] text-[#495057] outline-none focus:outline-none"
                          />
                        ),
                      )}
                      <div className="col-md-6 items-center">
                        <button
                          type="submit"
                          className="btn active h-[calc(1.5rem + 0.75rem + 2px)] my-[0.5rem] block w-full rounded-[0.25rem] border-[#1c7430] bg-[#1e7e34] py-[0.375rem] text-[1rem] text-white hover:text-white"
                        >
                          Search Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="px-[10px] py-[100px] text-center">
          <h2 className="mb-4 text-[32px] text-black-6">Featured Apartments</h2>
          <div className="container mx-auto">
            <div className="flex flex-wrap border-b pb-4">
              {cityLinks.map((city, idx) => (
                <Link
                  key={city}
                  to={city.toLowerCase()}
                  className={`${activeIndex === idx ? 'text-green-5 underline' : 'text-black-6'} p-4`}
                  onClick={() => setActiveIndex(idx)}
                >
                  {city}
                </Link>
              ))}
              <div className="flex items-center text-gray-700">
                <Select className="explore cursor-pointer appearance-none rounded-[0.25rem] border-none bg-[#6c757d] px-[1.75rem] py-[0.375rem] text-white outline-none hover:border-[#545b62] hover:bg-[#5a6268] focus:outline-none">
                  <option>Explore More</option>
                  {cityLinks.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {apartments.map((apt, idx) => (
                <div
                  key={apt.id}
                  className="card card-shadow overflow-hidden bg-white pb-2.5 text-start"
                >
                  <img
                    src={apt.img}
                    alt={`Home ${idx + 1}`}
                    className="h-[240px] w-full object-cover"
                  />
                  <div className="p-4">
                    <Link to={`/${apt.id}`} className="hover:text-primary">
                      <h5 className="mb-2.5 text-[20px]">
                        {apt.title} for Booking
                      </h5>
                    </Link>
                    <p className="mb-[5px] text-gray-700">{apt.location}</p>
                    <p className="mb-2.5 text-sm text-gray-500">
                      {apt.amenities}
                    </p>
                    <p className="text-green-5">{apt.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

// import { useNavigate } from 'react-router-dom';
// import { Head } from '../../components/seo';
// import { useUser } from '../../lib/auth';
// import { paths } from '../../config/paths';
// import { useEffect } from 'react';
// import { Header } from '../../components/ui/header';
// import { Footer } from '../../components/ui/footer';
// import { Link } from '../../components/ui/link';
// import Home10 from '../../assets/images/featured_properties/home10.jpg';
// import Home9 from '../../assets/images/featured_properties/home9.jpg';
// import Home7 from '../../assets/images/featured_properties/home7.jpg';

// export const LandingRoute = () => {
//   const navigate = useNavigate();
//   const user = useUser();

//   useEffect(() => {
//     if (user.data) {
//       navigate(paths.app.dashboard.getHref());
//     } else {
//       navigate(paths.home.getHref());
//     }
//   }, [user.data]);
//   return (
//     <>
//       <Head description="Welcome to Zeluxe Listings" />
//       <Header />
//       <main>
//         <div className="relative text-center hero-area bg-1 bg-overlay">
//           <div className="container px-4 mx-auto">
//             <div className="max-w-xl mx-auto space-y-4 text-white">
//               <h1 className="text-4xl font-bold">Find Your Perfect Stay.</h1>
//               <p className="text-lg">
//                 Join the countless individuals who choose to stay and experience
//                 the convenience and comfort of our apartments worldwide.
//               </p>
//               <div className="flex justify-center mt-4 space-x-4">
//                 <Link
//                   to="#"
//                   className="flex items-center space-x-1 text-white hover:underline"
//                 >
//                   <i className="fa fa-calendar"></i>
//                   <span>Bookings</span>
//                 </Link>
//                 <Link
//                   to="#"
//                   className="flex items-center space-x-1 text-white hover:underline"
//                 >
//                   <i className="fa fa-building"></i>
//                   <span>Apartments</span>
//                 </Link>
//                 <Link
//                   to="#"
//                   className="flex items-center space-x-1 text-white hover:underline"
//                 >
//                   <i className="fa fa-credit-card"></i>
//                   <span>Easy Payment</span>
//                 </Link>
//               </div>
//             </div>

//             <div className="max-w-4xl p-6 mx-auto mt-8 bg-white rounded-lg shadow-lg advance-search">
//               <form className="grid grid-cols-1 gap-4 lg:grid-cols-4">
//                 <input
//                   type="text"
//                   placeholder="What are you looking for"
//                   className="p-3 border border-gray-300 rounded-md"
//                 />
//                 <select className="p-3 border border-gray-300 rounded-md">
//                   <option>Category</option>
//                   <option value="1">Bookings</option>
//                   <option value="2">Rent</option>
//                   <option value="3">Buy</option>
//                 </select>
//                 <input
//                   type="text"
//                   placeholder="Location"
//                   className="p-3 border border-gray-300 rounded-md"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full p-3 text-white bg-green-500 rounded-md"
//                 >
//                   Search Now
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         <div className="py-8 feature">
//           <h2 className="mb-4 text-2xl font-semibold text-center">
//             Featured Apartments
//           </h2>
//           <div className="container px-4 mx-auto">
//             <div className="flex flex-wrap justify-center pb-4 space-x-4 border-b">
//               <Link to="#" className="text-green-500 underline">
//                 Abuja
//               </Link>
//               <Link to="#" className="text-gray-700">
//                 Lagos
//               </Link>
//               <Link to="#" className="text-gray-700">
//                 Owerri
//               </Link>
//               <Link to="#" className="text-gray-700">
//                 Asaba
//               </Link>
//               <Link to="#" className="text-gray-700">
//                 Enugu
//               </Link>
//               <Link to="#" className="text-gray-700">
//                 Benin
//               </Link>
//               <Link to="#" className="text-gray-700">
//                 Portharcourt
//               </Link>
//               <Link to="#" className="text-gray-700">
//                 Calabar
//               </Link>
//               <Link to="#" className="text-gray-700">
//                 Kano
//               </Link>
//               <Link to="#" className="text-gray-700">
//                 Makurdi
//               </Link>
//               <Link to="#" className="text-gray-700">
//                 Akwa
//               </Link>
//               <div className="text-gray-700">
//                 <select className="text-gray-700 bg-gray-100 border border-gray-300 rounded-md">
//                   <option>Explore More</option>
//                   <option value="link1.html">F.C.T</option>
//                   {/* Additional options...  */}
//                 </select>
//               </div>
//             </div>

//             <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
//               <div className="overflow-hidden bg-white rounded-lg shadow-lg card">
//                 <img
//                   src={Home9}
//                   alt="Home 1"
//                   className="object-cover w-full h-40"
//                 />
//                 <div className="p-4">
//                   <h5 className="text-lg font-semibold">
//                     4 Bedroom Apartment for Booking
//                   </h5>
//                   <p className="text-gray-700">
//                     6th avenue, 69 road, Gwarinpa.
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     Good Road . 24/7 light . Serenity . Security
//                   </p>
//                   <p className="font-bold text-green-600">₦30,000 / day</p>
//                 </div>
//               </div>

//               <div className="overflow-hidden bg-white rounded-lg shadow-lg card">
//                 <img
//                   src={Home7}
//                   alt="Home 2"
//                   className="object-cover w-full h-40"
//                 />
//                 <div className="p-4">
//                   <h5 className="text-lg font-semibold">
//                     2 Bedroom Apartment for Booking
//                   </h5>
//                   <p className="text-gray-700">Aco Estate, Lugbe.</p>
//                   <p className="text-sm text-gray-500">
//                     Good Road . 24/7 light . Serenity . Security
//                   </p>
//                   <p className="font-bold text-green-600">₦100,000 / day</p>
//                 </div>
//               </div>

//               <div className="overflow-hidden bg-white rounded-lg shadow-lg card">
//                 <img
//                   src={Home10}
//                   alt="Home 10"
//                   className="object-cover w-full h-40"
//                 />
//                 <div className="p-4">
//                   <h5 className="text-lg font-semibold">
//                     3 Bedroom Apartment for Booking
//                   </h5>
//                   <p className="text-gray-700">Phase 4, Nosco Road Kubwa.</p>
//                   <p className="text-sm text-gray-500">
//                     Good Road . 24/7 light . Serenity . Security
//                   </p>
//                   <p className="font-bold text-green-600">₦45,000 / day</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

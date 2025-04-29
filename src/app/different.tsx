import Image from 'next/image';
import { FC } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProductDetail: FC = () => {
  return (
    <div className="max-w-8xl mx-auto p-4 px-52">
      <div className="flex flex-col lg:flex-row">
        {/* Product Image Section */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative w-full max-w-lg">
            <Image
              src="/mbp.png"
              alt="2020 Apple MacBook Pro with Apple M1 Chip"
              width={600}
              height={400}
              className="w-full rounded-sm shadow-sm"
            />
          </div>
          
          <div className="relative flex mt-6 p-2 border rounded-sm w-full max-w-lg">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-2 border rounded-full bg-orange-500 text-white z-10">
            <FaArrowLeft />
            </button>
            
            <div className="flex justify-between space-x-2 mx-auto">
            {[
                "/01.png",
                "/05.png",
                "/03.png",
                "/04.png",
                "/02.png",
                "/06.png"
            ].map((src, index) => (
                <Image
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                width={100}
                height={100}
                className="w-16 h-16 border rounded-sm hover:border-orange-500 cursor-pointer transition-all"
                />
            ))}
            </div>
            
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-2 border rounded-full bg-orange-500 text-white z-10">
               <FaArrowRight />
            </button>
          </div>
        </div>
        
        {/* Product Details Section */}
        <div className="flex-1 mt-8 lg:mt-0 lg:ml-8">
          <div className="text-xl font-semibold">
            <span className="text-orange-500">4.7 Star Rating</span>
            <span className="ml-2">(21,671 User feedback)</span>
          </div>
          
          <h1 className="text-2xl font-bold mt-2">
            2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM,<br /> 256GB SSD Storage) - Space Gray
          </h1>
          
          <div className="mt-6 space-y-3">
            {[
              { label: 'Brand', value: 'Apple' },
              { label: 'Availability', value: 'In Stock', isGreen: true },
              { label: 'Category', value: 'Electronics Devices' },
              { label: 'Location', value: 'Achimota, Greater Accra' }
            ].map((item, index) => (
              <p key={index} className="flex items-center">
                <span className="font-bold min-w-[100px]">{item.label}:</span>
                <span className={item.isGreen ? 'text-green-500' : ''}>
                  {item.value}
                </span>
              </p>
            ))}
          </div>
          
          <div className="text-3xl font-bold text-blue-600 mt-6">$1699</div>
          
          <div className="flex mt-6 space-x-4">
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors flex-1">
            CHAT
          </button>
          <button className="border-2 border-orange-500 text-orange-500 px-6 py-2 rounded hover:bg-orange-50 transition-colors flex-1">
            CALL NOW
          </button>
          <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900 transition-colors flex-1">
            Bisame Trade Assurance
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;


            {/* <div className="md:col-span-1 md:border-l md:pl-6 border-gray-200">
                <h2 className="text-xl font-semibold mb-4">Seller Information</h2>
                <div className="flex items-center mb-4">
                  <Image
                    src="/Avatar.png"
                    alt="Seller profile picture"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="text-gray-900 font-semibold">Bisame Digital Ltd.</p>
                    <p className="text-gray-500">Date registered: 17th February, 2025</p>
                  </div>
                </div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-sm hover:bg-orange-600 transition-colors">
                  VIEW ALL ADS
                </button>
              </div> */}
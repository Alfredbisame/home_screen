"use client";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaHome, FaThLarge, FaPlus, FaCommentDots, FaUser, FaPlayCircle, FaHeadset } from "react-icons/fa"; // Import FontAwesome icons
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";


export default function BisamePage() {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { icon: <FaHome />, label: "Home" },
    { icon: <FaThLarge />, label: "Categories" },
    { icon: <FaPlus />, label: "Post" },
    { icon: <FaCommentDots />, label: "Messages" },
    { icon: <FaUser />, label: "Profile" },
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-950 p-2 flex items-center space-x-4">
        <Image
          alt="Logo"
          className="rounded-lg shadow-lg"
          src="/white logo 1.png"
          width={80}
          height={80}
          objectFit="cover"
        />
        <div className="flex-grow relative">
          <input
            className="w-full p-3 pl-10 rounded-full bg-white/10 backdrop-blur-lg text-white placeholder-white/70"
            placeholder="Search businesses, products..."
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
        </div>
      </div>
      
      {/* Categories */}
    <div className="overflow-x-auto whitespace-nowrap p-3 bg-blue-900">
      <div className="flex space-x-4">
        {["Fragrances", "Hair Beauty", "Bath & Body", "Skincare"].map((cat) => (
          <button
            key={cat}
            className="bg-white/10 backdrop-blur-lg text-white py-3 px-6 rounded-full hover:bg-white/20 transition-colors flex-shrink-0"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>

      {/* Hero Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="my-4 px-2"
      >
        <SwiperSlide>
          <Link href="/register" className="group block">
          <div className="bg-gradient-to-br from-orange-500 to-blue-900 rounded-3xl p-6 shadow-md hover:shadow-lg transition-shadow text-white">
          <Image
            alt="Register Guide"
            src="/f8.png"
            width={800}
            height={400}
            className="rounded-2xl mb-4"
          />
          <h3 className="text-xl font-semibold text-white mb-2">
            New to Bisame? 🎉
          </h3>
          <p className="text-white/80">
            Watch our quick tutorial to create your account in minutes
          </p>
          <div className="flex items-center mt-4 text-white group-hover:text-orange-300 transition-colors">
            <i className="fas fa-play-circle mr-2" /> Watch Tutorial
          </div>
        </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/seller-guide" className="group block">
          <div className="bg-gradient-to-br from-orange-500 to-blue-900 rounded-3xl p-4 shadow-md hover:shadow-lg transition-shadow text-white">
              <Image
                alt="Seller Guide"
                src="/s6.png"
                width={800}
                height={400}
                className="rounded-2xl mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                Start Selling 💼
              </h3>
              <p className="text-white/80">
                Learn how to set up your store and grow your business
              </p>
              <div className="flex items-center mt-4 text-white group-hover:text-orange-300 transition-colors">
                <i className="fas fa-store mr-2" /> Seller Resources
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 p-2">
          {/* Bisame TV */}
          <Link
        href="/videos"
        className="bg-white rounded-2xl p-2 shadow-md hover:shadow-lg transition-shadow flex items-center space-x-4"
      >
        <FaPlayCircle className="text-3xl text-orange-500 min-w-[1.5rem]" />
        <div>
          <h4 className="font-semibold text-blue-800">Bisame TV</h4>
          <p className="text-sm text-gray-600">Entertainment, news & insights</p>
        </div>
      </Link>


      {/* Help Center */}
      <Link
        href="/help"
        className="bg-white rounded-2xl p-2 shadow-md hover:shadow-lg transition-shadow flex items-center space-x-4"
      >
        <FaHeadset className="text-3xl text-green-500" />
        <div>
          <h4 className="font-semibold text-blue-800">Help Center</h4>
          <p className="text-sm text-gray-600">24/7 support assistance</p>
        </div>
      </Link>
    </div>

      {/* Trending Section */}
      <div className="p-4">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Trending</h2>
        <div className="space-y-6">
          {[
            {
              img: "/02.png",
              name: "The Obis Kitchen",
              desc: "Gourmet cakes & pastries delivery",
              location: "Greater Accra, Dome",
            },
            {
              img: "/f6.png",
              name: "Kay's Entrepreneurship",
              desc: "Business consulting & mentorship",
              location: "Central, Awutu Senya West",
            },
            {
              img: "/s21.png",
              name: "Print Palace Ghana",
              desc: "Professional printing services",
            },
          ].map((item, index) => (
            <Link href={`/business/${index + 1}`} key={index} className="block bg-white rounded-3xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex space-x-6">
                <Image
                  alt={item.name}
                  src={item.img}
                  width={120}
                  height={120}
                  objectFit="contain"
                  className="rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{item.desc}</p>
                  {item.location && (
                    <div className="flex items-center text-gray-500">
                      <i className="fas fa-map-marker-alt mr-2" />
                      {item.location}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      {/* <div className="fixed bottom-24 right-6">
        <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
          <i className="fas fa-plus" />
        </button>
      </div> */}

      {/* Footer Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-800 to-blue-950 shadow-lg p-2">
      <div className="flex justify-around items-center relative">
        {navItems.map((nav) => {
          const isActive = activeTab === nav.label.toLowerCase();
          return (
            <Link
              href={`/${nav.label.toLowerCase()}`}
              key={nav.label}
              onClick={() => setActiveTab(nav.label.toLowerCase())}
              className="relative flex flex-col items-center space-y-1 p-2"
            >
              {/* Floating Cutout Effect (Only on Active Tab) */}
              {isActive && (
                <div className="absolute -top-6 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="text-blue-800 text-2xl">{nav.icon}</div>
                </div>
              )}

              {/* Icon (Hidden if Active, Since it's inside the cutout) */}
              {!isActive && <div className="text-2xl text-white">{nav.icon}</div>}

              {/* Label Always Stays Below */}
              <span className={`text-xs font-medium ${isActive ? "text-blue-300" : "text-white rounded-t-xl"}`}>
                {nav.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
    </div>
  );
}
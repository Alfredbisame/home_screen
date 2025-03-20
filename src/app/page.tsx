"use client"; 
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function BisamePage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-950 p-4 flex items-center space-x-4">
        <Image
          alt="Logo"
          className="h-12 w-12 rounded-full shadow-lg"
          src="/white logo 1.png"
          width={48}
          height={48}
        />
        <div className="flex-grow relative">
          <input
            className="w-full p-3 pl-10 rounded-full bg-white/10 backdrop-blur-lg text-white placeholder-white/70"
            placeholder="Search businesses, products..."
          />
          <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
        </div>
        <Link href="/notifications">
          <i className="fas fa-bell text-2xl text-white hover:text-orange-500 transition-colors" />
        </Link>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-4 gap-4 p-4 bg-blue-800">
        {["Fragrances", "Hair Beauty", "Bath & Body", "Skincare"].map((cat) => (
          <button
            key={cat}
            className="bg-white/10 backdrop-blur-lg text-white py-3 rounded-lg hover:bg-white/20 transition-colors"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Hero Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="my-6 px-4"
      >
        <SwiperSlide>
          <Link href="/register" className="group block">
            <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
              <Image
                alt="Register Guide"
                src="/f8.png"
                width={800}
                height={400}
                className="rounded-2xl mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                New to Bisame? 🎉
              </h3>
              <p className="text-gray-600">
                Watch our quick tutorial to create your account in minutes
              </p>
              <div className="flex items-center mt-4 text-blue-600 group-hover:text-blue-800 transition-colors">
                <i className="fas fa-play-circle mr-2" /> Watch Tutorial
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/seller-guide" className="group block">
            <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
              <Image
                alt="Seller Guide"
                src="/s6.png"
                width={800}
                height={400}
                className="rounded-2xl mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Start Selling 💼
              </h3>
              <p className="text-gray-600">
                Learn how to set up your store and grow your business
              </p>
              <div className="flex items-center mt-4 text-blue-600 group-hover:text-blue-800 transition-colors">
                <i className="fas fa-store mr-2" /> Seller Resources
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <Link href="/videos" className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center space-x-4">
            <i className="fas fa-tv text-3xl text-orange-500" />
            <div>
              <h4 className="font-semibold text-blue-800">Bisame TV</h4>
              <p className="text-sm text-gray-600">Video tutorials & guides</p>
            </div>
          </div>
        </Link>
        <Link href="/help" className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center space-x-4">
            <i className="fas fa-life-ring text-3xl text-green-500" />
            <div>
              <h4 className="font-semibold text-blue-800">Help Center</h4>
              <p className="text-sm text-gray-600">24/7 support assistance</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Trending Section */}
      <div className="p-4">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Popular Businesses</h2>
        <div className="space-y-6">
          {[
            {
              img: "/business1.jpg",
              name: "The Obis Kitchen",
              desc: "Gourmet cakes & pastries delivery",
              location: "Greater Accra, Dome",
            },
            {
              img: "/business2.jpg",
              name: "Kay's Entrepreneurship",
              desc: "Business consulting & mentorship",
              location: "Central, Awutu Senya West",
            },
            {
              img: "/business3.jpg",
              name: "Print Palace Ghana",
              desc: "Professional printing services",
            },
          ].map((item, index) => (
            <Link href={`/business/${index + 1}`} key={index} className="block bg-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex space-x-6">
                <Image
                  alt={item.name}
                  src={item.img}
                  width={120}
                  height={120}
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
      <div className="fixed bottom-24 right-6">
        <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
          <i className="fas fa-plus" />
        </button>
      </div>

      {/* Footer Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md rounded-t-3xl p-2">
        <div className="flex justify-around items-center">
          {[
            { icon: "home", label: "Home" },
            { icon: "th-large", label: "Categories" },
            { icon: "plus", label: "Post" },
            { icon: "comment-dots", label: "Messages" },
            { icon: "user", label: "Profile" },
          ].map((nav) => (
            <Link
              href={`/${nav.label.toLowerCase()}`}
              key={nav.label}
              className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <i className={`fas fa-${nav.icon} text-2xl text-blue-600`} />
              <span className="text-xs text-blue-600 font-medium">
                {nav.label}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
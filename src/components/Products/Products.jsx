import React from "react";
import Img1 from "../../assets/mops/product1.jpeg";
import Img2 from "../../assets/mops/product2.jpeg";
import Img3 from "../../assets/mops/product3.jpeg";
import Img4 from "../../assets/mops/product4.jpeg";
import Img5 from "../../assets/mops/product6.jpeg";
import Img6 from "../../assets/mops/product5.jpeg";
import Img7 from "../../assets/mops/product7.jpeg";
import Img8 from "../../assets/mops/product8.jpeg";

import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Mop 1",
    rating: 5.0,
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Mop 2",
    rating: 4.5,
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Mop 3",
    rating: 4.7,
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Mop 4",
    rating: 4.4,
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Mop 5",
    rating: 4.5,
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Mop 6",
    rating: 4.5,
    aosDelay: "800",
  },
  {
    id: 7,
    img: Img7,
    title: "Mop 7",
    rating: 4.5,
    aosDelay: "800",
  },
  {
    id: 8,
    img: Img8,
    title: "Mop 8",
    rating: 4.5,
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Explore our range of high-quality cleaning solutions for a spotless
            home.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              Find Your Perfect Clean
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

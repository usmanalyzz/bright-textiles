import React from "react";
import Image1 from "../../assets/hero/Shabbir.png";
import Image2 from "../../assets/hero/Zaheer.png";
import Image3 from "../../assets/hero/Shahroze.png";
import Image4 from "../../assets/hero/Umair.png";
import Image5 from "../../assets/hero/Waqar.png";
import Image6 from "../../assets/hero/Wadood.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Shabbir Ahmad",
    position: "CEO",
    description: `
      <b>Visionary Leadership:</b> Shabbir Ahmad steers Bright Textiles with a clear vision for the future, driving innovation and growth in the cleaning product industry. His dedication to excellence ensures Bright Textiles delivers high-quality cleaning solutions that meet the needs of our customers.<br/><br/>
      <b>Extensive Experience:</b> With [Number] years of experience in the industry, Shabbir brings a wealth of knowledge and expertise to Bright Textiles. His leadership has been instrumental in establishing the company as a leading provider of cleaning solutions.
    `,
  },
  {
    id: 2,
    img: Image2,
    title: "Zaheer Ahmad",
    position: "Managing Director",
    description: `
      <b>Strategic Direction:</b> Zaheer Ahmad guides Bright Textiles' overall operations and sets strategic direction for the company. His strong leadership and business acumen ensure Bright Textiles operates efficiently and achieves its long-term goals.<br/><br/>
      <b>Industry Expertise:</b> Zaheer's extensive experience in the cleaning product industry allows him to make informed decisions for the company's growth and development.
    `,
  },
  {
    id: 3,
    img: Image3,
    title: "Shahroze Ahmad",
    position: "Proprietor",
    description: `
      <b>Foundational Vision:</b> Shahroze Ahmad laid the foundation for Bright Textiles' success with his entrepreneurial spirit and innovative vision. His commitment to quality and customer satisfaction continues to guide the company's mission.<br/><br/>
      <b>Industry Knowledge:</b> Shahroze's deep understanding of the cleaning product industry remains a valuable asset for Bright Textiles. His continued involvement ensures the company stays at the forefront of market trends.
    `,
  },
  {
    id: 4,
    img: Image4,
    title: "Umair Ahmad",
    position: "Managing Partner",
    description: `
      <b>Collaborative Leadership:</b> Umair fosters a collaborative and results-oriented environment at Bright Textiles. He plays a key role in developing strategic partnerships and fostering strong relationships with stakeholders.<br/><br/>
      <b>Business Acumen:</b> Umair's business acumen contributes significantly to Bright Textiles' success. He oversees key business functions and ensures the company operates with financial stability and growth.
    `,
  },
  {
    id: 5,
    img: Image5,
    title: "Waqar Ahmad",
    position: "Marketing Head",
    description: `
      <b>Brand Advocacy:</b> Waqar Ahmad champions the Bright Textiles brand, crafting compelling marketing strategies to raise brand awareness and customer engagement. His dedication to effective communication ensures Bright Textiles reaches its target audience and positions itself as a leader in the cleaning solutions market.<br/><br/>
      <b>Market Expertise:</b> Waqar's understanding of the cleaning product market allows him to tailor marketing initiatives that resonate with customers' needs and preferences.
    `,
  },
  {
    id: 6,
    img: Image6,
    title: "Abdul Wadood",
    position: "Sales Manager",
    description:
      "<b>Driving Sales Growth:</b> Abdul Wadood spearheads Bright Textiles' sales efforts, fostering strong relationships with distributors and retailers across the country. His strategic approach and in-depth knowledge of the cleaning product market ensure Bright Textiles reaches a wider audience and achieves consistent sales growth. <br/><b>Building Partnerships:</b> Abdul Wadood excels at building and maintaining strong partnerships with industry stakeholders. His collaborative spirit and communication skills ensure mutually beneficial relationships that drive long-term success for both Bright Textiles and its partners.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <h2
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-2xl sm:text-3xl lg:text-4xl font-medium"
                  >
                    {data.position}
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  ></p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  ></div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

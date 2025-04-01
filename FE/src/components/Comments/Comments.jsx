import React from "react";
import Slider from "react-slick";

const CommentsData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Comments = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Những đánh giá thú vị về trải nghiệm của khách hàng
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Comments</h1>
        </div>

        {/* Testimonial Slider */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {CommentsData.map((data) => (
              <div key={data.id} className="my-6 px-4">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4 flex justify-center">
                    <img src={data.img} alt={data.name} className="rounded-full w-20 h-20" />
                  </div>
                  <div className="text-center space-y-3">
                    <p className="text-xs text-gray-500">{data.text}</p>
                    <h1 className="text-xl font-bold text-black/80 dark:text-light">{data.name}</h1>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Comments;

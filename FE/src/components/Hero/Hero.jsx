import React from 'react';
import Slider from 'react-slick';

import Babylon from "../../assets/7KyQuan/Babylon.jpg";
import DauTruongLaMa from "../../assets/7KyQuan/DauTruongLaMa.jpg";
import KheopsPyramid from "../../assets/7KyQuan/Kheops-Pyramid.jpg";
import Mexico from "../../assets/7KyQuan/Mexico.JPG";
import Peru from "../../assets/7KyQuan/Peru.jpg";
import Petra from "../../assets/7KyQuan/Petra.jpg";
import TajMahal from "../../assets/7KyQuan/TajMahal.jpg";
import VanLyTruongThanh from "../../assets/7KyQuan/VanLyTruongThanh.jpg";

const ImageList = [
  { id: 1, img: Babylon, title: "Chúa Kitô Cứu Thế - Brazil", description: "Một trong bảy kỳ quan thế giới hiện đại, nằm trên đỉnh núi Corcovado." },
  { id: 2, img: DauTruongLaMa, title: "Đấu Trường La Mã - Italy", description: "Biểu tượng lịch sử của Đế chế La Mã, nơi diễn ra các trận đấu võ sĩ giác đấu." },
  { id: 3, img: KheopsPyramid, title: "Kim Tự Tháp Giza - Ai Cập", description: "Kỳ quan thế giới cổ đại duy nhất còn tồn tại đến ngày nay." },
  { id: 4, img: Mexico, title: "Chichén Itzá - Mexico", description: "Di tích của nền văn minh Maya với kim tự tháp El Castillo nổi tiếng." },
  { id: 5, img: Peru, title: "Machu Picchu - Peru", description: "Thành phố cổ bí ẩn của người Inca, nằm trên dãy Andes." },
  { id: 6, img: Petra, title: "Petra - Jordan", description: "Thành phố cổ được khắc vào đá, còn được gọi là 'Thành phố Hoa Hồng'." },
  { id: 7, img: TajMahal, title: "Taj Mahal - Ấn Độ", description: "Biểu tượng tình yêu vĩnh cửu, một tuyệt tác kiến trúc Mô-gôn." },
  { id: 8, img: VanLyTruongThanh, title: "Vạn Lý Trường Thành - Trung Quốc", description: "Công trình phòng thủ vĩ đại kéo dài hàng nghìn km." },
];

const Hero = ({ handleOrderPopup }) => {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "ease-in-out",
      pauseOnHover: false,
      pauseOnFocus: false,  // Sửa lỗi mất autoplay khi click
    };
  
    return (
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center duration-200 pt-[80px]">
        <div className="container mx-auto px-6 pb-8 sm:pb-0">
        <Slider {...settings}>
  {ImageList.map((data) => (
    <div key={data.id} className="relative min-h-[550px] sm:min-h-[650px] flex items-center justify-center overflow-hidden rounded-3xl">
      {/* Ảnh nền */}
      <img
        src={data.img}
        alt={data.title}
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
      />
      {/* Overlay để làm tối ảnh */}
      <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
      {/* Nội dung */}
      <div className="relative z-10 text-center sm:text-left text-white px-8 sm:px-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">{data.title}</h1>
        <p className="mt-4 text-lg sm:text-xl">{data.description}</p>
      </div>
    </div>
  ))}
</Slider>
        </div>
      </div>
    );
  };  

export default Hero;

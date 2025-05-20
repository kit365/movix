import stars from "../../assets/images/rating.png";
import star from "../../assets/images/rating-half.png";
import bannerImg from "../../assets/images/temp-1.jpeg";
import iconPlay from "../../assets/images/play-button.png";

export const Hero = () => {
    return (
        <div className="w-full h-[700px] bg-[url('banner.png')] bg-cover bg-center bg-no-repeat relative">
            {/* Lớp overlay tối */}
            <div className="absolute w-full h-full bg-black opacity-30 z-0" />

            {/* Nội dung chia 2 bên */}
            <section className="flex flex-7 w-full h-full items-center justify-between px-12 relative z-10">

                {/* Bên trái - Nội dung */}
                <div className="w-1/2 h-full flex flex-col justify-center min-lg:space-y-6">
                    <p className="text-white bg-gradient-to-r from-red-600 px-5 py-3 rounded w-fit cursor-pointer">
                        TV Show
                    </p>

                    <div className="text-6xl text-white font-medium leading-snug max-lg:text-5xl">
                        <h1>Nghe nói em</h1>
                        <h1>thích tôi</h1>
                    </div>

                    <div className="flex gap-2">
                        <img src={stars} alt="star" width={30} height={30} />
                        <img src={stars} alt="star" width={30} height={30} />
                        <img src={stars} alt="star" width={30} height={30} />
                        <img src={stars} alt="star" width={30} height={30} />
                        <img src={star} alt="star" width={30} height={30} />
                    </div>

                    <p className="text-white font-medium text-sm leading-relaxed">
                        Angel's Egg xoay quanh cuộc sống của một cô gái trẻ vô danh, sống một mình trong một thành phố bị bỏ rơi. Cô gái quan tâm đến một quả trứng lớn mà cô giấu bên dưới váy của mình và bảo vệ nó khi tìm kiếm thức ăn và nước uống...
                    </p>

                    <div className="flex gap-4">
                        <button className="px-4 py-2 text-white bg-black rounded cursor-pointer">Chi tiết</button>
                        <button className="px-4 py-2 text-white bg-red-700 rounded cursor-pointer">Xem phim</button>
                    </div>
                </div>
                {/* Bên phải - Hình ảnh */}
                <div className="flex justify-center">
                    <div className="relative w-[300px] min-lg:mr-30 group">
                        {/* Hình ảnh */}
                        <img
                            src={bannerImg}
                            alt="banner"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />

                        {/* Lớp mờ khi hover vào nút play */}
                        <div className="absolute inset-0 bg-black/30 backdrop-blur-sx opacity-0 group-hover:opacity-100 rounded-lg transition duration-300" />

                        {/* Icon play nằm giữa ảnh */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img
                                src={iconPlay}
                                alt="iconplay"
                                className="w-16 h-16 cursor-pointer opacity-80 hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

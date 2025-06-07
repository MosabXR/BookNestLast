import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { getBooks } from "../services/bookService";

export default function Explore() {
  const {
    data: data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks("python"),
  });

  const books = data?.results || [];

  if (isLoading) return <div className="spinner"></div>;
  if (error) return <p>Error fetching books</p>;

  console.log(books);

  return (
    <div className="flex flex-col gap-md py-md">
      <h2 className="text-md sm:text-xl font-semibold">Recommended For You</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 40 },
        }}
        className="w-full relative"
      >
        {books
          ?.filter((book, i) => books[i]?.isbn13 !== books[i - 1]?.isbn13)
          .map((book) => (
            <SwiperSlide key={book.isbn13}>
              <Link
                to={`/book/${book?.isbn13}`}
                className="group rounded-2xl shadow-md overflow-hidden relative block"
              >
                <div
                  className="absolute inset-0 bg-secondary-black transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-0"
                  aria-hidden="true"
                />
                <img
                  src={book?.cover_img}
                  className="absolute inset-0 w-full h-full object-cover blur-[100px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0 peer"
                  aria-hidden="true"
                  draggable={false}
                />
                <figure className="flex flex-col justify-center items-center gap-4 sm:gap-5 p-4 sm:p-6 relative z-10">
                  <div className="book-cover h-[256px] sm:h-[280px] relative">
                    <img
                      src={book?.cover_img}
                      alt={book?.title}
                      className="w-[180px] h-[280px] object-cover rounded-2xl relative transition-transform duration-300 group-hover:-translate-y-4 z-20 peer"
                    />
                  </div>
                  <figcaption className="flex flex-col justify-center items-center gap-2 sm:gap-3">
                    <h4 className="text-base sm:text-lg text-primary-white font-semibold text-center line-clamp-1">
                      {book?.title}
                    </h4>
                    <h5 className="text-sm sm:text-base text-primary-gray text-center">
                      {book?.author}
                    </h5>
                    {/* <div className="flex items-center">
                    <span className="text-yellow-400 text-sm sm:text-base">
                      {"★".repeat(Math.floor(book.rating))}
                      {book.rating % 1 !== 0 && "☆"}
                    </span>
                    <span className="text-primary-gray text-sm ml-2">
                      ({book.rating})
                    </span>
                  </div> */}
                  </figcaption>
                </figure>
              </Link>
            </SwiperSlide>
          ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
}

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Link } from "react-router-dom";

export default function Explore() {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover:
        "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
      rating: 4.5,
      description:
        "A story of wealth, love, and the American Dream in the Roaring Twenties.",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      cover:
        "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/cf9c878d81fcf26ceaa350cbf77aa1f5.jpg",
      rating: 4.8,
      description:
        "A powerful tale of racial injustice and moral growth in the South.",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      cover:
        "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/0be61269e4fc87209ac3e2a2ecab4abd.jpg",
      rating: 4.7,
      description: "A dystopian vision of totalitarianism and surveillance.",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      cover:
        "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
      rating: 4.6,
      description:
        "A witty romance exploring class, family, and personal growth.",
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      cover:
        "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
      rating: 4.6,
      description:
        "A witty romance exploring class, family, and personal growth.",
    },
    {
      id: 6,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      cover:
        "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
      rating: 4.6,
      description:
        "A witty romance exploring class, family, and personal growth.",
    },
  ];

  const collections = [
    {
      id: 1,
      title: "Detective",
      description: "Timeless stories from the greatest authors.",
      books: [
        {
          id: 1,
          title: "The Great Gatsby",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 2,
          title: "To Kill a Mockingbird",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/cf9c878d81fcf26ceaa350cbf77aa1f5.jpg",
        },
        {
          id: 3,
          title: "Pride and Prejudice",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/0be61269e4fc87209ac3e2a2ecab4abd.jpg",
        },
      ],
      bookCount: 25,
    },
    {
      id: 2,
      title: "Romance",
      description: "Explore futuristic worlds and ideas.",
      books: [
        {
          id: 4,
          title: "1984",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 5,
          title: "Dune",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 6,
          title: "Brave New World",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/0be61269e4fc87209ac3e2a2ecab4abd.jpg",
        },
      ],
      bookCount: 18,
    },
    {
      id: 3,
      title: "Horror",
      description: "Gripping tales of suspense and intrigue.",
      books: [
        {
          id: 7,
          title: "The Da Vinci Code",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 8,
          title: "Gone Girl",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 9,
          title: "The Girl with the Dragon Tattoo",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
      ],
      bookCount: 30,
    },
    {
      id: 3,
      title: "Fictional",
      description: "Gripping tales of suspense and intrigue.",
      books: [
        {
          id: 7,
          title: "The Da Vinci Code",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 8,
          title: "Gone Girl",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 9,
          title: "The Girl with the Dragon Tattoo",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
      ],
      bookCount: 30,
    },
    {
      id: 3,
      title: "Sci-Fi",
      description: "Gripping tales of suspense and intrigue.",
      books: [
        {
          id: 7,
          title: "The Da Vinci Code",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 8,
          title: "Gone Girl",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 9,
          title: "The Girl with the Dragon Tattoo",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
      ],
      bookCount: 30,
    },
    {
      id: 3,
      title: "Crime",
      description: "Gripping tales of suspense and intrigue.",
      books: [
        {
          id: 7,
          title: "The Da Vinci Code",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 8,
          title: "Gone Girl",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 9,
          title: "The Girl with the Dragon Tattoo",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
      ],
      bookCount: 30,
    },
  ];
  return (
    <div className="container py-8 flex flex-col gap-8">
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
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="w-full relative"
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <Link
              to={`/book/${book.id}`}
              className="group rounded-2xl shadow-md overflow-hidden relative block"
              style={{ pointerEvents: "auto" }}
            >
              {/* Blurred Background Image */}
              <div
                className="absolute inset-0 bg-secondary-black transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-0"
                aria-hidden="true"
              />
              <img
                src={book.cover}
                className="absolute inset-0 w-full h-full object-cover blur-[100px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0 peer"
                aria-hidden="true"
              />
              <figure className="flex flex-col justify-center items-center gap-4 sm:gap-5 p-4 sm:p-6 relative z-10">
                {/* Book Cover */}
                <div className="book-cover h-[256px] sm:h-[280px] relative">
                  <img
                    src={book.cover}
                    alt={`${book.title} cover`}
                    className="h-full w-full object-cover rounded-2xl relative transition-transform duration-300 group-hover:-translate-y-4 z-20 peer"
                  />
                </div>
                {/* Book Info */}
                <figcaption className="flex flex-col justify-center items-center gap-2 sm:gap-3">
                  <h4 className="text-base sm:text-lg text-primary-white font-semibold text-center line-clamp-1">
                    {book.title}
                  </h4>
                  <h5 className="text-sm sm:text-base text-primary-gray text-center">
                    {book.author}
                  </h5>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-sm sm:text-base">
                      {"★".repeat(Math.floor(book.rating))}
                      {book.rating % 1 !== 0 && "☆"}
                    </span>
                    <span className="text-primary-gray text-sm ml-2">
                      ({book.rating})
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Link>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
      <h2 className="text-md sm:text-xl font-semibold">Trending</h2>
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
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="w-full relative"
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <Link
              to={`/book/${book.id}`}
              className="group rounded-2xl shadow-md overflow-hidden relative block"
              style={{ pointerEvents: "auto" }}
            >
              {/* Blurred Background Image */}
              <div
                className="absolute inset-0 bg-secondary-black transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-0"
                aria-hidden="true"
              />
              <img
                src={book.cover}
                className="absolute inset-0 w-full h-full object-cover blur-[100px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0 peer"
                aria-hidden="true"
              />
              <figure className="flex flex-col justify-center items-center gap-4 sm:gap-5 p-4 sm:p-6 relative z-10">
                {/* Book Cover */}
                <div className="book-cover h-[256px] sm:h-[280px] relative">
                  <img
                    src={book.cover}
                    alt={`${book.title} cover`}
                    className="h-full w-full object-cover rounded-2xl relative transition-transform duration-300 group-hover:-translate-y-4 z-20 peer"
                  />
                </div>
                {/* Book Info */}
                <figcaption className="flex flex-col justify-center items-center gap-2 sm:gap-3">
                  <h4 className="text-base sm:text-lg text-primary-white font-semibold text-center line-clamp-1">
                    {book.title}
                  </h4>
                  <h5 className="text-sm sm:text-base text-primary-gray text-center">
                    {book.author}
                  </h5>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-sm sm:text-base">
                      {"★".repeat(Math.floor(book.rating))}
                      {book.rating % 1 !== 0 && "☆"}
                    </span>
                    <span className="text-primary-gray text-sm ml-2">
                      ({book.rating})
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Link>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
      <h2 className="text-md sm:text-xl font-semibold">Top Categories</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            to={`/collection/${collection.id}`}
            className="group rounded-2xl shadow-md overflow-hidden relative transition-transform duration-300 hover:scale-105"
          >
            {/* Blurred Background with All Covers */}
            <div
              className="absolute inset-0 bg-secondary-black transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-0"
              aria-hidden="true"
            />
            {collection.books.length > 0 && (
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 z-0 peer transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${collection.books[0]?.cover}), url(${collection.books[1]?.cover}), url(${collection.books[2]?.cover})`,
                  backgroundBlendMode: "overlay",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(100px)",
                }}
                aria-hidden="true"
              />
            )}
            <figure className="flex flex-col justify-center items-center gap-4 sm:gap-6 p-4 sm:p-6 relative z-10">
              {/* Collection Covers */}
              <div className="relative w-full h-[240px] sm:h-[260px] flex justify-center items-center">
                {collection.books.length > 0 ? (
                  <div className="grid grid-cols-3 gap-4 w-[80%] max-w-[300px]">
                    {collection.books.slice(0, 3).map((book, index) => (
                      <img
                        key={book.id}
                        src={book.cover}
                        alt={`${book.title} cover`}
                        className={`h-[120px] w-full object-cover rounded-lg transition-transform duration-300 group-hover:-translate-y-2 ${
                          index === 1 ? "z-10" : "z-0"
                        }`}
                        style={{
                          transform: `rotate(${(index - 1) * 5}deg)`,
                          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-4 w-[80%] max-w-[300px]">
                    {[...Array(3)].map((_, index) => (
                      <div
                        key={index}
                        className={`h-[120px] w-full bg-secondary-gray rounded-lg transition-transform duration-300 group-hover:-translate-y-2 ${
                          index === 1 ? "z-10" : "z-0"
                        }`}
                        style={{
                          transform: `rotate(${(index - 1) * 5}deg)`,
                          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              {/* Collection Info */}
              <figcaption className="flex flex-col justify-center items-center gap-2 sm:gap-3">
                <h4 className="text-base sm:text-lg text-primary-white font-semibold text-center line-clamp-1">
                  {collection.title}
                </h4>
                <span className="text-sm text-primary-gray">
                  {collection.bookCount} books
                </span>
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
}

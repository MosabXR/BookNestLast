import React from "react";
import ProfileImage from "/user_profile.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getMyProfile, getUserProfile } from "../services/userService";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { useParams } from "react-router-dom";

import { getCollections } from "../services/collectionService";

export default function Profile() {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getMyProfile(),
  });

  const {
    data: collections,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["collections"],
    queryFn: () => getCollections(localStorage.getItem("token")),
  });

  if (isLoading) return <div className="spinner"></div>;
  if (error) return <p>Error fetching collections</p>;

  return (
    <div className="flex flex-col gap-md py-md">
      {/* Profile Section (unchanged) */}
      <div className="flex flex-col items-center md:flex-row gap-4 md:items-end">
        <div className="w-64 md:w-64 aspect-square overflow-hidden rounded-lg bg-secondary-black">
          {user?.profile_pic ? (
            <img
              src={user?.profile_pic}
              alt={`${user?.username}'s profile image`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          ) : null}
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">{user?.username}</h2>
          <button
            type="button"
            className="btn btn-accent-v px-4 py-2 text-sm font-medium rounded-md"
            aria-label={`Like ${user?.username}'s profile`}
          >
            Follow
          </button>
        </div>
      </div>
      <h2 className="text-md sm:text-xl font-semibold">Bio</h2>
      <p className="text-base leading-relaxed">{user?.bio}</p>
      <h2
        key={collections[0]?.list_id}
        className="text-md sm:text-xl font-semibold"
      >
        My Books
        {/* {collections[0]?.name} */}
      </h2>
      <div key={collections[0]?.id}>
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
          {collections[0]?.books?.map((book) => (
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
    </div>
  );
}

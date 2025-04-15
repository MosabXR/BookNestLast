import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileImage from "/user_profile.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

export default function BookPage() {
  // Book data (static for now)
  const book = {
    id: 1,
    title: "The Agency for Scandal",
    author: "Laura Wood",
    cover:
      "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
    rating: 4.5,
    totalRatings: 50,
    releaseDate: "January 5th, 2023",
    language: "English",
    pages: 528,
    isbn: "9780702303241",
    description:
      "A gifted young girl, on a quest to find her father, leads her to an extended family of magical fighting booksellers who police the mythical Old World of England when it intrudes on the modern world. From the bestselling master of teen fantasy, Garth Nix. In a slightly alternate London in 1983, Susan Arkshaw is looking for her father, a man she has never met. Crime boss Frank Thringley might be able to help her, but Susan doesn’t get time to ask Frank any questions before he is turned to dust by the prick of a silver hatpin in the hands of the outrageously attractive Merlin. Merlin is a young left-handed bookseller (one of the fighting ones), who with the right-handed booksellers (the intellectual ones), are an extended family of magical beings who police the mythic and legendary Old World when it intrudes on the modern world, in addition to running several bookshops. Susan’s search for her father begins with her mother’s possibly misremembered or misspelt surnames, a reading room ticket, and a silver cigarette case engraved with something that might be a coat of arms. Merlin has a quest of his own, to find the Old World entity who used ordinary criminals to kill his mother. As he and his sister, the right-handed bookseller Vivien, tread in the path of a botched or covered-up police investigation from years past, they find this quest strangely overlaps with Susan’s. Merlin, Susan, and Vivien must find out, as the Old World erupts dangerously into the new.",
  };

  // State for reviews
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: { username: "Mosab", image: ProfileImage },
      rating: 4.5,
      text: "My journey has equipped me with solid skills in web development and I am passionate about continuous learning and growth. I thrive on solving complex problems and enjoy collaborating on innovative projects.",
      date: "November 4th, 2024",
      upvotes: 10,
      downvotes: 2,
    },
    {
      id: 2,
      user: { username: "Alice", image: ProfileImage },
      rating: 4.0,
      text: "A thrilling read with unexpected twists! I loved the magical elements and the historical setting.",
      date: "November 3rd, 2024",
      upvotes: 8,
      downvotes: 1,
    },
    {
      id: 3,
      user: { username: "Bob", image: ProfileImage },
      rating: 3.5,
      text: "Good book, but the pacing felt a bit slow in the middle. Still, the characters were fantastic!",
      date: "November 2nd, 2024",
      upvotes: 5,
      downvotes: 3,
    },
  ]);

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

  const [visibleReviews, setVisibleReviews] = useState(2);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReviewRating, setNewReviewRating] = useState(0);
  const [newReviewText, setNewReviewText] = useState("");

  // Sort reviews by upvotes
  const sortedReviews = [...reviews].sort((a, b) => b.upvotes - a.upvotes);

  const handleLoadMore = () => {
    setVisibleReviews((prev) => Math.min(prev + 2, sortedReviews.length));
  };

  const handleStarClick = (rating) => {
    setNewReviewRating(rating);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReviewRating === 0 || !newReviewText.trim()) return;

    const newReview = {
      id: reviews.length + 1,
      user: { username: "Mosab", image: ProfileImage },
      rating: newReviewRating,
      text: newReviewText,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      upvotes: 0,
      downvotes: 0,
    };

    setReviews([...reviews, newReview]);
    setShowReviewForm(false);
    setNewReviewRating(0);
    setNewReviewText("");
    console.log("New Review:", newReview);
  };

  const handleVote = (reviewId, type) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === reviewId
          ? {
              ...review,
              upvotes: type === "up" ? review.upvotes + 1 : review.upvotes,
              downvotes:
                type === "down" ? review.downvotes + 1 : review.downvotes,
            }
          : review
      )
    );
  };

  return (
    <div className="container py-8 flex flex-col gap-8">
      {/* Book Details Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Book Cover Card */}
        <div className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[300px] flex-shrink-0 mx-auto md:mx-0">
          <div className="group rounded-2xl shadow-md overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-lg z-10">
            {/* Blurred Background with Color Animation */}
            <div
              className="absolute inset-0 bg-secondary-black transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-0"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-50 z-0 transition-all duration-1000"
              style={{
                backgroundImage: `url(${book.cover})`,
                backgroundBlendMode: "overlay",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(50px)",
                animation: "colorShift 5s infinite alternate",
              }}
              aria-hidden="true"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-black/80 to-transparent z-10" />
            {/* Book Cover Image */}
            <img
              src={book.cover}
              alt={`${book.title} cover`}
              className="w-full h-[300px] sm:h-[360px] md:h-[400px] object-cover relative z-20"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-accent-v/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-30" />
          </div>
        </div>

        {/* Book Info */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-primary-white">
            {book.title}
          </h1>
          <p className="text-base sm:text-lg text-primary-gray">
            by <span className="text-primary-white">{book.author}</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-sm sm:text-base">
              {"★".repeat(Math.floor(book.rating))}
              {book.rating % 1 !== 0 && "☆"}
            </span>
            <span className="text-sm text-primary-gray">
              {book.rating}/5.0 ({book.totalRatings} ratings)
            </span>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button className="btn btn-accent-v px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md text-primary-white hover:bg-accent-v/80 transition-colors">
              Start Reading
            </button>
            <button className="btn btn-primary-v px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md text-primary-white hover:bg-secondary-gray/80 transition-colors">
              Read Later
            </button>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2 text-xs sm:text-sm text-primary-gray">
            <p>
              <span className="text-primary-white">Release Date:</span>{" "}
              {book.releaseDate}
            </p>
            <p>
              <span className="text-primary-white">Language:</span>{" "}
              {book.language}
            </p>
            <p>
              <span className="text-primary-white">Pages:</span> {book.pages}
            </p>
            <p>
              <span className="text-primary-white">ISBN:</span> {book.isbn}
            </p>
          </div>
          <h2 className="text-lg sm:text-xl font-semibold text-primary-white">
            Description
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-primary-white">
            {book.description}
          </p>
        </div>
      </div>

      {/* Review Section */}
      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <h2 className="text-lg sm:text-xl font-semibold text-primary-white">
            Reviews
          </h2>
          <button
            onClick={() => setShowReviewForm(true)}
            className="btn btn-accent-v px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md text-primary-white hover:bg-accent-v/80 transition-colors"
          >
            Write a Review
          </button>
        </div>

        {/* Review Form */}
        {showReviewForm && (
          <div className="rounded-2xl bg-secondary-black shadow-md p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
            <h3 className="text-base sm:text-lg font-semibold text-primary-white">
              Write Your Review
            </h3>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleStarClick(star)}
                  className="focus:outline-none text-sm sm:text-base"
                >
                  <span
                    className={
                      star <= newReviewRating
                        ? "text-yellow-400"
                        : "text-primary-gray"
                    }
                  >
                    ★
                  </span>
                </button>
              ))}
            </div>
            <textarea
              value={newReviewText}
              onChange={(e) => setNewReviewText(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-secondary-gray text-primary-white focus:outline-none focus:ring-2 focus:ring-accent-v resize-y text-sm sm:text-base"
              rows="4"
              placeholder="Write your review..."
            />
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button
                onClick={handleSubmitReview}
                className="btn btn-accent-v px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md text-primary-white hover:bg-accent-v/80 transition-colors"
              >
                Submit Review
              </button>
              <button
                onClick={() => setShowReviewForm(false)}
                className="btn bg-secondary-gray px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md text-primary-white hover:bg-secondary-gray/80 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Review Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {sortedReviews.slice(0, visibleReviews).map((review) => (
            <div
              key={review.id}
              className="group rounded-2xl shadow-md overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-lg z-10"
            >
              {/* Blurred Background */}
              <div
                className="absolute inset-0 bg-secondary-black transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-0"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-50 z-0 transition-all duration-1000"
                style={{
                  backgroundImage: `url(${review.user.image})`,
                  backgroundBlendMode: "overlay",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(50px)",
                  animation: "colorShift 5s infinite alternate",
                }}
                aria-hidden="true"
              />
              {/* Card Content */}
              <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 relative z-10">
                <div className="flex items-center gap-2 sm:gap-3">
                  <img
                    src={review.user.image}
                    alt={`${review.user.username} profile`}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-primary-white font-semibold">
                      @{review.user.username}
                    </p>
                    <span className="text-yellow-400 text-xs sm:text-sm">
                      {"★".repeat(Math.floor(review.rating))}
                      {review.rating % 1 !== 0 && "☆"}
                    </span>
                  </div>
                  <button className="btn btn-accent-v px-2 sm:px-3 py-1 text-xs font-medium rounded-md text-primary-white hover:bg-accent-v/80 transition-colors">
                    Follow
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-primary-white">
                  {review.text}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleVote(review.id, "up")}
                      className="flex items-center gap-1 text-primary-gray hover:text-accent-v transition-colors"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                      <span className="text-xs sm:text-sm">
                        {review.upvotes}
                      </span>
                    </button>
                    <button
                      onClick={() => handleVote(review.id, "down")}
                      className="flex items-center gap-1 text-primary-gray hover:text-accent-v transition-colors"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      <span className="text-xs sm:text-sm">
                        {review.downvotes}
                      </span>
                    </button>
                  </div>
                  <span className="text-xs text-primary-gray">
                    {review.date}
                  </span>
                </div>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-accent-v/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleReviews < sortedReviews.length && (
          <button
            onClick={handleLoadMore}
            className="btn btn-primary-v px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md text-primary-white hover:bg-accent-v/80 transition-colors self-center"
          >
            Load More Reviews
          </button>
        )}
      </div>
      <h2 className="text-md sm:text-xl font-semibold">Related Books</h2>
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
    </div>
  );
}

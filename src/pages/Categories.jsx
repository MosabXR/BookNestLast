import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  const collections = [
    {
      id: 1,
      title: "Fiction",
      description: "Immerse yourself in imaginative stories.",
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
      bookCount: 120,
    },
    {
      id: 2,
      title: "Non-Fiction",
      description: "Explore real-world insights and knowledge.",
      books: [
        {
          id: 4,
          title: "Sapiens",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 5,
          title: "Educated",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/cf9c878d81fcf26ceaa350cbf77aa1f5.jpg",
        },
        {
          id: 6,
          title: "Becoming",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/0be61269e4fc87209ac3e2a2ecab4abd.jpg",
        },
      ],
      bookCount: 85,
    },
    {
      id: 3,
      title: "Mystery",
      description: "Unravel secrets and solve puzzles.",
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
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/cf9c878d81fcf26ceaa350cbf77aa1f5.jpg",
        },
        {
          id: 9,
          title: "The Girl with the Dragon Tattoo",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/0be61269e4fc87209ac3e2a2ecab4abd.jpg",
        },
      ],
      bookCount: 65,
    },
    {
      id: 4,
      title: "Thriller",
      description: "Pulse-pounding suspense awaits.",
      books: [
        {
          id: 10,
          title: "The Silent Patient",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 11,
          title: "The Girl on the Train",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/cf9c878d81fcf26ceaa350cbf77aa1f5.jpg",
        },
        {
          id: 12,
          title: "Big Little Lies",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/0be61269e4fc87209ac3e2a2ecab4abd.jpg",
        },
      ],
      bookCount: 55,
    },
    {
      id: 5,
      title: "Romance",
      description: "Heartwarming tales of love and passion.",
      books: [
        {
          id: 13,
          title: "The Notebook",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 14,
          title: "Me Before You",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/cf9c878d81fcf26ceaa350cbf77aa1f5.jpg",
        },
        {
          id: 15,
          title: "Pride and Prejudice",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/0be61269e4fc87209ac3e2a2ecab4abd.jpg",
        },
      ],
      bookCount: 70,
    },
    {
      id: 6,
      title: "Science Fiction",
      description: "Journey to futuristic worlds.",
      books: [
        {
          id: 16,
          title: "Dune",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 17,
          title: "1984",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/cf9c878d81fcf26ceaa350cbf77aa1f5.jpg",
        },
        {
          id: 18,
          title: "Brave New World",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/0be61269e4fc87209ac3e2a2ecab4abd.jpg",
        },
      ],
      bookCount: 60,
    },
    {
      id: 7,
      title: "Fantasy",
      description: "Explore magical realms and epic quests.",
      books: [
        {
          id: 19,
          title: "Harry Potter",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 20,
          title: "The Lord of the Rings",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/cf9c878d81fcf26ceaa350cbf77aa1f5.jpg",
        },
        {
          id: 21,
          title: "A Game of Thrones",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/0be61269e4fc87209ac3e2a2ecab4abd.jpg",
        },
      ],
      bookCount: 80,
    },
    {
      id: 8,
      title: "Historical Fiction",
      description: "Step into the past with vivid stories.",
      books: [
        {
          id: 22,
          title: "All the Light We Cannot See",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 23,
          title: "The Nightingale",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/cf9c878d81fcf26ceaa350cbf77aa1f5.jpg",
        },
        {
          id: 24,
          title: "The Book Thief",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/0be61269e4fc87209ac3e2a2ecab4abd.jpg",
        },
      ],
      bookCount: 50,
    },
    {
      id: 9,
      title: "Biography",
      description: "Discover inspiring lives and stories.",
      books: [
        {
          id: 25,
          title: "Steve Jobs",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 26,
          title: "The Diary of a Young Girl",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/cf9c878d81fcf26ceaa350cbf77aa1f5.jpg",
        },
        {
          id: 27,
          title: "Long Walk to Freedom",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/0be61269e4fc87209ac3e2a2ecab4abd.jpg",
        },
      ],
      bookCount: 45,
    },
    {
      id: 10,
      title: "Self-Help",
      description: "Grow and thrive with practical advice.",
      books: [
        {
          id: 28,
          title: "Atomic Habits",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 29,
          title: "The Power of Now",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/cf9c878d81fcf26ceaa350cbf77aa1f5.jpg",
        },
        {
          id: 30,
          title: "Thinking, Fast and Slow",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/0be61269e4fc87209ac3e2a2ecab4abd.jpg",
        },
      ],
      bookCount: 40,
    },
    {
      id: 11,
      title: "Young Adult",
      description: "Captivating stories for young readers.",
      books: [
        {
          id: 31,
          title: "The Hunger Games",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 32,
          title: "Divergent",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/cf9c878d81fcf26ceaa350cbf77aa1f5.jpg",
        },
        {
          id: 33,
          title: "The Fault in Our Stars",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/0be61269e4fc87209ac3e2a2ecab4abd.jpg",
        },
      ],
      bookCount: 60,
    },
    {
      id: 12,
      title: "Children’s",
      description: "Fun and magical tales for kids.",
      books: [
        {
          id: 34,
          title: "Charlotte’s Web",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 35,
          title: "The Gruffalo",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/cf9c878d81fcf26ceaa350cbf77aa1f5.jpg",
        },
        {
          id: 36,
          title: "Matilda",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/0be61269e4fc87209ac3e2a2ecab4abd.jpg",
        },
      ],
      bookCount: 50,
    },
    {
      id: 13,
      title: "Horror",
      description: "Spine-chilling tales of fear.",
      books: [
        {
          id: 37,
          title: "Dracula",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 38,
          title: "The Shining",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/cf9c878d81fcf26ceaa350cbf77aa1f5.jpg",
        },
        {
          id: 39,
          title: "It",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/0be61269e4fc87209ac3e2a2ecab4abd.jpg",
        },
      ],
      bookCount: 35,
    },
    {
      id: 14,
      title: "Poetry",
      description: "Beautiful words that inspire.",
      books: [
        {
          id: 40,
          title: "The Sun and Her Flowers",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 41,
          title: "Leaves of Grass",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/cf9c878d81fcf26ceaa350cbf77aa1f5.jpg",
        },
        {
          id: 42,
          title: "Ariel",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/0be61269e4fc87209ac3e2a2ecab4abd.jpg",
        },
      ],
      bookCount: 30,
    },
    {
      id: 15,
      title: "Classics",
      description: "Timeless masterpieces of literature.",
      books: [
        {
          id: 43,
          title: "Jane Eyre",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/08/3862d6e1202f427c0be0ca9ec891be82.jpg",
        },
        {
          id: 44,
          title: "Moby-Dick",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/cf9c878d81fcf26ceaa350cbf77aa1f5.jpg",
        },
        {
          id: 45,
          title: "Wuthering Heights",
          cover:
            "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/0be61269e4fc87209ac3e2a2ecab4abd.jpg",
        },
      ],
      bookCount: 40,
    },
  ];

  return (
    <div className="container py-8 flex flex-col gap-8">
      <h2 className="text-md sm:text-xl font-semibold text-primary-white">
        Browse Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {collections.map((collection, index) => (
          <Link
            key={collection.id}
            to={`/collection/${collection.id}`}
            className="group rounded-2xl shadow-md overflow-hidden relative block transition-all duration-300 hover:scale-105 hover:shadow-lg z-10"
            style={{ transform: `rotate(${index % 2 === 0 ? 1 : -1}deg)` }}
          >
            <div
              className="absolute inset-0 bg-secondary-black transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-0"
              aria-hidden="true"
            />
            {collection.books.length > 0 && (
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-50 z-0 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${collection.books[0]?.cover}), url(${collection.books[1]?.cover}), url(${collection.books[2]?.cover})`,
                  backgroundBlendMode: "overlay",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(50px)",
                }}
                aria-hidden="true"
              />
            )}
            <figure className="flex flex-col justify-center items-center gap-4 sm:gap-6 p-4 sm:p-6 relative z-10">
              <div className="relative w-full h-[240px] sm:h-[260px] flex justify-center items-center">
                {collection.books.length > 0 ? (
                  <div className="grid grid-cols-3 gap-4 w-[80%] max-w-[300px] relative">
                    {collection.books.slice(0, 3).map((book, idx) => (
                      <img
                        key={book.id}
                        src={book.cover}
                        alt={`${book.title} cover`}
                        className={`h-[120px] w-full object-cover rounded-lg transition-transform duration-300 group-hover:-translate-y-2 ${
                          idx === 1 ? "z-10" : "z-0"
                        }`}
                        style={{
                          transform: `rotate(${(idx - 1) * 5}deg)`,
                          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                        }}
                      />
                    ))}
                    <div className="absolute inset-0 bg-accent-v/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-4 w-[80%] max-w-[300px]">
                    {[...Array(3)].map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-[120px] w-full bg-secondary-gray rounded-lg transition-transform duration-300 group-hover:-translate-y-2 ${
                          idx === 1 ? "z-10" : "z-0"
                        }`}
                        style={{
                          transform: `rotate(${(idx - 1) * 5}deg)`,
                          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              <figcaption className="flex flex-col justify-center items-center gap-2 sm:gap-3">
                <h4 className="text-lg sm:text-xl text-primary-white font-semibold text-center line-clamp-1">
                  {collection.title}
                </h4>
                <span className="text-sm text-primary-gray bg-accent-v/10 px-3 py-1 rounded-full">
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

import axios from "axios";

const url = "http://localhost:8000";

const getBooks = async (query) => {
  try {
    const response = await axios.get(
      `${url}/api/books/search/?q=${query}&page_size=50`
    );
    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

const getBook = async (id) => {
  try {
    const response = await axios.get(`${url}/api/books/books/${id}/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

const searchBooks = async (query) => {
  try {
    const response = await axios.get(
      `${url}/api/books/search/?q=${query}&page_size=100`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

const getReviews = async (id) => {
  try {
    const response = await axios.get(`${url}/api/books/books/${id}/reviews/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const createReview = async (data) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(`${url}/api/books/review/create/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

const createRating = async (data) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(`${url}/api/books/rating/create/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export {
  getBooks,
  getBook,
  searchBooks,
  getReviews,
  createReview,
  createRating,
};

import Axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: null,
      posts: null,
      hotels: null,
    },
    actions: {
      getDataUsers: (url) => {
        return Axios.get(url)
          .then((resp) => {
            setStore({ users: resp.data.data });
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getDataPosts: (url) => {
        return Axios.get(url)
          .then((resp) => {
            setStore({ posts: resp.data.data });
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getDataHotels: (url) => {
        return Axios.get(url)
          .then((resp) => {
            console.log(resp.data);
            setStore({ hotels: resp.data });
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
};

export default getState;

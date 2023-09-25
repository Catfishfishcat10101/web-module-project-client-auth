import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const nav = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          await axios.post(
            "http://localhost:9000/api/logout",
            {},
            { headers: { authorization: token } }
          );

          localStorage.removeItem("token");
        }

        nav("/login");
      } catch (err) {
        console.error(err);
        // Handle error properly, e.g. show an error message to the user
      }
    };

    logout();
  }, []);

  return <></>;
};

export default Logout;
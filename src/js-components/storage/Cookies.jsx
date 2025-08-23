import React, { useState } from "react";

const Cookies = () => {
  const [cookieName, setCookieName] = useState("");
  const [cookieValue, setCookieValue] = useState("");
  const [cookies, setCookies] = useState(document.cookie.split("; "));

  // Set Cookie
  const setCookie = () => {
    document.cookie = `${cookieName}=${cookieValue}; path=/; max-age=3600`; // expires in 1 hour
    refreshCookies();
  };

  // Get Cookie by name
  const getCookie = (name) => {
    let match = document.cookie
      .split("; ")
      .find((c) => c.startsWith(name + "="));
    return match ? match.split("=")[1] : null;
  };

  // Delete Cookie
  const deleteCookie = (name) => {
    document.cookie = `${name}=; path=/; max-age=0`;
    refreshCookies();
  };

  // Refresh cookies state
  const refreshCookies = () => {
    setCookies(document.cookie.split("; ").filter(Boolean));
  };

  return (
    <div
      style={{ padding: "20px", border: "1px solid gray", borderRadius: "8px" }}
    >
      <h2>Cookies Manager</h2>

      <input
        type="text"
        placeholder="Cookie Name"
        value={cookieName}
        onChange={(e) => setCookieName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cookie Value"
        value={cookieValue}
        onChange={(e) => setCookieValue(e.target.value)}
      />
      <button onClick={setCookie}>Set Cookie</button>

      <h3>Stored Cookies:</h3>
      <ul>
        {cookies.map((c, i) => (
          <li key={i}>
            {c}{" "}
            <button onClick={() => deleteCookie(c.split("=")[0])}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {cookieName && (
        <p>
          Value of <b>{cookieName}</b>: {getCookie(cookieName) || "Not Found"}
        </p>
      )}
    </div>
  );
};

export default Cookies;

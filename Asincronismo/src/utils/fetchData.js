let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url_data) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_data, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error1", url_data));
      }
    };
    xhttp.send();
  });
};

module.exports = fetchData;

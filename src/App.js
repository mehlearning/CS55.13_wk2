import React, { useEffect, useState } from "react";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [hex, setHex] = useState("#fff");
  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    fetch(
      "https://gist.githubusercontent.com/carmandomx/3d7ac5f15af87a587e1d25f5ba96de61/raw/e2d848b87c730a580077de221666343c15b1a243/gistfile1.txt"  
    )
      .then((res) => res.json())
      .then((data) => {
        let dataQ = data.quotes;
        let ranNum = Math.floor(Math.random() * dataQ.length);
        let ranQ = dataQ[ranNum];
        setQuote(ranQ.quote);
        setAuthor(ranQ.author);
        setHex("#" + Math.floor(Math.random() * 16777215).toString(16));
      });
  };

  const NextQuote = () => {
    getQuotes();
  };
  return (
    <>
      <div className="container" style={{ backgroundColor: `${hex}` }}>
        <div className="row" id="random">
          <h1 className="h1 col-12 text-center text-white">
            API Call to a remote gist.
          </h1>
          <div className="col-md-3 col-sm-2"></div>
          <div className="col-md-6 col-sm-8" id="quote">
            <div className="quote" style={{ color: `${hex}` }}>
              {quote}
            </div>
            <div className="author text-end py-3" style={{ color: `${hex}` }}>
              ---{author}
            </div>
            <div className="text-center my-3">
              <button id="btn" className="py-2 px-3" onClick={NextQuote}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

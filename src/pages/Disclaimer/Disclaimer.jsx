import { useNavigate } from "react-router-dom";

const Disclaimer = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="container">
        <div className="disclaimer-box">
          <h1 
          onClick={() => navigate("/login")}
          className="disclaimer-exit">X</h1>
          <h1 className="disclaimer-header">Disclaimer</h1>
          <h3 className="disclaimer-para">
            This site is NOT Netflix. This a simple 3 paged clone of Netflix for
            demo purposes only. This has the ability to make fake accounts. If you
            would like to try, DO NOT use your personal information. If you are not
            comfortable making a dummy account, you can simply sign in with: <br /> <br />
            Email: admin@gmail.com <br />
            Password: password <br />
            <br />
            *** This parody site has no affiliation with Netflix or any of its
            parties. Please practice safety when viewing unknown websites ***
            <br />
            That's about it.
            <br />
            Enjoy
          </h3>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;

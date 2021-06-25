import React, { useEffect, useState } from "react";
import "./Banner.css";

function Banner() {
  const [team, setTeam] = useState(false);

  return (
    <header className="banner">
      {team ? (
        <div className="teamsContainer">
          <div>
             <h1 className="teamText">
              Peshawar Zalmi <span>(Select)</span>
            </h1>
            <h1 className="teamText">
              Quetta Gladiators <span>(Select)</span>
            </h1>
            <h1 className="teamText">
              Karachi Kings <span>(Select)</span>
            </h1>
            <h1 className="teamText">
              Multan Sultans <span>(Select)</span>
            </h1>
            <h1 className="teamText">
              Lahore Qalandars <span>(Select)</span>
            </h1>
            <h1 className="teamText">
              Islamabad United <span>(Select)</span>
            </h1>

          </div>
          <div>
                        <h1 className="teamText">
              Peshawar Zalmi <span>(Select)</span>
            </h1>
            <h1 className="teamText">
              Quetta Gladiators <span>(Select)</span>
            </h1>
            <h1 className="teamText">
              Karachi Kings <span>(Select)</span>
            </h1>
            <h1 className="teamText">
              Multan Sultans <span>(Select)</span>
            </h1>
            <h1 className="teamText">
              Lahore Qalandars <span>(Select)</span>
            </h1>
            <h1 className="teamText">
              Islamabad United <span>(Select)</span>
            </h1>

          </div>
        </div>
      ) : (
        <div className="textContainer">
          <h1>PSL 2022</h1>
          <button className="searchBtn" onClick={() => setTeam(true)}>
            Select Team
          </button>
        </div>
      )}

      
    </header>
  );
}

export default Banner;

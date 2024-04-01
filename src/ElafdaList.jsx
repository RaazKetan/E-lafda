import "./ElafdaList.css";
import elafdaData from "./LafdaList";




const ElafdaList = () => {

  elafdaData.sort((a, b) => new Date(b.date) - new Date(a.date));
  const playMusic = (audioUrl) => {
    const music = document.getElementById("musicPlayer");
    music.src = audioUrl; // Use the audioUrl parameter to set the source
    music.play();
   };

  return (
    <div>
      <ul className="elafda-list">
        {elafdaData.map((elafda, index) => (
          <li
            key={index}
            className="elafda-list-item"
            onMouseEnter={() => playMusic(elafda.audio_url)}
          >
            <div className="combatants">
              <div className="combatant">
                {elafda.original_combatants[0].image_url && (
                  <img
                    src={elafda.original_combatants[0].image_url}
                    alt={elafda.original_combatants[0].name}
                  />
                )}
                <p>{elafda.original_combatants[0].name}</p>
                <p>Location: {elafda.original_combatants[0].location}</p>
              </div>
              <h2>VS</h2>
              <div className="combatant">
                <img
                  src={elafda.original_combatants[1].image_url}
                  alt={elafda.original_combatants[1].name}
                />
                <p>{elafda.original_combatants[1].name}</p>
                <p>Location: {elafda.original_combatants[1].location}</p>
              </div>
            </div>
            <div className="details">
                  <h4>Scripted: {elafda.scripted? "Yes": "No"}</h4>
              <p>Date: {elafda.date}</p>
              <p>Bhaichara Established {elafda.bhaichara_established ? "Yes" : "No"}</p>
              <p>
                36-Biradari Involved:{" "}
                {elafda["36-biradari_involved"] ? "Yes" : "No"}
              </p>
              <p>Police Involved: {elafda.police_involved ? "Yes" : "No"}</p>
            </div>
            <div className="people-involved">
              <h3>People Involved:</h3>
              {elafda.people_involved.map((person, i) => (
                <div key={i} className="person-involved">
                  <p>{person}</p>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <audio id="musicPlayer" style={{ display: "none" }}></audio>
    </div>
  );
};

export default ElafdaList;

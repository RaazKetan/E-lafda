// import React from 'react';

const ElafdaList = () => {
 // Hardcoded data
 const elafdaData = [
    {
      id: 1,
      original_combatants: [
        {
          name: "Elvish Yadav",
          image_url: "https://example.com/images/combatant1.jpg",
          location: "Location 1"
        },
        {
          name: "Maxtern",
          image_url: "https://example.com/images/combatant2.jpg",
          location: "Location 2"
        }
      ],
      people_involved: ["Person 3","Peron 4"],
      "36-biradari_involved": true,
      police_involved: false,
      date: "2024-03-31",
      elafda_resolved: true
    },
    {
      id: 2,
      original_combatants: [
        {
          name: "Rajat Dalal",
          role: "Role 3",
          image_url: "https://example.com/images/combatant3.jpg"
        },
        {
          name: "Rajveer Singh Shisodia",
          role: "Role 4",
          image_url: "https://example.com/images/combatant4.jpg"
        }
      ],
      people_involved: ["Person 3","Peron 4"],
      "36-biradari_involved": false,
      police_involved: true,
      date: "2024-04-01",
      elafda_resolved: false
    }
    // Add more e-lafda entries as needed
 ];
 elafdaData.sort((a, b) => new Date(b.date) - new Date(a.date));
 const playMusic = (musicUrl) => {
    const music = document.getElementById('musicPlayer');
    music.src = musicUrl;
    music.play();
 };

 return (
    <div>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {elafdaData.map((elafda, index) => (
        <li key={index} style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px', borderRadius: '10px' }} onMouseEnter={() => playMusic(elafda.musicUrl)}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
            <div style={{ textAlign: 'center', margin: '0 10px' }}>
              <img src={elafda.original_combatants[0].image_url} alt={elafda.original_combatants[0].name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
              <p>{elafda.original_combatants[0].name}</p>
              <p>Location: {elafda.original_combatants[0].location}</p>
            </div>
            <h2 style={{ margin: '0 10px' }}>VS</h2>
            <div style={{ textAlign: 'center', margin: '0 10px' }}>
              <img src={elafda.original_combatants[1].image_url} alt={elafda.original_combatants[1].name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
              <p>{elafda.original_combatants[1].name}</p>
              <p>Location: {elafda.original_combatants[1].location}</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <p>Date: {elafda.date}</p>
            <p>Resolved: {elafda.elafda_resolved ? 'Yes' : 'No'}</p>
            <p>36-Biradari Involved: {elafda['36-biradari_involved'] ? 'Yes' : 'No'}</p>
            <p>Police Involved: {elafda.police_involved ? 'Yes' : 'No'}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <h3>People Involved:</h3>
            {elafda.people_involved.map((person, i) => (
              <div key={i} style={{ border: '1px solid #ccc', padding: '5px 10px', margin: '5px', borderRadius: '5px' }}>
               <p>{person}</p>
              </div>
            ))}
          </div>
        </li>
      ))}
    </ul>
    <audio id="musicPlayer" style={{ display: 'none' }}></audio>
  </div>
      
 );
};

export default ElafdaList;

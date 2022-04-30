import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal_entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://mott.pe/noticias/wp-content/uploads/2018/05/gracias-a-las-imagenes-en-formato-png-no-se-pierde-calidad.png)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo día</p>
        <p className="journal__entry-content">lorem ipsum</p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

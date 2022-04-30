import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NotePage = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes_content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What happened today"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img src="https://i.pinimg.com/originals/db/2d/ef/db2defee28ef835f5d348264eb891eb6.jpg" 
          alt="image"
          />
        </div>
      </div>
    </div>
  );
};

import React from "react";

const Form = () => {
  return (
    <form className="form">
      <div className="form__group">
        <label className="form__label" htmlFor="name">
          Name
        </label>
        <input
          className="form__input"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form__input"
          id="message"
          name="message"
          placeholder="Message"
        ></textarea>
      </div>
    </form>
  );
};

export default Form;

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { EDIT_NOMBER } from "./person/graphql-mutations";

export const PhoneForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [changeNumber] = useMutation(EDIT_NOMBER);

  const handleSubmit = (e) => {
    e.preventDefault();

    changeNumber({ variables: { name, phone } });

    setName("");
    setPhone("");
  };

  return (
    <>
      <div>
        <h2>Edit person</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
          <input
            placeholder="Phone"
            value={phone}
            onChange={(evt) => setPhone(evt.target.value)}
          />
          <button>Edit Person</button>
        </form>
      </div>
    </>
  );
};

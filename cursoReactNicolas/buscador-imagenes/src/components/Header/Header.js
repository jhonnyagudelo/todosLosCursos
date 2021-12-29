import { useState } from "react";
import { StyledHeader } from "./styles";

import { Formik, Form, Field } from "formik";
const Header = () => {
  const [photos, setPhotos] = useState([]);
  const open = (url) => window.open(url);
  console.log({ photos });
  return (
    <>
      <StyledHeader>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            //llamar a la api de unplash
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
              {
                headers: {
                  Authorization:
                    "Client-ID ZGXX03bV92cUExhkq_4tstX318q0RQBEmKScRmqoUiI",
                },
              }
            );
            const data = await response.json();
            setPhotos(data.results);
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </StyledHeader>
      <section>
        <div>
          {photos.map((photo) => (
            <article key={photo.id} onClick={() => open(photo.links.html)}>
              <img src={photo.urls.regular} />
              <p>{[photo.description, photo.alt_description].join("-")}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
export { Header };

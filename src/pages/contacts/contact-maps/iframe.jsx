import React from "react";
import Iframe from "react-iframe";

export const IframeComponent = () => {
  return (
    <div>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.4637220001!2d-74.12512223164674!3d40.75895662186991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2z0JzQsNC90YXRjdGC0YLQtdC9LCDQndGM0Y4t0JnQvtGA0LosINCh0KjQkA!5e0!3m2!1sru!2s!4v1706806167256!5m2!1sru!2s"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

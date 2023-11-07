import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { loadReCaptcha } from "react-top-recaptcha-v3";
import { ReCaptcha } from "react-top-recaptcha-v3";
import React, { Component } from "react";

import App from "./App";
const rootElement = document.getElementById("root");

loadReCaptcha({
  key: "6LclbkAnAAAAAMjtcayPNka91AQ6VzPYfnTRdRcn",
  id: "testCaptcha"
})
  .then((id) => {
    console.log("ReCaptcha loaded", id);
    console.log(window.location.hostname);
  })
  .catch((e, id) => {
    console.error("Error when load ReCaptcha", id, e);
  });

class ExampleComponent extends Component {
  verifyCallback = (recaptchaToken) => {
    console.log("verifying callback");
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token");
  };

  updateToken = () => {
    // you will get a new token in verifyCallback
    this.recaptcha.execute();
  };
  render() {
    return (
      <div>
        <ReCaptcha
          ref={(ref) => (this.recaptcha = ref)}
          sitekey="6LclbkAnAAAAAMjtcayPNka91AQ6VzPYfnTRdRcn"
          action="page_visit"
          verifyCallback={this.verifyCallback}
        />

        <h2>Google ReCaptcha Quick Test Module</h2>

        <code>
          1. Add <strong>your site key</strong> in the ReCaptcha component, or
          directly to the code above. <br />
          2. Check the <strong>console</strong> to see the token.
        </code>
      </div>
    );
  }
}

export default ExampleComponent;

ReactDOM.render(
  <StrictMode>
    <ExampleComponent />
  </StrictMode>,
  rootElement
);

import * as Consts from "../resources/Consts";
import { Redirect } from "react-router-dom";
import { render } from "@testing-library/react";

/* function redirect() {
  let history = useHistory();
} */

class AuthService {
  createBasicAuthToken(email, password) {
    return "Basic " + window.btoa(email + ":" + password);
  }

  async registerSuccessfullLogin(email, password) {
    sessionStorage.setItem(
      "authToken",
      this.createBasicAuthToken(email, password)
    );

    const headers = {
      Authorization: sessionStorage.getItem("authToken"),
    };

    fetch(`${Consts.API_URL}/session`, { headers })
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("userId", data.userId);
        sessionStorage.setItem("userType", data.userType);
      });
  }

  async authorizeUser(email, password) {
    let status;
    const headers = {
      Authorization: this.createBasicAuthToken(email, password),
    };

    await fetch(`${Consts.API_URL}/authorize`, { headers }).then((data) => {
      status = data.status;
      if (data.status == 200) {
        this.registerSuccessfullLogin(email, password);
      } else if (data.status == 401) {
        window.alert("Bad credentials");
        sessionStorage.setItem("userId", null);
        sessionStorage.setItem("userType", null);
        sessionStorage.setItem("authToken", null);
      }
    });
    return status;
  }
}

export default new AuthService();

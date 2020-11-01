import * as Consts from "../resources/Consts";

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
        sessionStorage.setItem("successfulLogin", true);
      });
  }

  async authorizeUser(email, password) {
    const headers = {
      Authorization: this.createBasicAuthToken(email, password),
    };

    fetch(`${Consts.API_URL}/authorize`, { headers }).then((data) => {
      if (data.status == 200) {
        this.registerSuccessfullLogin(email, password);
      }
      if (data.status == 401) {
        window.alert("Bad credentials");
        sessionStorage.setItem("userId", null);
        sessionStorage.setItem("userType", null);
        sessionStorage.setItem("authToken", null);
        sessionStorage.setItem("successfulLogin", false);
      }
    });
    return true;
  }
}

export default new AuthService();

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

  async unauthorizeUser() {
    sessionStorage.setItem("userId", null);
    sessionStorage.setItem("userType", null);
    sessionStorage.setItem("authToken", null);
  }
}

export default new AuthService();

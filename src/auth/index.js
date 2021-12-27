import Cookies from "js-cookie";

export default function auth() {
  const token = Cookies.get("token");
  if (token === "ok") {
    return true;
  }

  return false;
}

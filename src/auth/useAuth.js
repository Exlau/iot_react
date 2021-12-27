import {useSelector} from "react-redux";

export default function useAuth() {
  return useSelector((state) => {
    return state.authReducer.token;
  });
}

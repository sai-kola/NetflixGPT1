import { signOut } from "firebase/auth";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
   const unSubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    //UnSubscribe when component unmounts
    return ()=>unSubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <h1 className="font-bold text-white m-2 p-2">{user?.displayName}</h1>
          <img className="w-12 h-12 m-2" alt="usericon" src={USER_ICON} />
          <button onClick={handleSignOut} className="font-bold text-white cursor-pointer ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
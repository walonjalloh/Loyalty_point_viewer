import {  createContext,useState } from "react";
import { Auth, ContextProp, AuthContextType, UserAuth, BrandAuth } from "../utils/types/UsedTypes";
import axios from "axios";
import { toast } from "react-toastify";
import { BrandSignIn, UserSignIn, BrandSignup, UserSignup} from "../utils/url/url";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}:ContextProp) => {
  //both user  and brand sign in
  const [type, setType] = useState({ user: false, brand: false });
  const [fullname, setFullname] = useState<string>("")
  const [username, setUsername] = useState<string>("");
  const [address,setAddress] = useState<string>("");
  const [age, setAge] = useState<number | undefined>()
  const [password, setPassword] = useState<string>("");
  const [brandname, setBrandName] = useState<string>("");
  const [brandpassword, setBrandPassword] = useState<string>("");


  //this is the authentication and authorization path
  const [userAuth, setUserAuth] = useState<UserAuth[]>([])
  const [brandAuth, setBrandAuth] = useState<BrandAuth[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  //navigation part
  const navigate = useNavigate()

  //the protected routes tools
  const [userLogin, setUserLogin] = useState<boolean>(false);
  const [brandLogin, setBrandLogin] = useState<boolean>(false)

  

  const handleUser = (): void => {
    setType({ user: true, brand: false });
  };

  const handleBrand = (): void => {
    setType({ user: false, brand: true });
  };

  const handleUserLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    try {
      e.preventDefault();
      const newUser: Auth = {
        username,
        password,
      };
      const response = await axios.post(UserSignIn, newUser);
      console.log(response?.data?.token)
      const user:UserAuth = {
        fullname:response.data.user.fullname,
        username:response.data.user.username,
        age:response.data.user.age,
        address:response.data.user.address,
        token:response.data.token,
        points:response.data.user.points
      }
      setIsAuthenticated(!isAuthenticated)
      setType({user:true,brand:false})
      setUserAuth(userAuth.concat(user))
      toast("User login successful");
      setUsername("");
      setPassword("");
      setUserLogin(!userLogin)
      navigate('/')
    } catch (error) {
      console.log(`Error occurred: ${error}`);
      toast("User login failed");
      setUsername("");
      setPassword("");
    }
  };
  console.log(userAuth)

  const handleBrandLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    try {
      e.preventDefault();
      const newBrand: Auth = {
        brandname,
        brandpassword,
      };
      const response = await axios.post(BrandSignIn, newBrand);
      console.log(response?.data?.token)
      const brand:BrandAuth = {
        brandname:response.data.brand.brandname,
        brandId:response.data.brand._id,
        token:response.data.token
      }
      setBrandAuth(brandAuth.concat(brand))
      setIsAuthenticated(!isAuthenticated)
      setType({user:false,brand:true})
      toast("Brand login successful");
      setBrandName("");
      setBrandPassword("");
      setBrandLogin(!brandLogin)
      navigate('/')
      console.log(brandAuth)
    } catch (error) {
      console.log(`Error occurred: ${error}`);
      toast("Brand login failed");
      setBrandName("");
      setBrandPassword("");
    }
  };


  //user and brand sign up

  const handleBrandSignUp = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const data: Auth = {
        brandname,
        brandpassword,
      };

      await axios.post(BrandSignup, data);
      console.log("Brand signup successful");
      setBrandPassword("");
      setBrandName("");
      toast("Brand SignUp Sucessfull");
    } catch (error) {
      console.error("Error signing up brand:", error);
      setBrandName("");
      setBrandPassword("");
      toast('Brand SignUp failed');
    }
  };

  const handleUserSignUp = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const data: Auth = {
        fullname,
        username,
        age,
        address,
        password,
      };

      await axios.post(UserSignup, data);
      console.log("User signup successful");
      setPassword("");
      setFullname("");
      setUsername("");
      setAge(0);
      setAddress("")
      toast("User SignUp sucessfull");
    } catch (error) {
      console.error("Error signing up user:", error);
      setFullname("");
      setPassword("");
      setUsername("");
      setAge(0);
      setAddress("")
      toast("User Signup failed");
    }
  };



  return (
    <AuthContext.Provider value={{
        handleUserLogin,
        handleBrandLogin,
        handleUserSignUp,
        handleBrandSignUp,
        handleUser,
        handleBrand,
        type, 
        username,
        password, 
        brandname, 
        brandpassword, 
        fullname,
        setUsername,
        setPassword,
        setBrandName,
        setBrandPassword,
        setFullname, 
        setAddress,
        setAge,
        userAuth,
        brandAuth,
        isAuthenticated,
        userLogin,
        brandLogin
      }}>
        {children}
      </AuthContext.Provider>
  )
};

export default AuthContext

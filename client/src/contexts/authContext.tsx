import {  createContext, useEffect, useState } from "react";
import { Auth, ContextProp, AuthContextType,User } from "../utils/types/UsedTypes";
import axios from "axios";
import { toast } from "react-toastify";
import { BrandSignIn, UserSignIn, BrandSignup, UserSignup,getOneUser } from "../utils/url/url";

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
  const [user, setUser] = useState<User[]>([])

  //getting the details of the user that signin's 
  useEffect(()=> {
    const getUser = async():Promise<void> => {
        try{
            const response =  await axios.get(getOneUser)
            console.log(response.data)
            setUser(user.concat(response.data))
        }catch(error){
            console.log(`error occurred ${error}`)
        } 
    }
    getUser()
  },[])

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
      console.log(response.data)
      toast("User login successful");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(`Error occurred: ${error}`);
      toast("User login failed");
      setUsername("");
      setPassword("");
    }
  };

  const handleBrandLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    try {
      e.preventDefault();
      const newBrand: Auth = {
        brandname,
        brandpassword,
      };
      await axios.post(BrandSignIn, newBrand);
      toast("Brand login successful");
      setBrandName("");
      setBrandPassword("");
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
        user
      }}>
        {children}
      </AuthContext.Provider>
  )
};

export default AuthContext

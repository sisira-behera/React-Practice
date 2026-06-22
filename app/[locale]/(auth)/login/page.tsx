
import AuthNavbar from "@/app/components/layout/header/auth-navbar";
import Login from "@/app/components/auth/login";

export interface UserData {
  username: string, 
  token: string 
}

export default function LoginPage() {

  return (
    <>
      <AuthNavbar />
      <Login />
    </>
  );
}

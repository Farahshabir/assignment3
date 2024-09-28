import Image from "next/image";
import pic from "../app/images/cover.png";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Center from "@/components/center";
import { SocialIcon } from 'react-social-icons'

export default function Home() {
  return (
    <div>
      <Header/>
      <Center/>
      <Footer/>
    </div>
  );
}

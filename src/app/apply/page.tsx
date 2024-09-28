import Header from "@/components/header";
import Link from "next/link";

export default function Apply (){
return(
  <div>
    <Header/>
    <div className="">
      <form action="#">
          <h1>Student Course Registration Form</h1>
          <p>Already applied? <a href=""></a>Get Admit Card</p>
          <label>Full Name *</label>
          <input type="text" name="name" placeholder="Full Name"/> <br />
          <label>Father's Full Name *</label>
          <input type="text" name="fname" placeholder="Father's Full Name"/> <br />
          <label>Email *</label>
          <input type="email" name="email" placeholder="Email" />
          </form>
    </div>
  </div>
)

}
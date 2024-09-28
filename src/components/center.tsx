import Link from "next/link"
import Image from "next/image";
import cover from "../app/images/cover.png"
export default function Center(){
    return(
        <div className="containerFirst">
           <div className="leftSide">
            <h1 className="text-5xl font-bold text-sky-700">Governor Sindh</h1>
            <h1 className="text-4xl text-sky-700">Kamran Khan Tessori </h1>
            <h1 className="text-3xl text-sky-400 font-bold"> Certified Cloud
                <br />
            Applied Generative AI
            <br />
            Engineer (GenEng)
            </h1>
            <p className="text-xl font-bold text-sky-700">Earn up to $5,000 / month
            Now admissions are open in
            Hyderabad</p>
           </div>
           <div className="flex justify-between">
                <Image 
                src={cover}
                alt="pic"
                className="w-[900px] h-[600px]"
                />
        </div>
        </div>
    )}
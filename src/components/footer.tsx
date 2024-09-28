import { SocialIcon } from "react-social-icons";

export default function Footer(){
    return (
        <div className="footer">
            <div className="footerOne">
                    <h1 className="text-xl font-bold leading-7">Core courses</h1>
                    <div className="text-base leading-6 " >
                    <a href="#">Programming Fundamentals</a>
                    <br />
                    <a href="#">Web2 Using NextJS</a>
                    <br />
                    <a href="#">Earn as You Learn</a>
                    </div>
            </div>
            <div className="footerTwo">
                    <h1 className="text-xl font-bold leading-7">Advanced courses</h1>
                    <div className="text-base leading-6">
                    <a href="#">Web 3 Metaverse</a>
                    <br />
                    <a href="#">Cloud-Native Computing</a>
                    <br />
                    <a href="#">Artificial Intelligence (AI) and Deep Learning</a> 
                    <br />
                    <a href="#">Ambient Computing and IoT</a>
                    <br />
                    <a href="#">Genomics and Bioinformatics</a>
                    <br />
                    <a href="#">Network Programmability and Automation</a>
                    </div>
            </div>
            <div className="">
                    <h1 className="text-xl font-bold leading-7">Social Links</h1>
                    <div className="flex gap-3 size-min">
                    <SocialIcon url="www.facebook.com"></SocialIcon>
                    <SocialIcon url="www.youtube.com"></SocialIcon>
                    <SocialIcon url="www.twitter.com"></SocialIcon>
                    <SocialIcon url="www.instagram.com"></SocialIcon>
                    <SocialIcon url="www.tiktok.com"></SocialIcon> <br/><br/>
                    </div>
                    <a href="#">education@governorsindh.com</a>
            </div>
        </div>
    )
}
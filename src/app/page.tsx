import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="hero-section">
      <div className="container">
        <div className="main">
          <div className="text-container">
         <h1 className="main-text">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
        <p className="main-para">
          An example of intricate workmanship and detail, elegant necklaces
           and long and short chains form a part of our desirable collection.
           </p>
           <button className="resume">Explore Now</button>
        </div>
        <div>
          <div>
            <Image src="/girl.jpg" width={500} height={647}  alt="person"></Image>
          </div>
        </div></div>
        
      </div>
    </div>
    </>
  );
}

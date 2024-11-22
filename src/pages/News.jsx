import FooterAllPage from "../components/FooterAllPage";
import Line from "../components/Line";
import Navbar from "../components/Navbar";

const News = () => {
  return (
    <main className="bg-white text-primary">
      <Navbar theme="bg-white text-primary" />

      <div className="container py-20">
        <div className="flex flex-col gap-16">
          <div>
            <h2 className="uppercase font-extrabold text-[2rem] tracking-tight">
              news
            </h2>
          </div>
          <div>
            <Line />
            <div>
              <div className="pt-7 pb-5 px-2 flex flex-col gap-3 border-primary border-b-[1px]">
                <div className="flex text-[10px] justify-between items-center">
                  <p>Fri - August 23, 2024</p>
                  <p>3</p>
                </div>
                <h6 className="font-medium text-base leading-7">
                  Dreamcatcher 10th Mini Album [VirtuouS] POCAALBUM 예약판매
                  오픈 안내
                </h6>
              </div>
              <div className="pt-7 pb-5 px-2 flex flex-col gap-3 border-primary border-b-[1px]">
                <div className="flex text-[10px] justify-between items-center">
                  <p>Fri - August 23, 2024</p>
                  <p>2</p>
                </div>
                <h6 className="font-medium text-base leading-7">
                  [Dreamcatcher(드림캐쳐) 10th Mini Album [VirtuouS] 앨범
                  예약판매 오픈 안내]
                </h6>
              </div>
              <div className="pt-7 pb-5 px-2 flex flex-col gap-3 border-primary border-b-[1px]">
                <div className="flex text-[10px] justify-between items-center">
                  <p>Fri - August 23, 2024</p>
                  <p>1</p>
                </div>
                <h6 className="font-medium text-base leading-7">
                  [Dreamcatcher 2nd Official Fanclub Fanmeeting [REASON Boutique
                  : from InSomnia] 온라인 티켓 예매 안내]
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterAllPage />
    </main>
  );
};

export default News;

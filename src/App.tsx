import "./index.css";
import imageProductDesktop from "./images/image-product-desktop.jpg";
import imagePrice from "./images/price.png";

export default function App() {
  return (
    <div className="bg-[#F2EAE2] h-screen w-screen md:pt-[162px] md:px-[420px] md:pb-[188px] py-[28px] px-[16px] ">
      <div className="flex w-screen justify-start items-start md:flex-row flex-col">
        <img
          className="ImageProduct md:w-[300px] md:h-[450px] object-cover h-[270px] w-[343.7px] rounded-xl"
          src={imageProductDesktop}
          alt="Product"
        />
        <div className="bg-white flex md:h-[450px] md:w-[300px] w-[343px] h-[371px]  justify-start items-start flex-col gap-[20px] pl-[32px] px-[24px] md:pb-[0px] pb-[24px]">
          <div className="h-[15px] w-[92px] text-[#6C7289] text-base flex justify-start items-start whitespace-nowrap pt-[32px]">
            P E R F U M E
          </div>
          <div className="md:textGabrielleDesk textGabrielleMobile pt-[20px] pr-[2px]">
            Gabrielle Essence Eau De Parfum
          </div>

          <div className="text-[#6C7289]  w-[280px] h-[92px]">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </div>
          <div className="flex flex-row gap-[19px] line-through">
            <img className="imagePrice " src={imagePrice} alt="Price" />
            <div className="flex text-[#6C7289]">$169.99</div>
          </div>
          <div className="bg-[#1A4032] flex justify-center items-center md:w-[236px] w-[295px] h-[48px] rounded-[14px] md:pb-[16px] pt-[10px] md:pt-0">
            <div className="flex justify-center items-center">
              {/* <IconCart /> */}
              <div className=" text-white w-[236px] h-[48px]  py-[15px] px[62px] m-auto flex justify-center items-center md:pb-[0px] pb-[24px]">
                Add to cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

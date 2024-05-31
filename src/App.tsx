import "./index.css";
import imageProductDesktop from "./images/image-product-desktop.jpg";
import cart from "./assets/icon-cart.svg";

export default function App() {
  return (
    <div className="bg-[#F2EAE2] min-h-screen w-screen flex justify-center items-center md:px-[420px] md:pb-[188px] px-[16px]  pb-[28px] pt-[28px] md:pt-28">
      <div className="bg-white md:h-[480px] md:w-[600px] rounded-2xl flex md:flex-row flex-col md:pb-0 pb-[24px] ">
        <div className="flex justify-start items-start md:pt-0">
          <img
            src={imageProductDesktop}
            alt="product"
            className="ImageProduct md:w-[300px] md:h-[480px] object-cover h-[270px] w-[343.7px] rounded-xl"
          />
        </div>
        <div className="flex justify-start pt-[32px] pl-[31.5px] flex-col gap-[20px]">
          <div className=" text-[#6C7289] flex items-start whitespace-nowrap font-sans text-sm">
            P E R F U M E
          </div>
          <div className="md:w-[236px] md:h-[96px] w-[295px] h-[64px] font-serif md:text-4xl text-3xl">
            Gabrielle Essence Eau De Parfum
          </div>
          <div className="md:w-[237px] w-[295px] md:pt-[24px] pt-[16px] text-[#6C7289] font-sans ">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </div>
          <div className="flex flex-row gap-[19px]">
            <div className="text-[#3D8168] font-serif text-4xl">$149.99</div>
            <div className="text-[#6C7289] text-sm line-through">$169.99</div>
          </div>
          <div className="flex flex-row">
            <button className="bg-[#3D8168] text-white md:w-[236px] w-[295px] h-[48px] rounded-lg font-bold flex items-center justify-center">
              <img src={cart} alt="cart" />
              <div className="ml-3">Add to Cart</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

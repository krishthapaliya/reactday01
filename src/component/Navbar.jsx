import logo from "@/assets/creame.png";
function Navbar() {
  return (
    <div>
      <div className="flex justify-between py-4 text-[15px] font-semibold items-center">
        <img src={logo} alt="" className=" h-10 w-10" />
        <div className="flex gap-30">
            <div>Home</div>
            <div>About</div>
            <div> Contact</div>
        </div>
       <button className="bg-black text-white px-4 py-1 ">Shop now</button>
      </div>
    </div>
  );
}
export default Navbar;

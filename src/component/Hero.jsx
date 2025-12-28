import product1 from '../assets/creame.png'
function Hero() {
  return (
    <div>
      {" "}
      <div className="w-200 flex flex-col mx-auto text-center gap-10 items-center justify-center ">
        <div>
          <div className="text-[68px] font-semibold mt-25">
            Crafted by Nature, Expertly
            <span className="text-blue-600"> Curated for You.</span>
          </div>
          <div className="text-[24px]">
            From the Heart of Nepal, Our Commitment to Bringing <br />
            Natural Beauty and Balance into Your Home
          </div>
        </div>
        <button className="bg-black text-white px-6 py-3 ">Explore now</button>
      </div>
      <div className='flex justify-between mt-20'>
        <div className='max-w-89.25'>
          <img src={product1} alt=""  className='h-51 w-[357px'/>
          <h1 className='mt-6 text-2xl font-bold'>100+</h1>
          <p>From the Heart of Nepal, Our Commitment to Bringing Natural Beauty and Balance into Your Home</p>
        </div>
        <div className='max-w-89.25'>
          <img src={product1} alt=""  className='h-51 w-[357px'/>
          <h1 className='mt-6 text-2xl font-bold'>100+</h1>
          <p>From the Heart of Nepal, Our Commitment to Bringing Natural Beauty and Balance into Your Home</p>
        </div>
        <div className='max-w-89.25'>
          <h1 className=' text-2xl font-bold'>100+</h1>
          <p>From the Heart of Nepal, Our Commitment to Bringing Natural Beauty and Balance into Your Home</p>
          <img src={product1} alt=""  className='h-51 w-89.25 mt-6'/>
        </div>
      </div>
    </div>
  );
}

export default Hero;

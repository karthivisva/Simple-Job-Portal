const Loading = () => {
  return (
<div className="min-h-screen flex flex-col items-center justify-center bg-white">
  <div className="relative w-20 h-20 flex items-center justify-center">
    {/* Outer Spinning Compass Ring */}
    <div className="absolute w-20 h-20 border-2 border-transparent border-t-black border-b-gray-500 rounded-full animate-spin"></div>

    {/* Compass Markers */}
    <div className="absolute w-full h-full flex justify-center items-center">
      <div className="w-0.5 h-4 bg-black absolute top-0"></div> {/* North */}
      <div className="w-0.5 h-4 bg-black absolute bottom-0"></div> {/* South */}
      <div className="w-4 h-0.5 bg-black absolute left-0"></div> {/* West */}
      <div className="w-4 h-0.5 bg-black absolute right-0"></div> {/* East */}
    </div>

    {/* Middle Pulsating Glow */}
    <div className="absolute w-12 h-12 bg-gradient-to-r from-gray-400 to-black rounded-full animate-pulse"></div>

    {/* Inner Core */}
    <div className="w-4 h-4 bg-black rounded-full shadow-[0_0_10px_rgba(0,0,0,0.8)]"></div>
  </div>

  {/* Futuristic Text Below */}
  <p className="mt-2 text-sm font-semibold text-black animate-pulse">
    FUTURE COMPASS
  </p>
</div>




  )
}

export default Loading
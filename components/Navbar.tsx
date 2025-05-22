export const Navbar = () => {
  return (
<div className="fixed top-5 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-gray-500/10 border border-white/30 shadow-lg rounded-full px-6 py-3 z-50">
  <nav className="flex justify-center items-center gap-6 text-cyan-300 font-medium text-sm">
    <p className="hover:text-cyan-400 transition">Home</p>
    <p className="hover:text-cyan-400 transition">Projects</p>
    <p className="hover:text-cyan-400 transition">Experience</p>
    <p className="hover:text-cyan-400 transition">Contact</p>
  </nav>
</div>

  )
}
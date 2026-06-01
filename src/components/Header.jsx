import Logo from "../assets/checkPhoto.png";
export default function Header() {
  return (
    <header className="flex mx-10 py-3 justify-left items-center gap-5">
      <img src={Logo} alt="Logo" className="h-8 object-cover " />
      <p className="text-green-100 font-bold text-3xl">TODO APP</p>
    </header>
  );
}

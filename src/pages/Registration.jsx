import Header from "../components/Header";
import LogInForm from "../components/LogInForm";

export default function Registration() {
  return (
    <div className="bg-green-900 flex flex-col dark:bg-gray-950 md:px-10 sm:px-1 lg:px-30 min-h-screen ">
      <Header />
      <LogInForm />
    </div>
  );
}

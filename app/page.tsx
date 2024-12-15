import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";


export const metadata = {
  title: "Home | MGC",
  description: "Welcome to MGC",
  'icons': {
    'icon': '/mgc.png',
  },
}
export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      {/* <h1 className="text-3xl font-bold underline flex justify-center items-center h-screen">Hello World!</h1> */}
      <Footer />
    </main>
  );
}
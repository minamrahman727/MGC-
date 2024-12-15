import NavBar from "../components/navbar";
import Footer from "../components/footer";
import About from "../components/about/about";
import Service from "../components/about/services";


export const metadata = {
  title: "About | MGC",
  description: "Founded by Syed Minam Ur Rehman",
  'icons': {
    'icon': '/mgc.png',
  },
}
export default function about() {
  return (
    <main>
      <NavBar />
      <About />
<Service />    
  <Footer />
    </main>
  );
}
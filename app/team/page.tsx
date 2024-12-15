export  const metadata = {
    title: "Our Team | MGC",
    description: "Our team of experts led by Syed Minam Ur Rehman",
    'icons': {
      'icon': '/mgc.png',
    },
};
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import TeamSection from "../components/team/1";
export default function Team() {
  return (<main>
<NavBar />
<TeamSection />
<Footer />
  </main>
  );
}
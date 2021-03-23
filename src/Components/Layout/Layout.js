import Footer from "../Footer/index";
import Navbar from "../Navbar/index";

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.Page}
      <Footer />
    </div>
  );
}

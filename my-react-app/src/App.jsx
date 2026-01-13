import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student/Student";

function App() {
  return (
    <>
      <Card />
      <Button />
      <Student name="Spongebob" age={32} isStudent={true} />
      <Student name="Larry" age={40} isStudent={false} />
      <Student name="Patrick" age={39} isStudent={false} />
      <Student name="Justin" age={60} isStudent={true} />

      <Header />
      <Food />
      <Footer />
    </>
  );
}

export default App;

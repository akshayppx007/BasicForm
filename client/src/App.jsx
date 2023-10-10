import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddForm from "./components/pages/addForm";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import FormList from "./components/pages/formList";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AddForm />} />
          <Route path="/reviews" element={<FormList />} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </>
  );
}

export default App;


import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import FeaturedTestimony from "./components/FeaturedTestimony";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonies from "./components/Testimonies";
import { db } from "./firebase";
import "./index.css"
function App() {

  const [testimonies,setTestimonies] = useState<any>([])
  useEffect(()=>{
    onSnapshot(query(collection(db, "testimonies"), orderBy("createdAt")), (snapshot) => {
      console.log(snapshot.docs.map((doc,index)=>doc.data()))
    setTestimonies(snapshot.docs.map((doc,index)=>doc.data()));
    });
},[])
  return (
    <div className="App">
      <Header /> 
      <Hero />
      <FeaturedTestimony type="CUSTOMER" testimonies={testimonies}/>
      <Testimonies start={0} stop={5} testimonies={testimonies}/>
      <FeaturedTestimony type="VENDOR" testimonies={testimonies}/>
      <Testimonies start={5} testimonies={testimonies}/>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import '../App.css';
import Banner from './Banner';
import Contact from './Contact';
import Other from './Other/Other';
import PreviewList from './PreviewList';



function Home() {
  
  return (
    <div className="App m-0 mt-3 mx-2" style={{fontSize:'15px'}}>
      
      <Banner />
      <hr className="hr" style={{
          margin:0,
          padding: 0,
          backgroundColor: '#ebed75',
          height: 2,
      }} />
      <PreviewList />
      <Contact />
    </div>
  );
}

export default Home;

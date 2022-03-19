
import HorizontalScroll from 'react-scroll-horizontal';
import './works.css';

function Works() {
  const parent  = { height: `100vh`}
  return (
    <div style={parent} className="works">
      <div className="head">
        This are my works and projects
      </div>
     <HorizontalScroll>
      <div className="work_main bg1">
        <h1>Check 1st page</h1>
      </div>
      <div className="work_main bg2">
        <h1>Check 2nd page</h1>
      </div>
      <div className="work_main bg3">
        <h1>Check 3rd page</h1>
      </div>
      <div className="work_main bg4">
        <h1>Check 4th page</h1>
      </div>
      <div className="work_main bg5">
        <h1>Check 5th page</h1>
      </div>
      <div className="work_main bg6">
        <h1>Check 6th page</h1>
      </div>
     </HorizontalScroll>
    </div>
  )
}

export default Works
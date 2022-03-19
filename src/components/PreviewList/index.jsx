
import './style.scss'
import Preview from "../Preview"
import { previews } from '../img_data'

const PreviewList = () => {
  return (
    <div className="pl ">
        <div className="pl-texts">
            <h1 className="pl-title">Create & inspire. It's lama</h1>
            <p className="pl-desc">
                Lama is a creative portfolio that your work has been waiting
                for to hire to make. check and smile
            </p>
        </div>
        <div className="pl-list">
          {previews.map(item=>(
            <Preview key={item.id} img={item.img} link={item.link} />
          ))}
           
        </div>
    </div>
  )
}

export default PreviewList
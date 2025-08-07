import './Daki.css';
import DakiInput from './DakiInput';
import DakiJoke from './DakiJoke';
import DakiList from './DakiList';
import DakiLucky7 from './DakiLucky7';

export default function Daki() {
  return (
    <div className='mare'>
        <div className="upper">
            <div className='goreLevo'><DakiLucky7 /></div>
            <div className='goreSredina'><DakiInput /></div>
            <div className='goreDesno' ><DakiList /></div>
        </div>
        <div className="middle">
            <div className='goreLevo'><DakiList /></div>
            <div className='goreSredina'>dole sredina</div>
            <div className='goreDesno' ><DakiJoke /></div>
        </div>
    </div>
  )
}

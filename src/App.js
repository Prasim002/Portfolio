import mainpic1 from './components/images/mainpic1.png';
import Dictionary from './dictionary';
import Board from './tictactoe';
function main()
{
    return(
      <div className='hero'>
      <>
      <div className='torso'></div>
      <div className='torso' id='t1'></div>
      <div className='torso' id='t2'></div>
      <div className='torso' id='t3'></div>
      <div className='torso' id='t4'></div>
      <div className='torso' id='t5'></div>
      <div className='torso' id='t6'></div>
      <p className='react'>Made with React</p>
      <hr></hr>
      <div className='body'>
        
        <div className='hello'>Prasim Pokharel</div>
        <div className='name'><p className='desc'>A beginner/intermediate learner working my way around making websites. This website aims to exemplify my learning in web development.</p></div>

      </div>
        <a href = '/car.html' className='start'>Click here to start!</a>
      <img src={mainpic1} className='image1'></img>
      <p className='promo'>Don't know what exemplify means? Find its meaning right here:</p>
      {/* <h1 className='qualifications'>Qualifications</h1>
      <ul className='list'>
        <li>Schooling</li>
        <li>Bachelors</li>
      </ul>
      <ul className='description'>
        <li className='description1'>Motherland Secondary School<br></br>2021-2023</li>
        <li className='description2'>Tribhuwan University<br></br>Institute of Engineering<br></br>Paschimanchal Campus, Pokhara<br></br>2024-Present</li>
      </ul> */}
      <Dictionary />
      <Board />
      </>
      </div>
    );
}
export default main;
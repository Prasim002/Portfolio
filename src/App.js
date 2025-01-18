import mainpic1 from './components/images/mainpic1.png';
import fast from './components/images/fast.png';
function main()
{
    return(
      <body>
      <>
      <button className='menu1'>
        {/* <img src={fast} className='menu'></img> */}
      </button>
      {/* <nav className='topnav'>
        <a href=''>About me</a>
        <a href=''>Chill</a>
        <a href=''>Contact me</a>
        <a href=''>Links</a>

      </nav> */}
      <hr></hr>
      <div className='body'>
        <div className='hello'>Prasim Pokharel</div>
        <div className='name'><p className='desc'>A beginner/intermediate learner working my way around making websites. This website aims to showcase my learning in web development.</p></div>

      </div>
      <div className='start'>
        <a href = '/car.html'>Take a tour with Prasim</a>
      </div>
      <img src={mainpic1} className='image1'></img>
      {/* <h1 className='qualifications'>Qualifications</h1>
      <ul className='list'>
        <li>Schooling</li>
        <li>Bachelors</li>
      </ul>
      <ul className='description'>
        <li className='description1'>Motherland Secondary School<br></br>2021-2023</li>
        <li className='description2'>Tribhuwan University<br></br>Institute of Engineering<br></br>Paschimanchal Campus, Pokhara<br></br>2024-Present</li>
      </ul> */}
      
      </>
      </body>
    );
}
export default main;
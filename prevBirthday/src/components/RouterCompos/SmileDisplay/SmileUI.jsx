import React from 'react';
import '../style.css';
import img1 from '../../../smiles/sm1.jpg'
import img2 from '../../../smiles/sm2.jpg'
import img3 from '../../../smiles/sm3.jpg'
import img4 from '../../../smiles/sm4.jpg'
import img5 from '../../../smiles/sm5.jpg'
import img6 from '../../../smiles/sm6.jpg'
import img7 from '../../../smiles/sm7.jpg'
import img8 from '../../../smiles/sm8.jpg'
import img9 from '../../../smiles/sm9.jpg'
import img10 from '../../../smiles/sm10.jpg'

import img12 from '../../../newSmiles/img12_1.jpg'
import img13 from '../../../newSmiles/img8_1.jpg'
import img14 from '../../../newSmiles/img14_1.jpg'



import PoetryComponent from './PoetryComponent';

function SmileUI() {
  return (
    <div className='bodyOfSmile'>
      <div className="external">
        <div className="horizontal-scroll-wrapper">
          <div className="img-wrapper slower">
            <a className='aOfSmile' href="https://drive.google.com/file/d/1--Lede7NkCI5z6kJCNqeHm0Pqub0tYE5/view?usp=drive_link" target="_blank" rel="noopener">
              <img className='imgOfSmile' src={img1} alt="01" />
            </a>
          </div>

          <div className="img-wrapper faster">
            <a className='aOfSmile' href="https://drive.google.com/file/d/1l00RJLmpfRSwNaKKIWmsc87n2c4oojSF/view?usp=drive_link/" target="_blank" rel="noopener">
              <img className='imgOfSmile' src={img10} alt="01" />
            </a>
          </div>

          <div className="img-wrapper slower vertical">
            <a className='aOfSmile' href="https://drive.google.com/file/d/15xGH8lOn-Ae60PGAQUEr3PdigimZskJg/view?usp=drive_link" target="_blank" rel="noopener">
              <img className='imgOfSmile' src={img9} alt="01" />
            </a>
          </div>

          <div className="img-wrapper slower slower-down">
            <a className='aOfSmile' href="https://drive.google.com/file/d/17MP-tkksEo6yiHQtoA9R13jsUzkAoAYT/view?usp=drive_link" target="_blank" rel="noopener">
              <img className='imgOfSmile' src={img12} alt="01" />
            </a>
          </div>


          {/* 1st */}
          <div className="img-wrapper slower">
            <a className='aOfSmile' href="https://drive.google.com/file/d/1YxakotGiTYmYNgB-y_H2pyfCd6xLtzxF/view?usp=drive_link" target="_blank" rel="noopener">
              <img className='imgOfSmile' src={img5} alt="01" />
            </a>
          </div>

          {/* 3rd */}
          <div className="img-wrapper slower vertical">
            <a className='aOfSmile' href="https://drive.google.com/file/d/1QGB8sCAcBWte6JlPuWkMM7P3T7onbpWS/view?usp=drive_link" target="_blank" rel="noopener">
              <img className='imgOfSmile' src={img6} alt="01" />
            </a>
          </div>

          {/* 2nd */}
          <div className="img-wrapper faster">
            <a className='aOfSmile' href="https://drive.google.com/file/d/1nMTmHDcfrL6tV74IY0QoDp8Ks0xIIzo5/view?usp=drive_link" target="_blank" rel="noopener">
              <img className='imgOfSmile' src={img7} alt="01" />
            </a>
          </div>

          {/* 1st */}
          <div className="img-wrapper slower">
            <a className='aOfSmile' href="https://drive.google.com/file/d/1eDpg0pAjAKmklKGaoOPpI5iuItjcpWln/view?usp=sharing" target="_blank" rel="noopener">
              <img className='imgOfSmile' src={img14} alt="01" />
            </a>
          </div>

           {/* 3rd */}
           <div className="img-wrapper slower vertical">
            <a className='aOfSmile' href="https://drive.google.com/file/d/1rJqsz9BACQbIaRd-mWAhl4_X66omPHUX/view?usp=drive_link" target="_blank" rel="noopener">
              <img className='imgOfSmile' src={img2} alt="01" />
            </a>
          </div>
          {/* 4th */}
          <div className="img-wrapper slower slower-down">
            <a className='aOfSmile' href="https://drive.google.com/file/d/1hwZQIG92o4AkxiRYcVC3to2kKIg_a0ex/view?usp=drive_link" target="_blank" rel="noopener">
              <img className='imgOfSmile' src={img4} alt="01" />
            </a>
          </div>

{/* ................................................................................ */}

          {/* 1st */}
          <div className="img-wrapper slower">
            <a className='aOfSmile' href="https://drive.google.com/file/d/1F6p35AMc42FhN3EonoePKgM4A18ItA6U/view?usp=drive_link" target="_blank" rel="noopener">
              <img className='imgOfSmile' src={img13} alt="01" />
            </a>
          </div>
          {/* 2nd */}
          {/* <div className="img-wrapper faster">
            <a className='aOfSmile' href="https://drive.google.com/file/d/1l00RJLmpfRSwNaKKIWmsc87n2c4oojSF/view?usp=drive_link/" target="_blank" rel="noopener">
              <img className='imgOfSmile' src={img10} alt="01" />
            </a>
          </div> */}
          {/* 3rd */}
          {/* <div className="img-wrapper slower vertical">
            <a className='aOfSmile' href="https://drive.google.com/file/d/15xGH8lOn-Ae60PGAQUEr3PdigimZskJg/view?usp=drive_link" target="_blank" rel="noopener">
              <img className='imgOfSmile' src={img9} alt="01" />
            </a>
          </div> */}
          {/* 4th */}
          <div className="img-wrapper slower slower-down">
            <a className='aOfSmile' href="https://drive.google.com/file/d/1fhNqhHVBsKlbxMg9lz-xLZuz4tJT2HZQ/view?usp=drive_link" target="_blank" rel="noopener">
              <img className='imgOfSmile' src={img8} alt="01" />
            </a>
          </div>




          {/* <div>
            <h1>Try Scrolling Down</h1>
          </div> */}



        </div>

        <div className='divOfSmilePoetry'>
          <p className='pOfSmilePoetry'>
            <PoetryComponent />
          </p>
        </div>

        <p className="scroll-info pOfSmile"><span className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" >
            <path d="M50,67.1c-0.6,0-1.2-0.2-1.8-0.7c-3.8-3.8-7.7-7.7-11.5-11.5c-2.3-2.3,1.2-5.8,3.5-3.5c2.5,2.5,4.9,4.9,7.4,7.4 c0-13.7,0-27.4,0-41.2c0-0.6,0.2-1.2,0.5-1.5c0,0,0,0,0,0c0.4-0.6,1.1-1,2-0.9c13.7,0.3,26.4,7.2,33.5,19.1 C96.5,55.9,84.7,85,60.2,91.6C35.5,98.2,11.6,79.1,11.1,54c-0.1-3.2,4.9-3.2,5,0c0.3,13.8,8.4,26.4,21.3,31.5 c12.5,5,27.1,1.9,36.6-7.5c9.5-9.5,12.5-24.1,7.5-36.6c-4.8-12.1-16.3-20.1-29-21.2c0,12.8,0,25.5,0,38.3 c2.5-2.5,4.9-4.9,7.4-7.4c2.3-2.3,5.8,1.3,3.5,3.5c-3.9,3.9-7.8,7.8-11.8,11.8C51.2,66.9,50.6,67.1,50,67.1z" />
          </svg>

        </span>

          Try scrolling down


        </p>

        



        {/* <div>
            <PoetryComponent/>
          </div> */}

        {/*  */}
        {/* <header className='headerOfSmile'>
          <p className='pOfSmile'>Postcards from Paris.</p>
          <h1 className='h1OfSmile'>Css-only parallax horizontal gallery</h1>
          <p className='pOfSmile'>Grab (these and more) photos from - <a href="https://altphotos.com/free/paris/" target="_blank" rel="noopener">altphotos.</a></p>
        </header> */}
      </div>
    </div>
  );
}

export default SmileUI

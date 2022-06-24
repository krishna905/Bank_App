import React from 'react'
import Header1 from '../header1';
import './help.css'
import Footeruu from '../../Design/FooterUi';



function quer1 (){
    return (
        <div className="abc">
        <Header1/>
        <div className='que'>
            <h4 >Write full description of your query...</h4>
            <div id="comment">
            <label for="exampleFormControlTextarea1"></label>
    <textarea class="form-control" id="exampleFormControlTextarea1"placeholder="Comments" rows="3"></textarea>
   <br/>
            </div>
            <button  type="button" class="btn btn-info text-white"><a href='/quer'>Submit</a></button>
        </div>
        <Footeruu/>
        </div>
    )
}
export default quer1;
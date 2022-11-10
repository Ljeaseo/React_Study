//(App.js)

import {useState} from 'react';
import './App.css';

function App() {

  let [title,settitle] = useState(['다른 강의 추천','오늘 점심 추천','쉬는 날엔 뭐하지']);
  let [like,setlike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      
      <div className="black-nav">
        <div>lee_blog</div>
      </div>

      <button onClick={()=>{
        let copy = [...title];
        copy[0]='아무거나 추천';
        settitle(copy);
      }}>글수정</button>

      {/* <div className='list'>
        <h4>{title[0]} <span onClick={()=>{likeplus(like + 1)}}>👍</span> {like} </h4>
        <p>글내용</p>
        <hr/>
      </div>
       
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>글내용</p>
        <hr/>
      </div>

      <div className='list'>
        <h4 onClick={()=>{setModal(!modal)}}>{title[2]}</h4>
        <p>글내용</p>
        <hr/>
      </div> */}

      {
        modal == true ? <Modal/> : null
      }

      {
        title.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{setModal(!modal)}}>{title[i]}</h4>
              <span onClick={()=>{
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setlike(copy)
                }}>👍</span> {like[i]}
              <p>글내용</p>
              <hr/>
            </div>
          )
        })
      }

    </div>
  );
}


function Modal(){
  return(
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}


export default App;


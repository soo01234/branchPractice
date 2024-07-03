
import './App.css'

// 함수형 컴포넌트 만들기
function Header (props) {
  console.log("props : " + props.title)


  return (
    <header>
      <h1>
        <a href="/" 
           onClick={(event)=>{
             event.preventDefault();  //  기본 이벤트 막기
             props.onChangeMode();
           }}>
          {props.title}
        </a>
      </h1>
      
    </header>
  )
}

function Nav(props) {
  const list = [];
for(let i = 0; i < props.boardData.length; i++) {
  let data = props.boardData[i];
  console.log("data: "+data)
  list.push(
    <li key={data.id}>
      <a href={"/read/"+data.id}
         onClick={event => {
           event.preventDefault();
           props.onChangeMode(data.id);
         }}>
        {data.title}
      </a>
    </li>
  );
}

  return (
    <nav>
      <ol>
        {list}
      </ol>
    </nav>
  )
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function App() {

  const boardData = [
    {id:1, title:"html data", body:"html..."},
    {id:2, title:"css data", body:"css..."},
    {id:3, title:"script data", body:"script..."}
  ]


  return (
    <div className="App">
      <Header title="WEBDATA" onChangeMode={()=>{ alert('Header Event call') }}/>
      <Nav boardData={boardData} 
           onChangeMode={(id)=>{ alert('id : ' + id) }}/>
      <Article title="Welcome" 
               body="Hello World"/>
     
    </div>
  )
}

export default App

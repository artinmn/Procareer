import './App.css';
import { useRef, useState } from 'react';
let lastNum = 0;
function App() {

  let [tasks,setTasks] = useState([]);
  let [detail,setDetail] = useState("");

/*   const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    //detail = inputRef.current.value;
    setDetail(inputRef.current.value);
  } */

  let addTask = () => {
    if (detail.trim().length==0)
      return;
    let newTasks = JSON.parse(JSON.stringify(tasks));
    lastNum++;
    newTasks.push({ num: lastNum, details: detail, completed: false });
    setTasks(newTasks);
    setDetail("");
  }

  let completeTask = (index) => {
    let newTasks = JSON.parse(JSON.stringify(tasks));
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
/*     var e = document.getElementById('task_'+index);
    var d = document.createElement('del');
    alert(index,e);
    d.innerHTML = e.innerHTML;
    e.parentNode.insertBefore(d, e);
    e.parentNode.removeChild(e); */
  }

  let removeTask = (index) => {
    //alert(index,JSON.stringify(tasks));
    let newTasks = JSON.parse(JSON.stringify(tasks));
    newTasks.splice(index,1);
    setTasks(newTasks);
  }

  return (
    <div className="App">
          <div id="card" className="d-flex justify-content-center">
        <div className="card text-bg-light m-4">
        <div className="card-header">
            <h3 id="city" className="text-body-secondary">TO DO LIST</h3>
            <div className="d-flex" /* onSubmit={submitHandler} */>
              <input required id="taskName" className="form-control me-2" type="search"
                placeholder="Add task..." aria-label="task" /* ref={inputRef} */
                value={detail} onChange={(e) => { setDetail(e.target.value); }} />
              <button className="btn btn-success" onClick={()=>addTask()}
                type="submit">Add</button>
            </div>
           
        </div>
        <div className="card-body">
          {
            tasks.length==0 && 
            <h5 id="status" style={{height: '20vh', textAlign: 'center'}} 
            class="d-flex justify-content-center align-items-center">
              No tasks have been created yet...</h5>
          }
          {
            tasks.length!=0 && tasks.map((el,index)=>{
              return (
                <>
                <div key={index} className="row justify-content-around align-items-center">
                    <div className="col-4 d-flex justify-content-center">
                        <h6 style={{textAlign: 'center', whiteSpace: 'nowrap'}}
                            className="text-body-secondary">
                              {
                              !el.completed &&
                                  <span id={'task_'+index}>{index+1}) {el.details}</span>
                              }
                              {
                              el.completed &&
                                  <del id={'task_'+index}>{index+1}) {el.details}</del>
                              }
                        </h6>
                    </div>
                    <div className="col-1 d-flex justify-content-center">
                    <button className="btn btn-success" onClick={()=>completeTask(index)}
                        type="button">&#10004;</button>
                    </div>
                    <div className="col-1 d-flex justify-content-center">
                    <button className="btn btn-danger" onClick={()=>removeTask(index)}
                        type="button">&#10006;</button>
                    </div>
                </div>
                <hr/>
                </>
              )
            })
          }
        </div>
{/*         <div className="card-footer">
            <small id="time" className="text-body-secondary"></small>
        </div> */}
        </div>
    </div>
    </div>
  );
}

export default App;

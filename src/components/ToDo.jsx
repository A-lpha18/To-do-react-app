import style from "./ToDo.module.css";
function ToDo(){
      return  (<div className="row">
      <div className="col-4" >
        <input className={style.inputbox} type="text" placeholder="Enter ToDo here"/>
      </div>
      <div className="col-4">
        <input className={style.inputbox}  type="date" name="" id="" />
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-success" style={{"width":"80px"}}>Add</button>
      </div>
      </div>)
}
export default ToDo;
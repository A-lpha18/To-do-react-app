function ToDo1c({todoName,todoTime}){
    return  <div className="row">
    <div className="col-4">
      {todoName}
    </div><br />
    <div className="col-4">
      {todoTime}
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger" style={{"width":"80px"}}>Delete</button>
    </div>
  </div> 
}
export default ToDo1c;
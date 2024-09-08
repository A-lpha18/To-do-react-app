function ToDo1(){
  let todoName="Buy Milk";
  let todoTime="4/10/2024";
    return  <div className="row">
    <div className="col-4">
      {todoName}
    </div>
    <div className="col-4">
      {todoTime}
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger" style={{"width":"80px"}}>Delete</button>
    </div>
  </div> 
}
export default ToDo1;
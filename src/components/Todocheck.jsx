import ToDo1c from "./ToDo1c"
const Todocheck=({check})=>{
    return<>
    <div className="content">
        {check.map(item=> <ToDo1c todoName={item.name} todoTime={item.time}></ToDo1c>)}
    </div>
    </>
}
export default Todocheck;
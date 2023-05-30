function App() {
  const Header = () => {
    return (
      <header>
        <h1>To Do List</h1>
      </header>
    );
  };

  const [list, setList] = React.useState([]);
  const [task, setTask] = React.useState("");
  const [edit, setEdit] = React.useState(false);
  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleClick = () => {
    if (!edit) {
      add();
    } else {
      change();
    }
  };

  const add = () => {
    const newList = [...list];
    newList.push({ task: task, completed: false });
    setList(newList);
    setTask("");
  };

  const handleCheck = (index) => {
    const newList = [...list];
    newList[index].completed = !newList[index].completed;
    setList(newList);
  };

  const handleEdit = (index) => {
    setEdit(!edit);
    change(index);
  };
  const change = (index) => {
    const newList = [...list];
    setTask(newList[index].task);
    newList[index].task = task;
    setList(newList);
    setEdit(!edit);
  };

  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };
  return (
    <React.Fragment>
      <div className="container">
        <h1>ToDo List</h1>
        <div className="wrapper">
          <div
            id="task"
            className="input-group input-group-lg"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Task"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              value={task}
              onChange={handleInputChange}
            />
            <button
              className="btn btn-outline-info"
              type="button"
              id="button-addon1"
              onClick={handleClick}
              disabled={edit}
            >
              {edit ? "Edit" : "Add"}
            </button>
          </div>

          <div id="result">
            <ul>
              {list.map((item, index) => (
                <li key={index} className={item.completed ? "checked" : ""}>
                  <span className="left">{item.task} </span>
                  <span className="right">
                    <button className="btn" onClick={() => handleCheck(index)}>
                      <i className="bi bi-check-square"></i>
                    </button>
                    <button className="btn" onClick={() => handleEdit(index)}>
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button className="btn" onClick={() => handleDelete(index)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));

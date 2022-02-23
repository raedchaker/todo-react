const ToDoCard = ({ todo }) => {
  return (
    <div className="card">
      <img className="card-image" src={todo.url} alt="" />
      <div className="card-text">
        <span className="date">{todo.id}</span>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
    </div>
  );
};

export default ToDoCard;

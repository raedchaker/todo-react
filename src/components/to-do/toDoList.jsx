import ToDoCard from "./toDoCard";

const ToDoList = () => {
  let testList = [
    {
      id: 0,
      url: "https://picsum.photos/210/300",
      title: "todo0",
      description:
        "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor",
    },
    {
      id: 1,
      url: "https://picsum.photos/210/300",
      title: "todo1",
      description:
        "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor",
    },
    {
      id: 2,
      url: "https://picsum.photos/210/300",
      title: "todo2",
      description:
        "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor",
    },
    {
      id: 3,
      url: "https://picsum.photos/210/300",
      title: "todo3",
      description:
        "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor",
    },
    {
      id: 4,
      url: "https://picsum.photos/210/300",
      title: "todo4",
      description:
        "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor",
    },
  ];
  const test = (todo) => {
    console.log(todo);
  };
  return (
    <div>
      <h1>My ToDo List</h1>
      <div>
        {testList.map((el) => (
          <span key={el.id} onClick={() => test(el)}>
            <ToDoCard todo={el} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;

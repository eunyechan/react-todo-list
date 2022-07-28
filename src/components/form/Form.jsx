import "./style.css";
import { useRef, useState } from "react";
import User from "../todo/Todo";
import List from "../list/List";

export default function Form() {
  const [inputs, setInputs] = useState({
    title: "",
    info: "",
    active: false,
  });
  const { title, info } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [list, setList] = useState([]);
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      title,
      info,
    };
    setList([...list, user]);
    setInputs({
      title: "",
      info: "",
    });

    nextId.current += 1;
  };

  const onToggle = (todo) => {
    const newTodos = list.map((item) => {
      if (item.id === todo.id) {
        return { ...todo, active: !item.active };
      } else {
        return item;
      }
    });
    setList(newTodos);
  };

  const onRemove = (id) => {
    setList(list.filter((user) => user.id !== id));
    console.log(id);
  };

  return (
    <>
      <List title={title} info={info} onChange={onChange} onCreate={onCreate} />

      <User
        style={{ width: "100px", height: "100%" }}
        list={list}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </>
  );
}

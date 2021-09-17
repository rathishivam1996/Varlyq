/* eslint-disable */
import React from "react";
import "./Varlyq.css";

const Varlyq = () => {
  const initialData = {
    data: [
      {
        userId: 1,
        id: 1,
        title: "quidem molestiae enim",
      },
      {
        userId: 1,
        id: 2,
        title: "sunt qui excepturi placeat culpa",
      },
      {
        userId: 1,
        id: 3,
        title: "omnis laborum odio",
      },
    ],
    isLoading: false,
    isError: false,
    error: null,
  };

  const handleNavBarSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="my_container">
      <Input
        id="search"
        value="search"
        onInputChange={handleNavBarSearch}
        isFocused={true}
      ></Input>

      <hr />

      <List data={initialData.data} />
    </div>
  );
};

const List = ({ data }) => {
  return data.map((item) => <ListItem key={item.id} item={item}></ListItem>);
};

const ListItem = ({ item }) => {
  return (
    <div>
      <div>{item.title}</div>
    </div>
  );
};

const Input = ({
  id,
  value,
  type = "text",
  isFocused,
  onInputChange,
  children,
}) => {
  return (
    <React.Fragment>
      <input
        id={id}
        type={type}
        value={value}
        autoFocus={isFocused}
        onChange={onInputChange}
      />
      <p>
        searching for <strong>{value}</strong>
      </p>
    </React.Fragment>
  );
};

export default Varlyq;

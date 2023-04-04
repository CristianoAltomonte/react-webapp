import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Roma", "Milano", "Firenze", "Palermo", "Reggio Calabria"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button color="danger" onClick={() => console.log("clicked")}>
        {" "}
        My Button
      </Button>
    </div>
  );
}

export default App;

import "./App.css";
import Card from "./components/Card.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <h2 className="text-blue-600 dark:text-sky-400 font-bold border-2 rounded-xl p-3">
        Learning React With Reviion and using Tailwind CSS
      </h2>

      <div className="flex gap-4">
        <Card
          imageurl="https://media.istockphoto.com/id/174684628/photo/pouring-fresh-coffee.jpg?s=612x612&w=0&k=20&c=pXOkO9bhWVKA7s4JGtvz9aPMZzkF24noXPdXlMkTQ_A="
          title="Strong Black Coffee"
          details="Coffee with Double shot of black coffee."
        />
        <Card
          imageurl="https://www.shutterstock.com/image-photo/flat-white-coffee-black-cup-600nw-2637279775.jpg"
          title="Milk Coffee"
          details="Milk Coffee with having best milk in the market."
        />

        <Card
          imageurl="https://media.istockphoto.com/id/505168330/photo/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks.jpg?s=612x612&w=0&k=20&c=h7v8kAfWOpRapv6hrDwmmB54DqrGQWxlhP_mTeqTQPA="
          title="Cappuccino"
          details="Cappuccino with rich foam and espresso."
        />
      </div>
    </>
  );
}

export default App;

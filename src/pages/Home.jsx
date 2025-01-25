import Card from "../component/Card";
import { data } from "../data/data";
const Home = () => {
  return (
    <section>
      <h2 className="product-heading">All Products</h2>
      <div className="card-container">
        {data.map((product) => {
          return <Card products={product} />;
        })}
      </div>
    </section>
  );
};

export default Home;

import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DummyData =[{
  id:"p1",
  title:"Pizza",
  price:20,
  description:"This is a first product - amazing!"
},

{
  id:"p2",
  title:"Burger",
  price:40,
  description:"This is a first product - amazing!"
},

{
  id:"p3",
  title:"Noodles",
  price:10,
  description:"This is a first product - amazing!"
},
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>

        {
          DummyData.map((product)=>(
            <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
          ))

        }
       

  
      </ul>
    </section>
  );
};

export default Products;

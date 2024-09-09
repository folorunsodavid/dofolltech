import featImg from "../assets/img-main.jpg";


export default function Home({ title }) {
  
  return (
    <div className="container">
      <img src={featImg} className="img-feat" alt="homefeatimg"/> 

      <h1 className="h1">{title}</h1>

      <p>
        This is a fictitious company and conference created by{" "}
        <a
          href="https://www.dofoll.com.ng"
          target="_blank"
          rel="noreferrer noopener"
        >
          Dofoll Technologies, or its affiliates
        </a>
        , solely for the creation and development of educational training
        materials. Any resemblance to real products or services is purely
        coincidental. Information provided about the products or services is
        also fictitious and should not be construed as representative of actual
        products or services on the market in a similar product or service
        category.
      </p>
    </div>
  );
}

/* eslint-disable react/prop-types */
export default function Book(props) {
  return (
    <>
      <div className="cards">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={props.img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <h3 className="card-title">Pr: {props.Price}</h3>
            <p>{props.author}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

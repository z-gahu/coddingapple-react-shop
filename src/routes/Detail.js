import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  const pngNum = Number(id) + 1;
  console.log("id", id, pngNum);

  // let 찾은상품 = props.shoes.find(function (x) {
  //   return x.id == id;
  // });

  let 찾은상품 = props.shoes.find((x) => x.id.toString() === id);

  console.log("찾은상품", 찾은상품);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://codingapple1.github.io/shop/shoes" + pngNum + ".jpg"}
            width="100%"
            alt="shoes"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;

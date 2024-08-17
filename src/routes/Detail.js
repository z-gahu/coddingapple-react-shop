import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

let Box = styled.div`
  background: grey;
  padding: 20px;
`;

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
      <Box>
        <YellowBtn bg="blue">버튼</YellowBtn>
        <YellowBtn bg="orange">버튼</YellowBtn>
      </Box>
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

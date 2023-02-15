import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../../../stores/action/product.action";
import { Pagination } from "antd";
import { changePagination } from "../../../stores/slice/product.slice";

function ProductBrowser() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.product);
  const productPagination = useSelector((state) => state.product.pagination);

  useEffect(() => {
    dispatch(fetchProductList({ page: 1, limit: 20 }));
  }, []);

  console.log(productList);

  return (
    <div className="product-browser-page">
      <h1>Products Listing</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {productList.map((item, index) => {
          return (
            <div
              style={{
                border: "1px solid black",
                marginBottom: "10px",
                padding: "10px",
              }}
            >
              <div> Name: {item.name}</div>
              <div> Price: {item.price}</div>
            </div>
          );
        })}
      </div>
      <Pagination
        onChange={(page, pageSize) => {
          dispatch(fetchProductList({ page: page, limit: pageSize }));
          dispatch(changePagination({ page, limit: pageSize }));
        }}
        current={Number(productPagination.page)}
        total={Number(productPagination.total)}
        pageSize={Number(productPagination.limit)}
      />
    </div>
  );
}

export default ProductBrowser;

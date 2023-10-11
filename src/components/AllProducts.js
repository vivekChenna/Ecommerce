import { useSelector } from "react-redux";
import ProductsListing from "./ProductsListing";
import React, { useState, useEffect } from "react";

const AllProducts = () => {
  const AllProductsData = useSelector((store) => store.app.AllProducts);

  const [data, setData] = useState(AllProductsData);
  const [textDecor, setTextDecor] = useState("All");
  const [searchText, setSearchText] = useState("");

  const filterProductsData = (allProducts, category, searchText) => {
    const result = allProducts.filter((item) => {
      return item?.category === category;
    });

    setData(result);
  };

  const filterSearch = (allProducts, searchText) => {
    const result = allProducts.filter((item) => {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    });

    setData(result);
  };

  useEffect(() => {
    filterSearch(AllProductsData, searchText);
  }, [searchText]);

  return (
    <div className="flex border-2 border-black max-w-7xl mx-auto">
      {/*this is the first div for all filters  */}
      <div className=" w-[370px] border-2 border-black flex flex-col items-center ">
        <div>
          search
          <input
            className=""
            placeholder="search..."
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div>
          <p
            className={
              textDecor === "All"
                ? " cursor-pointer underline"
                : " cursor-pointer"
            }
            onClick={() => [setData(AllProductsData), setTextDecor("All")]}
          >
            All
          </p>
          <p
            className={
              textDecor === "mobile"
                ? " underline cursor-pointer"
                : "cursor-pointer"
            }
            onClick={() => [
              filterProductsData(AllProductsData, "mobile"),
              setTextDecor("mobile"),
            ]}
          >
            mobile
          </p>
          <p
            className={
              textDecor === "laptop"
                ? " underline cursor-pointer"
                : "cursor-pointer"
            }
            onClick={() => [
              filterProductsData(AllProductsData, "laptop"),
              setTextDecor("laptop"),
            ]}
          >
            laptop
          </p>
          <p
            className={
              textDecor === "watch"
                ? " underline cursor-pointer"
                : " cursor-pointer"
            }
            onClick={() => [
              filterProductsData(AllProductsData, "watch"),
              setTextDecor("watch"),
            ]}
          >
            watch
          </p>
          <p
            className={
              textDecor === "accessories"
                ? " underline cursor-pointer"
                : "cursor-pointer"
            }
            onClick={() => [
              filterProductsData(AllProductsData, "accessories"),
              setTextDecor("accessories"),
            ]}
          >
            accessories
          </p>
          <button
            className=" bg-red-500 p-1 text-white"
            onClick={() => {
              setData(AllProductsData);
            }}
          >
            clear filter
          </button>
        </div>
      </div>
      {/* this is the second div for all products listing */}
      <div className=" w-[1024px] max-w-5xl flex flex-col">
        <div className="flex border border-red-500 justify-between">
          {/* for grid and list */}
          <div>
            <button>grid</button>
            <button>list view</button>
          </div>
          {/* all products count */}
          <div>
            <p>
              <span className=" font-bold">{data.length}</span> products
              available
            </p>
          </div>
          {/* filter of highest and lowest */}
          <div>filter highest lowest</div>
        </div>
        <ProductsListing productData={data} />
      </div>
    </div>
  );
};

export default AllProducts;

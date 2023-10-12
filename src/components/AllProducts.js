import { useSelector } from "react-redux";
import ProductsListing from "./ProductsListing";
import React, { useState, useEffect } from "react";
import ListViewProducts from "./ListViewProducts";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";

const AllProducts = () => {
  const AllProductsData = useSelector((store) => store.app.AllProducts);

  const [data, setData] = useState(AllProductsData);
  const [textDecor, setTextDecor] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [showGridView, setShowGridView] = useState(true);

  const filterProductsData = (allProducts, category) => {
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

  function SortProducts(event) {
    let userSelectedValue = event.target.value;
    let allData = [...AllProductsData];

    const Sorting = (a, b) => {
      if (userSelectedValue === "lowest") {
        return a.price - b.price;
      }
      if (userSelectedValue === "highest") {
        return b.price - a.price;
      }

      if (userSelectedValue === "a-z") {
        return a.name.localeCompare(b.name);
      }

      if (userSelectedValue === "z-a") {
        return b.name.localeCompare(a.name);
      }
    };

    const newSortedData = allData.sort(Sorting);
    setData(newSortedData);
  }

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
      <div className=" w-[1024px] max-w-5xl flex flex-col mt-4">
        <div className="flex justify-around items-center">
          {/* for grid and list */}
          <div className=" flex gap-6">
            <button
              className={showGridView ? " border-2 border-black p-1 " : "p-1"}
              onClick={() => {
                setShowGridView(true);
              }}
            >
              <BsFillGrid3X3GapFill fontSize="1.5rem" />
            </button>
            <button
              className={showGridView ? "p-1" : " border-2 border-black p-1"}
              onClick={() => {
                setShowGridView(false);
              }}
            >
              <AiOutlineUnorderedList fontSize="1.6rem" />
            </button>
          </div>
          {/* all products count */}
          <div>
            <p>
              <span className=" font-bold">{data.length}</span> products
              available
            </p>
          </div>
          {/* filter of highest and lowest */}
          <div>
            <form action="#">
              <label htmlFor="sort"></label>
              <select name="sort" id="sort" onClick={SortProducts}>
                <option value="filter">filter</option>
                <option value="lowest">Price(lowest)</option>
                <option value="highest">Price(highest)</option>
                <option value="a-z">Price(a-z)</option>
                <option value="z-a">Price(z-a)</option>
              </select>
            </form>
          </div>
        </div>
        {showGridView ? (
          <ProductsListing productData={data} />
        ) : (
          <ListViewProducts productData={data} />
        )}
      </div>
    </div>
  );
};

export default AllProducts;

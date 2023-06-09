import { NewInstance } from "@/api/http";
import Card from "@/components/card";
import SideNavigation from "@/components/SideNavigation";
import { api, category, products } from "@/config/api";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Category = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  const [cat, setCat] = useState([]);
  useEffect(() => {
    NewInstance.get(`${api}${products}?${category}=${categoryId}`).then((res) =>
      setCat(res.data)
    );
  }, [categoryId, cat]);

  // const myTimeout = setTimeout(myGreeting, 15000);

  // function myGreeting() {
  //   document.getElementById("noDataMessageContainer").innerHTML="please refresh, if it didn't work check your connection";
  //   document.getElementById("loadingAnime").classList.remove("lds-spinner");
  // }

  return (
    <div className="md:flex w-full justify-between  md:justify-evenly items-start md:p-8 md:mt-36 ">
      <Head>
        <title>AHT | product</title>
      </Head>
      <div className="hidden md:block">
        <SideNavigation />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {console.log(cat)}
        {cat.length > 0 ? (
          cat?.map((product) => <Card product={product} key={product.id} />)
        ) : (
          <div className="bg-red-30 w-full h-screen">
            <div class="lds-spinner mx-aut0 my-6">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            {/* <div id="noDataMessageContainer">{() => setTimeout()}</div> */}
          </div>
        )}
        <div className="block md:hidden ml-[10%]">
          <SideNavigation />
        </div>
      </div>
    </div>
  );
};

export default Category;

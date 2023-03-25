import { NewInstance } from "@/api/http";
import Card from "@/components/card";
import SideNavigation from "@/components/SideNavigation";
import { api, products, subcategory } from "@/config/api";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Subcategory = () => {
  const router = useRouter();
  const { subcategoryId } = router.query;
  const [subcat, setSubcat] = useState([]);

  useEffect(
    () => {
      NewInstance.get(`${api}${products}?${subcategory}=${subcategoryId}`).then(
        (res) => setSubcat(res.data)
      );
    },
    [subcategoryId],
    subcat
  );

  // const myTimeout = setTimeout(myGreeting, 15000);

  // function myGreeting() {
  //   document.getElementById("noDataMessageContainer").innerHTML ="please refresh, if it didn't work check your connection";
  //   document.getElementById("loadingAnime").classList.remove("lds-spinner");
  // }

  return (
    <div className="flex w-full justify-evenly items-start p-8  md:mt-48">
      <Head>
        <title>AHT | product</title>
      </Head>
      <div className="hidden md:block">
        <SideNavigation />
      </div>
      {console.log(subcat)}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {subcat.length > 0 ? (
          subcat?.map((product) => <Card product={product} key={product.id} />)
        ) : (
          <div className="bg-red-30 w-full h-screen">
            <div id="loadingAnime" class="lds-spinner mx-aut0 my-6">
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
            {/* <div id="noDataMessageContainer">{() => myTimeout()}</div> */}
          </div>
        )}

        <div className="block md:hidden ml-[10%]">
          <SideNavigation />
        </div>
      </div>
    </div>
  );
};

export default Subcategory;

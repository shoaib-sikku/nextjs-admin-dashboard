"use client";

import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  const page = searchParams.get("page") || 1;

  const item_pe_page = 2;
  
  const hasPrev = item_pe_page * (parseInt(page)-1)>0; 
  const hasNext = item_pe_page * (parseInt(page)-1) +item_pe_page < count; 

  const handleChangePage = (str)=>{
    switch(str){
      case "next":
        params.set("page",parseInt(page)+1)
        break;
      case "prev":
        params.set("page",parseInt(page)-1)
        break;
    }    
    router.replace(`${pathname}?${params}`)
  }
 
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

  const Search = ({placeholder}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handler = useDebouncedCallback((e)=>{
      const params = new URLSearchParams(searchParams);
      
      params.set("page",1);
      
      if(e.target.value){
        params.set("q",e.target.value);
      }else{
        params.delete("q");
      }
      router.replace(`${pathname}?${params}`);
  },300);
  
  return (
    <div className={styles.container}>
    <MdSearch/>
    <input type="text" 
    placeholder={placeholder}
    className={styles.input}
    onChange={handler}
     />  
    </div>
  )
}

export default Search
import { useRouter } from "next/router";
import React from "react";
export default function Home() {
  const router = useRouter();

  React.useEffect(() => {
    router.replace("/get-started");
  }, []);
  return (
    <div className="leading-[31px] bg-[#333] h-[calc(100vh_-_92px)]  md:pt-20 pt-10 flex items-center justify-center">
      <p className="text-2xl text-center text-[#eee]">Coming Soon</p>
    </div>
  );
}

// absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-10 bg-white md:w-1/2 w-full rounded-md

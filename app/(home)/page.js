import Search from "@/components/search/Search";

export default function Home() {
    return (
        <section className="bg-[#F6F3E9] h-screen max-h-screen relative grid place-items-center bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center">
            <div className="container items-center pb-12 ">
                <div className="col-span-7">
                    <h1 className="font-bold text-3xl lg:text-5xl my-4 text-center lg:w-8/12 mx-auto">
                      Feel the warmth, live the moments, cherish the memories.
                    </h1>
                    <p className="my-2 text-[#5f5e5e] text-center">
                      Your perfect stay awaits in any of our 245 rooms, designed with 5-star quality.
                    </p>
                    <Search />
                </div>
            </div>
        </section>
    );
}

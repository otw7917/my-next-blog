import path from "path";
import fs from "fs/promises";
import Carousel from "@/components/carousel";
import TCarousel from "@/components/tCarousel";

export const metadata = {
  title: "homepage",
  description: "popular posts about items",
};

export default async function Home() {
  let images: string[] = [];
  const imagesPath = path.join(process.cwd(), "public/images");
  try {
    images = await fs.readdir(imagesPath);
  } catch (err) {
    console.log(err);
  }

  return (
    <div className='py-2'>
      <div className='w-full h-96'>
        {/* <Carousel data={images}></Carousel> */}
        <TCarousel data={images} />
      </div>
    </div>
  );
}

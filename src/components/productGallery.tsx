import React,{useState} from "react";
import Image from "next/image";
type Props = {
  thumbnail: string;
  gallery: string[];
  title: string;
};

const ProductGallery = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState(props.thumbnail);
    
  return (
    <>
    <div className="h-[250px] max-h-[250px] ">
    <Image
        src={selectedImage? selectedImage : props.thumbnail}
        alt={props.title}
        width={500}
        height={10000}
        className="rounded-lg w-full h-full object-contain "
      />
    </div>
     
      <div className="flex max-w-full gap-4 mt-4">
        {props.gallery.map((image: any) => (
          <div key={image}>
            <Image
              src={image}
              alt={props.title}
              width={500}
              height={500}
              className="rounded-md w-full h-full cursor-pointer object-contain"
              onClick={() => {
                setSelectedImage(image);
              }
              }
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGallery;

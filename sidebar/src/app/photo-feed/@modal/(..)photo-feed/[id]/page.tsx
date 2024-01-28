import Image from "next/image";
import { WonderImage, wondersImages } from "@/app/photo-feed/wonders";
import { Modal } from "@/components/modal/Modal";

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: WonderImage | undefined = wondersImages.find((p) => p.id === id);

  console.log(photo)
  return (
    <Modal>
      <Image
        alt={photo && photo.name ? photo.name : ""}
        src={photo && photo.src ? photo.src : ""}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4 text-black">
        <h2 className="text-xl font-semibold text-black">{photo && photo.name ? photo.name : ""}</h2>
        <h3 >{photo?.photographer}</h3>
        <h3>{photo?.location}</h3>
      </div>
    </Modal>
  );
}

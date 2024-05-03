import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/71e12d44-23ad-4c0e-84df-bab9531d8f8f-kc5llx.jpg",
  "https://utfs.io/f/d4f287ce-f0fd-4970-8466-598d87c27982-w9ukrn.jpg",
  "https://utfs.io/f/49956bb8-0a24-46bb-90fc-95e0049f63ca-1yqdi8.jpg",
  "https://utfs.io/f/0b81bffe-c0dd-4bd4-89ae-4bfd089ca2c7-8lqcdb.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          mockImages.map((image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} alt="image" />
            </div>
          ))
        }
      </div>
    </main>
  );
}

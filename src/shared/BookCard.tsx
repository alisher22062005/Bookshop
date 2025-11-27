export default function BookCard({
  title,
  describe,
  author,
  image,
}: {
  title: string;
  describe: string;
  author: string;
  image: string;
}) {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm rounded-t-[1rem] ">
        <figure className="h-[250px]">
          <img
            className="rounded-t-[1rem] object-fill w-full h-full"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-[1rem] ">
          <h2 className="card-title text-[1.3rem] font-bold line-clamp-1">
            {title}
          </h2>
          <div className=" italic font-serif text-gray-500 text-[1.1rem]">
            {author}
          </div>
          <p className="line-clamp-2">{describe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See</button>
          </div>
        </div>
      </div>
    </>
  );
}

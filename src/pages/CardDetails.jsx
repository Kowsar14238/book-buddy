import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const cards = useLoaderData();
  const { bookId } = useParams();
  // console.log(bookId, cards);
  const card = cards.find((card) => card.bookId === parseInt(bookId));
  console.log(card, bookId);
  // const { bookId, tags, bookName, author, category, rating } = cardInfo;
  return (
    <div className="flex md:flex-row sm:flex-col gap-3 justify-center items-center py-[3%]">
      <div className="basis-2/5">
        <img className="h-96" src={card.image} alt="" />
      </div>

      <div className="flex flex-col flex-wrap basis-2/5">
        <h1 className="text-xl font-bold py-2">{card.bookName}</h1>
        <p className="font-medium pb-3">By : {card.author}</p>
        <hr />
        <p className="py-3">{card.category}</p>
        <hr />
        <p>
          <span className="font-bold">Review : </span>
          {card.review}
        </p>

        <div className="flex flex-wrap items-center gap-2 pb-2">
          <p className="font-bold">Tag</p>
          <div className="flex flex-wrap gap-3 py-2">
            {card.tags.map((tag, index) => (
              <button
                key={index}
                type="button"
                className="px-5 py-2 font-semibold rounded-full text-[#23BE0A] bg-[#22be0a0a]"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <hr />

        <div className="py-3 w-full flex items-center">
          <table className="w-full h-[100%] flex items-center">
            <tbody>
              <tr className="">
                <td className="text-left">Number of Pages:</td>
                <td className="text-center">{card.totalPages}</td>
              </tr>
              <tr>
                <td className="text-left">Publisher:</td>
                <td className="text-center">{card.publisher}</td>
              </tr>
              <tr>
                <td className="text-left">Year of Publishing:</td>
                <td className="text-center">{card.yearOfPublishing}</td>
              </tr>
              <tr>
                <td className="text-left">Rating:</td>
                <td className="text-center">{card.rating}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="btn btn-outline">Read</button>
          <button className="btn btn-info text-white">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, bookId, tags, bookName, author, category, rating } = card;

  return (
    <div className="flex flex-col justify-between px-10 py-3 border-2 rounded-lg border-[#1313132d] transition hover:scale-105">
      <Link to={`/${bookId}`}>
        <div className="flex items-center justify-center">
          <img className="h-40 w-30 rounded-lg" src={card.image} alt="" />
        </div>

        <div className="flex flex-col  h-full ">
          <div className="flex flex-wrap gap-3 py-2">
            {tags.map((tag, index) => (
              <button
                key={index}
                type="button"
                className="px-5 py-2 font-semibold rounded-full text-[#23BE0A] bg-[#22be0a0a]"
              >
                {tag}
              </button>
            ))}
          </div>

          <div>
            <h2 className="text-xl font-bold py-2">{bookName}</h2>
            <p className="font-medium pb-3">By: {author}</p>
            <hr />
            <div className="py-2 flex justify-between items-center">
              <p>{category}</p>
              <div className="flex items-center justify-center gap-1">
                <p>{rating}</p>
                <img
                  className="h-3"
                  src="../../public/star-outline-svgrepo-com.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;

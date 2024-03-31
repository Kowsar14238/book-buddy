
const ListedBooks = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center m-[1%] ">
        <div className="bg-[#13131311] w-full text-center py-4 rounded-lg">
          <h1 className="font-bold text-xl">Books</h1>
        </div>
        <div>
          <label className="form-control w-full max-w-xs my-[12%] ">
            <select className="select select-bordered bg-green-500 text-white">
              <option disabled selected>
                {" "}
                Sort By
              </option>
              <option>Rating</option>
              <option>Number of pages</option>
              <option>Publisher year</option>
            </select>
          </label>
        </div>
      </div>

      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Read Books
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Wishlist Books
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;

import Category from "../CategoryList/Category";
const CategoryList = () => {
  const items = [
    {
      catId: "1",
      catName: "Fiction",
      catImage: "https://placehold.it/400/888888",
    },
    {
      catId: "2",
      catName: "History",
      catImage: "https://placehold.it/400/888888",
    },
    {
      catId: "3",
      catName: "Science",
      catImage: "https://placehold.it/400/888888",
    },
    {
      catId: "4",
      catName: "External Affairs",
      catImage: "https://placehold.it/400/888888",
    },
  ];
  return (
    <div class="container">
      <h1 className="text-center">All categories</h1>
      <div className="row">
        {items.map((category, index) => (
          <Category key={index} data={category} />
        ))}
      </div>
    </div>
  );
};
export default CategoryList;

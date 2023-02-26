const Image = ({ data }) => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div key={data.id} className="group relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img
                src={data.urls.small}
                alt={data.alt_description}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-violet-600">
                  <a href={data.urls.regular} target="_blank" rel="noreferrer">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {data.user.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm font-medium text-yellow-600">
                  {data.created_at.slice(0, 10)}
                </p>
              </div>
              <p className="text-sm font-medium text-emerald-500">
                {data.likes} 🤍
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;

type SearchImageProps = {
  url: string;
};

function SearchImage({ url }: SearchImageProps) {
  // Yes, I know that this is hacky 🙁
  return (
    <div
      style={{
        background: `center / cover no-repeat url(${url})`,
      }}
    >
      <canvas width={270} height={270}></canvas>
    </div>
  );
}

export default SearchImage;

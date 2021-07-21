const useGenre = (selectedgenre) => {
  if (selectedgenre.length < 1) return " ";

  const GenreId = selectedgenre.map((g) => g.id);
  return GenreId.reduce((acc, curr) => acc + "," + curr);
};
export default useGenre;

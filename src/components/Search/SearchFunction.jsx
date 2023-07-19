export const SearchFunction = (data, searchInput) => {
    const filteredData = data.filter((item) => {
        return Object.values(item)
            .join("")
            .toLocaleLowerCase()
            .includes(searchInput);
    });
    return filteredData;
}
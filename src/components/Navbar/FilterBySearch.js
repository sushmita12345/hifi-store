export const FilterBySearch = (searchProduct, searchQuery) => {
    if(searchQuery){
        return [...searchProduct].filter((prod) => 
            prod.category.toLowerCase().includes(searchQuery)
        )
    }
    return searchProduct
}
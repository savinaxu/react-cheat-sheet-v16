export default function(categories, defaults) {
    return categories.map(category => {
        return { ...category, ...defaults };
    });
}
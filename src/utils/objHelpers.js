export const updateObjectInArray = (items, id, objPropName, newObjProps) => items.map(i => {
        if(i[objPropName] === id) return {...i, ...newObjProps}
        return i
    })
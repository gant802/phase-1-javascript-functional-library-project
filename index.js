const myEach = (collection, callback) => {
    const iterateArray = function() { this.forEach(element => callback(element))};
    if (Array.isArray(collection)) {
        iterateArray.call(collection)
    } else {
        const newCollection = Object.values(collection)
        iterateArray.call(newCollection)
    }
    return collection
}

const myMap = (collection, callback) => {
    const newArr = []
    const mapArray = function() { this.map(element => {
        const newElement = callback(element)
        newArr.push(newElement)
    })}
    if (Array.isArray(collection)) {
        mapArray.call(collection)
    } else {
        const newCollection = Object.values(collection)
        mapArray.call(newCollection)
    }
    return newArr
}

const myReduce = (collection, callback, acc) => {
    let accumulator = acc;
    const reduceArray = function() {
        let startIdx = 0
        if (typeof accumulator === 'undefined') {
            accumulator = this[0]
            startIdx = 1 
        }
        for (let i = startIdx; i < this.length; i++) {
            accumulator = callback(accumulator, this[i], this)
        }
        return accumulator
    };

    if (Array.isArray(collection)) {
        accumulator = reduceArray.call(collection)
    } else {
        const newCollection = Object.values(collection)
        accumulator = reduceArray.call(newCollection) 
    }
    return accumulator
}



const myFind = (collection, predicate) => {
    let foundNum;

    const findNum = function() {
        return this.find((num) => predicate(num))
     }

    if (Array.isArray(collection)) {
        foundNum = findNum.call(collection)
    } else {
        const newCollection = Object.values(collection)
        foundNum = findNum.call(newCollection) 
    }

    
    return foundNum
}

const myFilter = (collection, predicate) => {
    let newArr;

    const makeNewArr = function() {
        return this.filter((value) => predicate(value))
    }

    if (Array.isArray(collection)) {
        newArr = makeNewArr.call(collection)
    } else {
        const newCollection = Object.values(collection)
        newArr = makeNewArr.call(newCollection) 
    }

    return newArr
}

const mySize = (collection) => {
    let valueCount = 0;

    const countValues = function() {
        this.forEach(value => valueCount++)
    }

    if (Array.isArray(collection)) {
        countValues.call(collection)
    } else {
        const newCollection = Object.values(collection)
        countValues.call(newCollection) 
    }  

    return valueCount
}


const myFirst = (array, n) => {
    let newArr = [...array]

    if (n === undefined) {
        return newArr[0]
    } else {
        let returnedArr = newArr.splice(0, n)
        return returnedArr
    }
}

const myLast = (array, n) => {
    let newArr = [...array]

    if (n === undefined) {
        return newArr[newArr.length - 1]
    } else {
        let returnedArr = newArr.slice(-n)
        return returnedArr
    }
}

const myKeys = (object) => {
    return Object.keys(object)
}

const myValues = (object) => {
    return Object.values(object)
}


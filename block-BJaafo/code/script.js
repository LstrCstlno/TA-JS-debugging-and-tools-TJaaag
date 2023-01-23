function getFullName(firstName, lastName) {
    return firstName + " " + lastName
}

let result2 = getFullName("weiss", "white")

let expected2 = "weiss white"

if (result2 != expected2) {
    throw new Error(`${result2} is not equal to ${expected2}`)
}

let result = getFullName("lester", "castelino")

let expected = "lester castelino"

if (result != expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}

// if there is an error in the first test the second test doesnt get excecuted

function totalAmount(amount, taxRate) {
    return amount + (amount*taxRate)
}

let taxresult = totalAmount(50, 6)

let taxexpected = 351

if (taxresult!= taxexpected) {
    throw new Error(`${taxresult} is not equal to ${taxexpected}`)
}

let taxresult2 = totalAmount(50, 6)

let taxexpected2 = 350

if (taxresult2!= taxexpected2) {
    throw new Error(`${taxresult2} is not equal to ${taxexpected2}`)
}

// if there is an error in the first test the second test doesnt get excecuted



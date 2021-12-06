export {}

test('grok', () => {

    // let list = []
    // let i = 1
    // do {
    //     list.push(i)
    //     i++
    // } while (i <= 100)


    let list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let item = 10

    let functionGrok = (list: Array<Number>, item: number) => {

        let low = 0
        let high = list.length - 1
        let mid = (low + high) / 2
        let guess = list[Math.floor(mid)]

        while (low <= high) {

            mid = (low + high) / 2
            guess = list[Math.floor(mid)]

            if (guess === item) {
                return list[mid]
            } else if (guess > item) {
                high = mid - 1
            } else low = mid + 1
        }
        return 'no'
    }

    let answer = functionGrok(list2, item)

    expect(list2.length).toEqual(10)
    // expect(list[82]).toEqual(83)
    expect(answer).toEqual(3)
})
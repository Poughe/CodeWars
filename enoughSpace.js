function enough(cap, on, wait) {
    let passengers = (cap - on) - wait;
    return (passengers > 0 ? 0 : -passengers)
}

//https://www.codewars.com/kata/5875b200d520904a04000003/solutions/javascript
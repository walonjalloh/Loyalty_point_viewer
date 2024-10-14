interface User {
    name:string,
    username:string,
    rewardpoints:number,
    age:number,
    address:string
}

const newUser:User[] = [{
    name:"Mohamed Lamin Walon -Jalloh",
    username:"zoomflash",
    rewardpoints:5000,
    address:"K7 Kortright Mount Aureol FBC",
    age:24
}]

export {
    newUser
}
export type {
    User
}
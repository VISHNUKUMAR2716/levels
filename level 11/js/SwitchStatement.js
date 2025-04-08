const day=1
let dayname

switch(day){
    case 1:
    dayname ='monday'
    break
    case 2:
        dayname='tuseday'
        break
        case 3:
            dayname='wednesday'
            break
            case 4:
                dayname ='thursday'
                break
                case 5:
                    dayname ='friday'
                    break
                    case 6 :
                        dayname='saturday'
                        console.log(`${dayname} its a weekend`)
                        break
                        case 7:
                            dayname ='sunday'
                            console.log(`${dayname} its a week end`)
                            default :
                            console.log('Invalid day number. Please enter a number between 1 and 7')
                            break
}
if(day>=1 && day<=5){
 console.log(dayname)
}
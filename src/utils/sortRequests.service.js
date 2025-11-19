export const sortRequests = (a,b)=>{
        let first = a.updatedAt.split('.').reverse();
        let second = a.updatedAt.split('.').reverse();
        let [fYear,fMonth,fDay] = [first[0],first[1],first[2]];
        let [sYear,sMonth,sDay] = [second[0],second[1],second[2]];
        if(first.join('')===second.join(''))
            return 0
        else{
            if(fYear!=sYear)
                return Number(fYear)-Number(sYear)
            if(fMonth!=sMonth)
                return Number(fMonth)-Number(sMonth)
            if(fDay!=fMonth)
                return Number(fDay)-Number(sDay);
        }
    }